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
    {
        id: "p2",
        name: 'Build your own Shell',
        subTitle: '//CLI, Shell',
        description: "A CodeCrafters challenge to learn more about parsing shell commands, executing programs and more. I'm writing it in TypeScript, because I want to get better at TypeScript.",
        chipLists: [
            {
                title: 'Languages',
                chips: [technologies.TYPESCRIPT]
            },
        ],
        projectLink: '',
        projectSourceCode: 'https://github.com/Stefdev13/build-your-own-shell-stefshell',
        date: "2026-02"
    },
    {
        id: "p3",
        name: 'Emissions API',
        subTitle: '//Backend API, data modelling',
        description: "An ASP.NET Core Web API that will serve as the backend for the app to calculate your personal carbon emissions.",
        chipLists: [
            {
                title: 'Languages',
                chips: [technologies.CSHARP]
            },
            {
                title: 'Backend',
                chips: [technologies.DOTNET, technologies.POSTGRESQL, technologies.DOCKER]
            },
        ],
        projectLink: '',
        projectSourceCode: 'https://github.com/Stefdev13/companion-api',
        date: "2026-02"
    },
]