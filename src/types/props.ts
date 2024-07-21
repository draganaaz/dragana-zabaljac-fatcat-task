import { ReactNode } from 'react';

type Card = {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
};

export type CardsProps = {
    cards: Card[];
};

export type HeroProps = {
    title: string;
    image: string;
};

type Item = {
    title: string;
    description: string;
    image?: string;
};

export type ItemsShowcaseProps = {
    items: Item[];
};

export type LayoutProps = {
    children: ReactNode;
    background?: string;
};

export interface ListProps<T> {
    apiURL: string;
    renderItem: (item: T) => ReactNode;
}

export type PanelShowcaseProps = {
    items: Item[];
};

export type TrustBarProps = {
    images: string[];
};
