import { FC } from 'react';

import { componentMap } from '@homework-task/constants/componentMap';
import { sectionMap } from '@homework-task/constants/sectionMap';
import {
    ComponentProps,
    SectionData,
} from '@homework-task/types/pageGenerator';

type PageGeneratorProps = {
    data: SectionData[];
};

export const PageGenerator: FC<PageGeneratorProps> = ({ data }) => {
    return data?.map((section) => {
        const { type, props, components } = section;

        const LayoutComponent = sectionMap[type];

        if (LayoutComponent) {
            return (
                <LayoutComponent key={section.id} {...props}>
                    {components?.map((component) => {
                        const Component = componentMap[component.type];

                        if (Component) {
                            return (
                                <Component
                                    key={component.id}
                                    {...(component.props as unknown as ComponentProps)}
                                >
                                    {component}
                                </Component>
                            );
                        }
                        return null;
                    })}
                </LayoutComponent>
            );
        }

        return null;
    });
};
