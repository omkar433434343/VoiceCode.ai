
import React, { useState, useEffect, useCallback } from 'react';
import { FunctionCall, FunctionResponse } from "@google/genai";
import { Course, Lesson, Transcript, ConsoleOutput } from '../types';
import RoadmapSidebar from './RoadmapSidebar';
import { useCourseProgress } from '../hooks/useCourseProgress';
import { useLiveTutor } from '../hooks/useLiveTutor';
import LearningHeader from './LearningHeader';
import ConversationPanel from './ConversationPanel';
import CodeWorkspace from './CodeWorkspace';
import LearningFooter from './LearningFooter';
import { executeCodeSafely } from '../utils/codeExecutor';

interface LearningViewProps {
  course: Course;
  onBack: () => void;
}

const LearningView: React.FC<LearningViewProps> = ({ course, onBack }) => {
  const { progress, completeLesson } = useCourseProgress(course.id);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [editorCode, setEditorCode] = useState('// Your AI tutor will write code here...');
  const [consoleOutput, setConsoleOutput] = useState<ConsoleOutput[]>([]);
  const [transcript, setTranscript] = useState<Transcript>({ user: '', ai: '', isFinal: false });

  const typeCode = (code: string) => {
    // A small delay to ensure the state update from setEditorCode('') is processed
    setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < code.length) {
                setEditorCode(prev => code.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 15);
    }, 50);
  };

  const handleRunCode = useCallback(() => {
    setConsoleOutput([]); // Clear previous output before running
    executeCodeSafely(editorCode, (output) => {
        setConsoleOutput(prev => [...prev, output]);
    });
  }, [editorCode]);

  const handleToolCall = async (functionCalls: FunctionCall[]): Promise<FunctionResponse[]> => {
      const responses: FunctionResponse[] = [];
      for (const fc of functionCalls) {
          switch (fc.name) {
              case 'writeCode':
                  setEditorCode(''); // Clear editor before typing new code
                  typeCode(fc.args.code as string);
                  // The explanation is spoken by the AI, we just need to acknowledge the call
                  responses.push({ id: fc.id, name: fc.name, response: { result: "Code written successfully." } });
                  break;
              case 'executeCode':
                  handleRunCode();
                  responses.push({ id: fc.id, name: fc.name, response: { result: "Code executed." } });
                  break;
              case 'readCode':
                  responses.push({ id: fc.id, name: fc.name, response: { result: editorCode } });
                  break;
          }
      }
      return responses;
  };

  const onStreamMessage = useCallback((newTranscript: Transcript) => {
    setTranscript(newTranscript);
  }, []);
  
  useEffect(() => {
    const lesson = course.modules
      .flatMap(m => m.lessons)
      .find(l => l.id === progress.currentLessonId);
    setCurrentLesson(lesson || null);
  }, [progress.currentLessonId, course]);

  const { 
    isSessionActive, 
    isConnecting,
    isSpeaking, 
    isListening, 
    startSession, 
    stopSession,
    sessionError
  } = useLiveTutor(onStreamMessage, handleToolCall, progress, currentLesson);
  
  const handleCompleteLesson = () => {
      const nextLesson = getNextLesson();
      if(nextLesson && currentLesson){
        completeLesson(currentLesson.id, nextLesson.id);
      } else if (currentLesson) {
         // Mark final lesson as complete even if no next lesson
         completeLesson(currentLesson.id, currentLesson.id);
         alert("Congratulations! You've completed the course!");
         onBack();
      }
  }

  const getNextLesson = (): Lesson | null => {
    const allLessons = course.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson?.id);
    if(currentIndex !== -1 && currentIndex < allLessons.length - 1){
        return allLessons[currentIndex + 1];
    }
    return null;
  }

  return (
    <div className="flex h-screen bg-[#0D0D0D] text-gray-200 font-sans">
      <RoadmapSidebar
        course={course}
        completedLessons={progress.completedLessons}
        currentLessonId={progress.currentLessonId}
        onBack={onBack}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main className="flex flex-col flex-grow relative transition-all duration-300" style={{ marginLeft: isSidebarOpen ? '20rem' : '0' }}>
        <LearningHeader 
            lessonTitle={currentLesson?.title || 'Loading...'} 
            courseTitle={course.title}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
        />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
          <ConversationPanel 
            isSessionActive={isSessionActive}
            isConnecting={isConnecting}
            isListening={isListening}
            isSpeaking={isSpeaking}
            startSession={startSession}
            stopSession={stopSession}
            transcript={transcript}
            sessionError={sessionError}
          />
          <CodeWorkspace 
            code={editorCode}
            onCodeChange={setEditorCode}
            output={consoleOutput}
          />
        </div>
        <LearningFooter 
            onComplete={handleCompleteLesson}
            onRun={handleRunCode}
            onReset={() => {
                setEditorCode('// Code has been reset.');
                setConsoleOutput([]);
            }}
        />
      </main>
    </div>
  );
};

export default LearningView;
