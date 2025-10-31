
import { useState, useEffect, useCallback } from 'react';
import { Progress } from '../types';
import { INITIAL_PROGRESS } from '../constants';

export const useCourseProgress = (courseId: string) => {
  const getInitialProgress = (): Progress => {
    try {
      const item = window.localStorage.getItem(`progress-${courseId}`);
      return item ? JSON.parse(item) : INITIAL_PROGRESS;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return INITIAL_PROGRESS;
    }
  };

  const [progress, setProgress] = useState<Progress>(getInitialProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(`progress-${courseId}`, JSON.stringify(progress));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [progress, courseId]);

  const updateProgress = useCallback((newProgressData: Partial<Progress>) => {
    setProgress(prev => ({ ...prev, ...newProgressData }));
  }, []);

  const completeLesson = useCallback((lessonId: string, nextLessonId: string) => {
    setProgress(prev => {
        const newCompleted = prev.completedLessons.includes(lessonId) ? prev.completedLessons : [...prev.completedLessons, lessonId];
        return {
            ...prev,
            completedLessons: newCompleted,
            currentLessonId: nextLessonId,
            aiMemory: [...prev.aiMemory, `User has successfully completed the lesson on ${lessonId}.`]
        }
    });
  }, []);

  return { progress, updateProgress, completeLesson };
};
