import * as technologies from './technologies-constants.js'

export const PROJECTS = [
    {
        id: "p1",
        name: 'My portfolio website',
        subTitle: '//UX & UI, web application, responsive design',
        description: 'A portfolio website build in React to showcase a bit of what I can do. The website has a responive design and was made open source.',
        chipLists: [
            {
                title: 'Frontend',
                chips: [technologies.JAVASCRIPT, technologies.REACT, technologies.HTML, technologies.CSS, technologies.REACT_ROUTER]
            },
            {
                title: 'Styling',
                chips: [technologies.CSS, technologies.JSS, technologies.CSS_MODULES]
            },
            {
                title: 'Testing',
                chips: [technologies.CYPRESS]
            },
        ],
        projectLink: '',
        projectSourceCode: 'https://github.com/Stefdev13/stef-bekaert-portfolio',
        projectImg: '/images/project-1.png',
        date: "2025-09"
    },
]