import { ReactNode } from 'react';

import { COMPONENT_TYPE } from '@homework-task/enums/componentType';
import { SECTION_TYPE } from '@homework-task/enums/sectionType';

import {
    HeroProps,
    CardsProps,
    ItemsShowcaseProps,
    PanelShowcaseProps,
    TrustBarProps,
} from './props';

export type ComponentProps = HeroProps &
    CardsProps &
    ItemsShowcaseProps &
    PanelShowcaseProps &
    TrustBarProps & {
        children: ComponentData;
    };

export type ComponentData = {
    id: string;
    type: COMPONENT_TYPE;
    props?: ComponentProps;
};

export type SectionProps = {
    className?: string;
    children?: ReactNode;
};

export type SectionData = {
    id: string;
    type: SECTION_TYPE;
    components: ComponentData[];
    props?: Record<string, SectionProps>;
};
