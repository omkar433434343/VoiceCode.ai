import React from 'react';

interface LearningHeaderProps {
    lessonTitle: string;
    courseTitle: string;
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const LearningHeader: React.FC<LearningHeaderProps> = ({ lessonTitle, courseTitle, toggleSidebar, isSidebarOpen }) => {
    return (
        <header className="h-16 p-4 border-b border-[#262626] flex items-center justify-between bg-[#181818] flex-shrink-0">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700 transition-colors" aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}>
                    <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <div>
                    <p className="text-sm text-gray-400">{courseTitle}</p>
                    <h1 className="font-bold text-lg text-white">{lessonTitle}</h1>
                </div>
            </div>
            <button className="btn-secondary px-4 py-2 rounded-lg text-sm">
                <i className="far fa-lightbulb mr-2"></i> Need a Hint?
            </button>
        </header>
    );
};

export default LearningHeader;
