export interface PracticeProject {
    title: string;
    description: string;
    route: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    type: 'Mini Project' | 'UI Project' | 'Form Project' | 'Practice Flow';
    skills: string[];
    outcomes: string[];
}

export const PRACTICE_PROJECTS: PracticeProject[] = [
    {
        title: 'CRUD Operation Example',
        description:
            'A foundational Angular CRUD flow to practice component interaction, local state handling, and update patterns.',
        route: '/crud-operation-example',
        difficulty: 'Beginner',
        type: 'Mini Project',
        skills: ['CRUD', 'Components', 'State Updates', 'UI Flow'],
        outcomes: [
            'Understand create, read, update, and delete workflows',
            'Practice rendering lists and updating UI state',
            'Strengthen basic Angular component interaction',
        ],
    },
    {
        title: 'CRUD with Reactive Forms',
        description:
            'A practical project focused on reactive forms, validation, and data handling inside CRUD flows.',
        route: '/crud-with-reactive-forms-example',
        difficulty: 'Intermediate',
        type: 'Form Project',
        skills: ['Reactive Forms', 'Validation', 'FormControl', 'Submission Flow'],
        outcomes: [
            'Build confidence with reactive forms structure',
            'Practice validation and controlled form state',
            'Connect forms with CRUD use cases',
        ],
    },
    {
        title: 'Tesla Project',
        description:
            'A UI-oriented Angular project for improving layout composition, reusable sections, and polished presentation.',
        route: '/tesla-project',
        difficulty: 'Intermediate',
        type: 'UI Project',
        skills: ['UI Composition', 'Layout', 'Reusable Components', 'Styling'],
        outcomes: [
            'Practice clean UI structuring in Angular',
            'Work with reusable sections and presentational components',
            'Improve frontend composition confidence',
        ],
    },
    {
        title: 'Tesla Project Without Signal',
        description:
            'A comparison-style version to understand implementation flow without signal-based state management.',
        route: '/tesla-project-without-signal',
        difficulty: 'Intermediate',
        type: 'Practice Flow',
        skills: ['State Handling', 'Comparison', 'Architecture Thinking'],
        outcomes: [
            'Compare approaches to handling UI state',
            'Understand implementation trade-offs',
            'Strengthen architecture-level thinking',
        ],
    },
    {
        title: 'Ryanair Cheap Flights',
        description:
            'A more dynamic Angular project focused on filtering, display logic, and richer user interactions.',
        route: '/ryanair-cheap-flights',
        difficulty: 'Advanced',
        type: 'Mini Project',
        skills: ['Filtering', 'Dynamic UI', 'List Rendering', 'Interaction Design'],
        outcomes: [
            'Practice working with dynamic UI patterns',
            'Improve confidence with data-driven rendering',
            'Handle more realistic interaction-heavy flows',
        ],
    },
];