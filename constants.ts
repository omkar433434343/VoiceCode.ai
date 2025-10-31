
import { Course } from './types';

export const JAVASCRIPT_COURSE: Course = {
  id: 'js-basics',
  title: 'JavaScript Basics',
  description: 'Master the fundamentals of JavaScript, from variables to functions.',
  modules: [
    {
      id: 'js-module-1',
      title: 'Introduction to JavaScript',
      lessons: [
        {
          id: 'js-lesson-1',
          title: 'Variables and Data Types',
          concepts: ['Declaring variables with var, let, and const', 'Understanding data types: String, Number, Boolean', 'Using console.log() for output'],
        },
        {
          id: 'js-lesson-2',
          title: 'Operators',
          concepts: ['Arithmetic operators', 'Comparison operators', 'Logical operators'],
        },
        {
          id: 'js-lesson-3',
          title: 'Control Flow',
          concepts: ['If/else statements', 'Switch statements'],
        },
      ],
    },
    {
        id: 'js-module-2',
        title: 'Loops and Functions',
        lessons: [
            {
                id: 'js-lesson-4',
                title: 'Loops',
                concepts: ['For loops', 'While loops', 'Do-while loops'],
            },
            {
                id: 'js-lesson-5',
                title: 'Functions',
                concepts: ['Defining functions', 'Parameters and arguments', 'Return values'],
            }
        ]
    }
  ],
};

export const INITIAL_PROGRESS = {
  completedLessons: [],
  currentLessonId: 'js-lesson-1',
  aiMemory: ['User is a complete beginner.'],
};
