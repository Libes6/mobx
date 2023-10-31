import { useEffect, useState } from 'react';

export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            console.log(isOnline);
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
            console.log(isOnline);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { isOnline };
};
