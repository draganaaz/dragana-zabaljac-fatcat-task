import { FC } from 'react';

import { Cards } from '@homework-task/components/Cards';
import { FooterMenu } from '@homework-task/components/FooterMenu';
import { PostForm } from '@homework-task/components/form/PostForm';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { Landing } from '@homework-task/components/landing/Landing';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { UserList } from '@homework-task/components/UserList';
import { COMPONENT_TYPE } from '@homework-task/enums/componentType';
import { ComponentProps } from '@homework-task/types/pageGenerator';

export const componentMap: Record<COMPONENT_TYPE, FC<ComponentProps>> = {
    hero: Hero,
    card: Cards,
    itemsShowcase: ItemsShowcase,
    panelShowcase: PanelShowcase,
    trustBar: TrustBar,
    postForm: PostForm,
    landing: Landing,
    userList: UserList,
    footerMenu: FooterMenu,
};
