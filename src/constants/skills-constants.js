import * as technoglogies from './technologies-constants.js'

export const SKILLS_TECHNICAL = [
    {
        title: 'Languages',
        subTitle: '(machine)',
        lists:[
            {
                title: 'Currently or recently worked with',
                list: [technoglogies.DART, technoglogies.JAVASCRIPT, technoglogies.HTML, technoglogies.CSS],
            },
            {
                title: 'Worked with',
                list: [technoglogies.JAVA, technoglogies.CSHARP, technoglogies.PHP, technoglogies.PYTHON, technoglogies.KOTLIN],
            },
        ]
    },
    {
        title: 'Frontend',
        lists:[
            {
                title: 'Currently or recently worked with',
                list: [technoglogies.FLUTTER, technoglogies.REACT, technoglogies.REACT_ROUTER, technoglogies.JSS, technoglogies.BOOTSTRAP, technoglogies.TAILWIND, technoglogies.CYPRESS],
            },
            {
                title: 'Worked with',
                list: [technoglogies.VUE, technoglogies.ANGULAR, technoglogies.KOTLIN],
            },
        ]
    },  
    {
        title: 'Backend',
        lists: [
            {
                title: 'Currently or recently worked with',
                list: [technoglogies.FLUTTER],
            },
            {
                title: 'Worked with',
                list: [technoglogies.DOTNET, technoglogies.LARAVEL, technoglogies.NODE_JS, technoglogies.JAVA, technoglogies.KOTLIN],
            },
        ],
    },
    {
        title: 'Database',
        lists: [
            {
                title: 'Currently or recently worked with',
                list: [technoglogies.FIREBASE],
            },
            {
                title: 'Worked with',
                list: [technoglogies.MYSQL, technoglogies.MONGO_DB],
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