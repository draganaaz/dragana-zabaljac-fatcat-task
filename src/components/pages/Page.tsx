import { SectionProps } from '@homework-task/types/pageGenerator';

export const Page = ({ className, children }: SectionProps) => {
    return <div className={className}>{children}</div>;
};
