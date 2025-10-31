import React from 'react';

interface LearningFooterProps {
    onRun: () => void;
    onReset: () => void;
    onComplete: () => void;
}

const LearningFooter: React.FC<LearningFooterProps> = ({ onRun, onReset, onComplete }) => {
    return (
        <footer className="h-20 p-4 border-t border-[#262626] flex items-center justify-between bg-[#181818] flex-shrink-0">
            <div className="flex items-center gap-2">
                <button onClick={onRun} className="btn-secondary px-4 py-2 rounded-lg flex items-center gap-2">
                    <i className="fas fa-play"></i> Run Code
                </button>
                <button onClick={onReset} className="btn-secondary px-4 py-2 rounded-lg flex items-center gap-2">
                    <i className="fas fa-undo"></i> Reset
                </button>
            </div>
            <button
                onClick={onComplete}
                className="btn-primary px-6 py-3 rounded-lg font-semibold"
            >
                Mark as Complete & Next <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </footer>
    );
};

export default LearningFooter;
