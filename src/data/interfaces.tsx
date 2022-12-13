import React, {ReactElement} from "react";

export interface TitleElement {
    id: string,
    additionalClassName: string,
    hash: string,
    text: string,
    hoveredText: string,
}

export interface ExperienceElementDesc {
    title: ReactElement | string,
    subtitle?: string,
    period: string,
    list?: Array<string>,
}

export interface ExperienceElement {
    id: string,
    description: ExperienceElementDesc,
}

export interface Project {
    name: string,
    type: 'commercial' | 'pet-project',
    technologies: Array<string>,
    link: string
}
