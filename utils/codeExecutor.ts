import { ConsoleOutput } from '../types';

// A simple and safe-ish way to execute code and capture console logs
export const executeCodeSafely = (code: string, onLog: (output: ConsoleOutput) => void) => {
    const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info,
    };

    const formatMessage = (args: any[]): string => {
        return args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch (e) {
                    return '[Circular Object]';
                }
            }
            return String(arg);
        }).join(' ');
    };

    console.log = (...args: any[]) => onLog({ type: 'log', message: formatMessage(args) });
    console.error = (...args: any[]) => onLog({ type: 'error', message: formatMessage(args) });
    console.warn = (...args: any[]) => onLog({ type: 'warn', message: formatMessage(args) });
    console.info = (...args: any[]) => onLog({ type: 'info', message: formatMessage(args) });

    try {
        // Using new Function() is generally safer than eval() as it doesn't have access to the local scope.
        const func = new Function(code);
        func();
    } catch (e: any) {
        console.error(e.message);
    } finally {
        // Restore original console methods
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
    }
};
