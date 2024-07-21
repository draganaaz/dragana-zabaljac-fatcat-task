import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

interface ToasterProps {
    message: string;
}

export const Toaster: React.FC<ToasterProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        isVisible && (
            <div
                className={clsx(
                    'relative',
                    'bg-primary',
                    'text-white',
                    'font-bold',
                    'py-2',
                    'px-4',
                    'rounded',
                    'shadow-lg',
                    'transition-opacity',
                    'duration-300',
                    'opacity-100',
                    'mt-4',
                    'mx-auto',
                    'text-center'
                )}
            >
                {message}
            </div>
        )
    );
};
