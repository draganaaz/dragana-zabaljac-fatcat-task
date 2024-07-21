import { FC } from 'react';

import { Footer } from '@homework-task/components/pages/Footer';
import { Page } from '@homework-task/components/pages/Page';
import { SECTION_TYPE } from '@homework-task/enums/sectionType';
import { SectionProps } from '@homework-task/types/pageGenerator';

export const sectionMap: Record<SECTION_TYPE, FC<SectionProps>> = {
    page: Page,
    footer: Footer,
};
