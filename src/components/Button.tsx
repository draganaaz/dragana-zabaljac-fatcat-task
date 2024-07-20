import { ReactNode, MouseEventHandler } from 'react';

import clsx from 'clsx';

type ButtonProps = {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
