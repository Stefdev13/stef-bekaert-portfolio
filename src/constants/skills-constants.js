import * as technologies from './technologies-constants.js'

export const SKILLS_TECHNICAL = [
    {
        title: 'Languages',
        subTitle: '(machine)',
        lists:[
            {
                title: 'Currently or recently worked with',
                list: [technologies.DART, technologies.JAVASCRIPT, technologies.HTML, technologies.CSS],
            },
            {
                title: 'Worked with',
                list: [technologies.JAVA, technologies.CSHARP, technologies.PHP, technologies.PYTHON, technologies.KOTLIN],
            },
        ]
    },
    {
        title: 'Frontend',
        lists:[
            {
                title: 'Currently or recently worked with',
                list: [technologies.FLUTTER, technologies.REACT, technologies.REACT_ROUTER, technologies.JSS, technologies.BOOTSTRAP, technologies.TAILWIND, technologies.CYPRESS],
            },
            {
                title: 'Worked with',
                list: [technologies.VUE, technologies.ANGULAR, technologies.KOTLIN],
            },
        ]
    },  
    {
        title: 'Backend',
        lists: [
            {
                title: 'Currently or recently worked with',
                list: [technologies.FLUTTER],
            },
            {
                title: 'Worked with',
                list: [technologies.DOTNET, technologies.LARAVEL, technologies.NODE_JS, technologies.JAVA, technologies.KOTLIN],
            },
        ],
    },
    {
        title: 'Database',
        lists: [
            {
                title: 'Currently or recently worked with',
                list: [technologies.FIREBASE],
            },
            {
                title: 'Worked with',
                list: [technologies.MYSQL, technologies.MONGO_DB],
            },
        ],
    }
]

export const SKILLS_OTHER = [
    {
        title: 'Languages',
        subTitle: '(human)',
        lists:[
            {
                title: 'Fluent',
                list: ['Dutch (native)', 'English'],
            },
            {
                title: 'Can hold a conversation',
                list: ['French'],
            },
            {
                title: 'Could order food',
                list: ['German', 'Spanish'],
            },
        ]
    },
    {
        title: 'Soft skills',
        lists:[
            {
                title: 'General',
                list: ['Analysing', 'Problem-solving', 'Adaptability', 'Creativity', 'Time management', 'Communication', 'Teamwork'],
            },
            {
                title: 'Project related',
                list: ['Agile methodologies', 'Scrum', 'Kanban'],
            },
        ]
    },  
    {
        title: 'Design',
        lists: [
            {
                title: 'General',
                list: ['UI/UX Design', 'Prototyping', 'Wireframing', 'Responsive design'],
            },
            {
                title: 'Applications',
                list: ['Figma', 'Canva'],
            },
        ],
    },
]