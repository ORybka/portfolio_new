import React from "react";
import {TitleElement, ExperienceElement} from "./interfaces";

const frontPageArr: Array<TitleElement> = [
    {
        id: 'about-link',
        additionalClassName: '',
        text: 'Hello',
        hash: '',
        hoveredText: 'About',
    },
    {
        id: 'projects-link',
        additionalClassName: '',
        hash: 'projects',
        text: 'My name is',
        hoveredText: 'Projects',
    },
    {
        id: 'contact-link',
        additionalClassName: ' name',
        hash: 'contact',
        text: 'Olha',
        hoveredText: 'Contact',
    }
]

const experienceArr: Array<ExperienceElement> = [
    {
        id: 'bulls',
        description: {
            title:  <>Currently I work as <span>Frontend developer</span> in the Israeli company named <span>Bulls Media</span>.</>,
            period: 'Dec 2020 - Present (Kyiv, Ukraine)',
            list: [
                'development of websites from scratch using ReactJS + Redux;',
                'development of websites from scratch using HTML, CSS/SASS, JS;',
                'development of internal company projects using HTML, CSS/SASS, JS with further maintenance and support;',
                'feature implementation and fixing of HTML and Wordpress websites;',
                'support of existing projects.',
            ],
        }
    },
    {
        id: 'gs',
        description: {
            title: 'Project Manager',
            subtitle: 'Golden Staff Study',
            period: 'Sep 2018 - Apr 2020 (Kyiv, Ukraine)',
            list: [
                'launched 184 new projects in 62 companies in various fields in Ukraine (IT, banks, pharmaceuticals, agricultural sector, FMCG etc.);',
                '92% of projects were launched within the prescribed deadline;',
                'on average, held 2 meetings per week with new clients for further launch of projects;',
                'gave the presentations for the client\'s employees (for 5 to 35 people) before launch;',
            ],
        }
    },
    {
        id: 'medicina',
        description: {
            title: 'Economist (remote work)',
            subtitle: 'Medicina VM',
            period: 'Sep 2015 - Jul 2019 (Kyiv, Ukraine)',
            list: [
                'calculation of rates for medical services in different types of medical institutions, performance reporting;',
                'assistance in organizing workshops for up to 100 people: contact with clients, paperwork, assistance in preparation of program;',
                'reparation of the company\'s work processes description to develop software to improve the company\'s performance.',
            ],
        }
    },
    {
        id: 'otto',
        description: {
            title: 'Intern in the Payroll Department',
            subtitle: 'OTTO Work Force Polska',
            period: 'Apr 2018 - Jul 2018 (Wroclaw, Poland)',
        }
    },
    {
        id: 'komsa',
        description: {
            title: 'Intern in the Accounting Department',
            subtitle: 'KOMSA Polska',
            period: 'Apr 2017 - Jun 2017 (Wroclaw, Poland)',
        }
    },
]

export {frontPageArr, experienceArr};