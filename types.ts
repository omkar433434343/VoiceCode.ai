
export interface Lesson {
  id: string;
  title: string;
  concepts: string[];
}

export interface Module {
  id: string;
  title:string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export enum InteractionMode {
  Chat = 'CHAT',
  Voice = 'VOICE',
}

export interface Progress {
  completedLessons: string[];
  currentLessonId: string;
  aiMemory: string[];
}

export interface Transcript {
  user: string;
  ai: string;
  isFinal: boolean;
}

export interface ConsoleOutput {
    type: 'log' | 'error' | 'warn' | 'info';
    message: string;
}
