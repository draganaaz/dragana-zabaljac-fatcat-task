import { SectionProps } from '@homework-task/types/pageGenerator';

export const Footer = ({ className, children }: SectionProps) => {
    return <footer className={className}>{children}</footer>;
};
