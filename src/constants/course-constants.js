import * as technoglogies from './technologies-constants.js'

export const COURSES = [
    {
        id: "c1",
        name: 'Getting Started with JavaScript, v2',
        description: "Want to learn to code using JavaScript? This is a great place to start! In this course, you’ll start out with a tour of the basic building blocks programming like variables, loops, functions and operations. Then, you’ll go through the three main pillars of JavaScript: Types and Coercion for comparing values and converting between types, Scope and Closure for knowing where variables can be accessed, and JavaScript’s “this” and Prototype system for dynamic context.",
        technologyList: [ technoglogies.JAVASCRIPT ],
        date: "2025-09",
        link: 'https://frontendmasters.com/courses/getting-started-javascript-v2/',
    },
    {
        id: "c2",
        name: 'Deep JavaScript Foundations, v3',
        description: "Dive into the core pillars of the JavaScript language with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll learn JavaScript's types, how to convert between them, and compare them with == and ===. You'll also learn lexical scope and closure. As well as the objects oriented system (this, prototypes and classes).",
        technologyList: [ technoglogies.JAVASCRIPT ],
        date: "2025-09",
        link: 'https://frontendmasters.com/courses/deep-javascript-v3/',
    },
    {
        id: "c3",
        name: 'Bare Metal JavaScript: The JavaScript Virtual Machine',
        description: "Ever wondered how high-level JavaScript turns into low-level CPU instructions? Learn the fundamentals of CPU mechanics to see how code runs through memory operations, inline caching, and deoptimization. You'll build a mental model of JavaScript's performance characteristics by learning how virtual machines (like Google's V8 engine) work under the hood!",
        technologyList: [ technoglogies.JAVASCRIPT ],
        date: "2025-10",
        link: 'https://frontendmasters.com/courses/javascript-cpu-vm/',
    },
    {
        id: "c4",
        name: 'The Hard Parts of UI Development',
        description: "Keeping what the user sees in sync with the app's data can be tricky, particularly in browsers and big apps. UI tools like React, Angular, and Vue help, but they can be hard to use if you don't know what problems they solve. Develop an under-the-hood knowledge of UI dev by learning techniques such as data binding, UI composition, templating, virtual DOM and its reconciliation, and hooks, all from scratch! You'll learn how JavaScript interacts with browser features like the DOM and HTML parser. By the end, you'll have a complete mental model of UI dev that you can apply to any framework!",
        technologyList: [ technoglogies.JAVASCRIPT ],
        date: "2025-10",
        link: 'https://frontendmasters.com/courses/hard-parts-ui-dev/',
    },
]