import { COMPONENT_TYPE } from '@homework-task/enums/componentType';
import { SECTION_TYPE } from '@homework-task/enums/sectionType';
import { SectionData } from '@homework-task/types/pageGenerator';

export const page: SectionData[] = [
    {
        id: 'page1',
        type: SECTION_TYPE.PAGE,
        components: [
            {
                id: 'landing1',
                type: COMPONENT_TYPE.LANDING,
            },
            {
                id: 'userList1',
                type: COMPONENT_TYPE.USER_LIST,
            },
            {
                id: 'postForm1',
                type: COMPONENT_TYPE.POST_FORM,
            },
        ],
    },
    {
        id: 'footer1',
        type: SECTION_TYPE.FOOTER,
        components: [
            {
                id: 'footerComponent',
                type: COMPONENT_TYPE.FOOTER_MENU,
            },
        ],
    },
];
