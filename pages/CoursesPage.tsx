import React from 'react';
import { View } from '../App';
import { JAVASCRIPT_COURSE } from '../constants';

interface CoursesPageProps {
  navigateTo: (view: View) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ navigateTo }) => {
  const courses = [JAVASCRIPT_COURSE]; // Add more courses here in the future

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Explore Our <span className="text-brand-green">Courses</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find the perfect course to start your journey from beginner to expert, guided by your personal AI tutor.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="dark-card rounded-xl p-6 flex flex-col">
              <div className="flex-grow mb-4">
                <div className="w-20 h-20 bg-[#B9FF66]/10 rounded-lg flex items-center justify-center text-brand-green text-4xl font-bold mb-4">
                  JS
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400">{course.description}</p>
              </div>
              <button onClick={() => navigateTo('dashboard')} className="w-full btn-primary py-3 rounded-lg mt-auto">
                Get Started for Free
              </button>
            </div>
          ))}
          
          {/* Placeholder for future courses */}
          <div className="dark-card rounded-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-700">
             <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 text-4xl font-bold mb-4">
                PY
              </div>
              <h3 className="text-2xl font-bold text-gray-600">Python Basics</h3>
              <p className="text-gray-500 text-center">Coming Soon!</p>
          </div>
           <div className="dark-card rounded-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-700">
             <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 text-4xl font-bold mb-4">
                TS
              </div>
              <h3 className="text-2xl font-bold text-gray-600">TypeScript Fundamentals</h3>
              <p className="text-gray-500 text-center">Coming Soon!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
