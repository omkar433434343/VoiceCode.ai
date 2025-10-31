import { GoogleGenAI, LiveServerMessage, Modality, Blob, FunctionDeclaration, Type } from "@google/genai";
import { Progress } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const writeCodeTool: FunctionDeclaration = {
    name: 'writeCode',
    parameters: {
        type: Type.OBJECT,
        description: 'Writes or completely replaces code in the code editor for the user to see.',
        properties: {
            code: {
                type: Type.STRING,
                description: 'The JavaScript code to write to the editor. The code should be complete and runnable.',
            },
            explanation: {
                type: Type.STRING,
                description: 'A brief, friendly explanation of the code being written. This will be spoken to the user.',
            }
        },
        required: ['code', 'explanation'],
    },
};

const executeCodeTool: FunctionDeclaration = {
    name: 'executeCode',
    parameters: {
        type: Type.OBJECT,
        description: 'Executes the current code in the editor and displays the output in the console.',
        properties: {},
        required: [],
    },
};

const readCodeTool: FunctionDeclaration = {
    name: 'readCode',
    parameters: {
        type: Type.OBJECT,
        description: 'Reads the current content of the code editor. Use this to see what the user has written before providing feedback or making changes.',
        properties: {},
        required: [],
    },
};

// Fix: Infer the LiveSession type from the SDK's connect method and export it for use in other files.
export type LiveSession = Awaited<ReturnType<typeof ai.live.connect>>;

export const startLiveSession = (
    progress: Progress,
    callbacks: {
        onopen: () => void;
        // Fix: Use the official LiveServerMessage type for the onmessage callback.
        onmessage: (message: LiveServerMessage) => void;
        onerror: (e: ErrorEvent) => void;
        onclose: (e: CloseEvent) => void;
    }
): Promise<LiveSession> => {
    const { currentLessonId, aiMemory } = progress;

    const systemInstruction = `
        You are VoiceCode.ai, a friendly and encouraging AI programming tutor. Your goal is to teach programming through a Socratic, conversational style via real-time voice.
        Your personality is patient, knowledgeable, and slightly enthusiastic.
        - ALWAYS keep your spoken explanations concise (1-3 sentences) to maintain a conversational flow.
        - Ask leading questions to help the user discover the answer themselves. Avoid giving direct answers immediately.
        - You have three primary tools to help the user:
          1. 'readCode()': Reads the current code in the editor. ALWAYS use this tool to understand the user's code before trying to modify it or answer questions about it.
          2. 'writeCode(code, explanation)': Writes or completely replaces code in the user's editor. After reading the code with 'readCode', use this to provide the full, corrected code block. You MUST provide a spoken explanation.
          3. 'executeCode()': Runs the code in the editor. Announce that you are running the code.
        - Do not describe the code you are about to write in your spoken response. Instead, put the explanation in the 'explanation' parameter of the 'writeCode' function.
        - Your responses are transcribed in real-time.
        - You are teaching a lesson on "${currentLessonId}".
        - The user's learning history is: ${aiMemory.join('. ')}.
        - Start the conversation by greeting the user and introducing the lesson topic.
    `;

    return ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks,
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
            },
            systemInstruction,
            outputAudioTranscription: {},
            inputAudioTranscription: {},
            tools: [{ functionDeclarations: [writeCodeTool, executeCodeTool, readCodeTool] }],
        },
    });
};

export function createPcmBlob(data: Float32Array): Blob {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
        int16[i] = data[i] * 32768;
    }
    // The js-base64 library is not available, so a manual implementation is needed.
    const encode = (bytes: Uint8Array) => {
        let binary = '';
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    return {
        data: encode(new Uint8Array(int16.buffer)),
        mimeType: 'audio/pcm;rate=16000',
    };
}
