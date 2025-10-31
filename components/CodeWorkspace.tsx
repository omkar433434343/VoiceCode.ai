import React from 'react';
import EditorPanel from './EditorPanel';
import ConsolePanel from './ConsolePanel';
import { ConsoleOutput } from '../types';

interface CodeWorkspaceProps {
    code: string;
    onCodeChange: (value: string | undefined) => void;
    output: ConsoleOutput[];
}

const CodeWorkspace: React.FC<CodeWorkspaceProps> = ({ code, onCodeChange, output }) => {
    return (
        <div className="flex flex-col h-full gap-4">
            <div className="flex-[3] min-h-0">
                <EditorPanel code={code} onCodeChange={onCodeChange} />
            </div>
            <div className="flex-[1] min-h-0">
                <ConsolePanel output={output} />
            </div>
        </div>
    );
};

export default CodeWorkspace;
