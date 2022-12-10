interface TitleElement {
    id: string,
    additionalClassName?: string,
    hash?: string,
    text: string,
    hoveredText: string,
}

const frontPageArr: Array<TitleElement> = [
    {
        id: 'about-link',
        text: 'Hello',
        hoveredText: 'About',
    },
    {
        id: 'projects-link',
        hash: 'projects',
        text: 'My name is',
        hoveredText: 'Projects',
    },
    {
        id: 'contact-link',
        additionalClassName: 'name',
        hash: 'contact',
        text: 'Olha',
        hoveredText: 'Contact',
    }
]

export {frontPageArr};