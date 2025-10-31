import React from 'react';
import { Transcript } from '../types';

interface ConversationPanelProps {
    isSessionActive: boolean;
    isConnecting: boolean;
    isListening: boolean;
    isSpeaking: boolean;
    startSession: () => void;
    stopSession: () => void;
    transcript: Transcript;
    sessionError: string | null;
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({
    isSessionActive,
    isConnecting,
    isListening,
    isSpeaking,
    startSession,
    stopSession,
    transcript,
    sessionError
}) => {
    const handleMicClick = () => {
        if (isSessionActive) {
            stopSession();
        } else {
            startSession();
        }
    };

    let micButtonState = 'idle';
    let micButtonText = 'Start Session';

    if (isConnecting) {
        micButtonState = 'connecting';
        micButtonText = 'Connecting...';
    } else if (sessionError) {
        micButtonState = 'error';
        micButtonText = 'Retry Session';
    } else if (isSessionActive) {
        if (isSpeaking) {
            micButtonState = 'speaking';
            micButtonText = "AI is speaking...";
        } else if (isListening) {
            micButtonState = 'listening';
            micButtonText = 'Listening...';
        } else {
            micButtonState = 'active';
            micButtonText = 'Session Active';
        }
    }

    const statusText = sessionError || micButtonText;

    return (
        <div className="bg-[#181818] rounded-lg flex flex-col h-full border border-[#262626]">
            <header className="p-4 border-b border-[#262626]">
                <h2 className="font-semibold text-white">Conversational Tutor</h2>
            </header>

            {/* Transcription Area */}
            <div className="flex-grow p-4 overflow-y-auto min-h-0">
                <div className="text-gray-400 mb-4 h-1/2 overflow-y-auto p-2 rounded-md bg-[#0D0D0D]">
                    <p className="font-semibold text-gray-200 mb-2">You said:</p>
                    <p className="italic">{transcript.user || '...'}</p>
                </div>
                <div className="text-brand-green h-1/2 overflow-y-auto p-2 rounded-md bg-[#0D0D0D]">
                    <p className="font-semibold text-gray-200 mb-2">AI said:</p>
                    <p>{transcript.ai || '...'}</p>
                </div>
            </div>

            {/* Controls Area */}
            <div className="p-4 border-t border-[#262626] flex flex-col items-center justify-center">
                <div className="mb-4">
                    <button 
                        onClick={handleMicClick} 
                        disabled={isConnecting}
                        className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-brand-green/50
                            ${micButtonState === 'idle' && 'bg-gray-600 hover:bg-gray-500'}
                            ${micButtonState === 'connecting' && 'bg-gray-500 cursor-not-allowed animate-pulse'}
                            ${(micButtonState === 'active' || micButtonState === 'listening') && 'bg-brand-green shadow-lg shadow-brand-green/20'}
                            ${micButtonState === 'speaking' && 'bg-blue-500 shadow-lg shadow-blue-500/20'}
                            ${micButtonState === 'error' && 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20'}
                        `}
                        aria-label={isSessionActive ? "Stop voice session" : "Start voice session"}
                    >
                        <i className={`fas ${isConnecting ? 'fa-spinner fa-spin' : 'fa-microphone'}`}></i>
                    </button>
                     <p className={`mt-3 text-center text-sm h-5 ${sessionError ? 'text-red-400' : 'text-gray-400'}`}>{statusText}</p>
                </div>

                <div className="w-full flex space-x-2">
                    <input
                        type="text"
                        placeholder="Or type your message here..."
                        className="flex-grow bg-[#262626] border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-green text-sm"
                        disabled={isSessionActive}
                    />
                    <button
                        disabled={isSessionActive}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-500 disabled:bg-gray-700 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConversationPanel;