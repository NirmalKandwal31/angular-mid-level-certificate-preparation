import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type SelectorType = {
  type: string;
  syntax: string;
  example: string;
  whenToUse: string;
  notes?: string[];
};

type DoDont = {
  title: string;
  good: string;
  avoid: string;
  why: string;
};

@Component({
  selector: 'app-component-selector',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './component-selector.component.html',
  styleUrl: './component-selector.component.scss',
})
export class ComponentSelectorComponent {
  overview: string[] = [
    'A component selector is the name you use to render (mount) a component in a template.',
    'Angular matches the selector in HTML and replaces it with the component’s template.',
    'Selectors should be unique, consistent, and easy to recognize across the project.',
  ];

  selectorTypes: SelectorType[] = [
    {
      type: 'Element selector (most common)',
      syntax: "selector: 'app-user-card'",
      example: `<app-user-card></app-user-card>`,
      whenToUse:
        'Use for normal components. This is the standard and recommended approach for most Angular components.',
      notes: [
        'Works like a custom HTML element.',
        'Easy to scan and consistent.',
      ],
    },
    {
      type: 'Attribute selector',
      syntax: "selector: '[appHighlight]'",
      example: `<p appHighlight>Highlighted text</p>`,
      whenToUse:
        'Use when the component behaves like a directive that enhances an existing element (less common for full UI components).',
      notes: ['Often used for directives rather than UI components.'],
    },
    {
      type: 'Class selector (rare)',
      syntax: "selector: '.appWarning'",
      example: `<div class="appWarning"></div>`,
      whenToUse:
        'Rarely used. Prefer element/attribute selectors for clarity and maintainability.',
      notes: [
        'Easy to conflict with CSS classes.',
        'Harder to read and maintain.',
      ],
    },
  ];

  whereUsed: { title: string; text: string }[] = [
    {
      title: 'In templates (HTML)',
      text: 'The primary use: placing the selector in a parent component template to render the child component.',
    },
    {
      title: 'In routing (indirectly)',
      text: 'Routes point to components. Those components can then be used via selectors inside other templates.',
    },
    {
      title: 'In shared UI libraries',
      text: 'Selectors help you create reusable UI components that can be dropped into multiple features.',
    },
  ];

  conventions: string[] = [
    'Use a consistent prefix like app- (or your company/team prefix).',
    'Use kebab-case: app-user-profile, app-order-list.',
    'Avoid overly generic names like app-card or app-item unless it is truly generic.',
    'Keep selectors stable once used widely (changing a selector requires updating templates).',
  ];

  doDonts: DoDont[] = [
    {
      title: 'Prefix your selectors',
      good: `selector: 'app-user-profile'`,
      avoid: `selector: 'user-profile'`,
      why: 'A prefix prevents collisions with future HTML tags or third-party components and keeps things consistent.',
    },
    {
      title: 'Use kebab-case (recommended)',
      good: `selector: 'app-user-settings'`,
      avoid: `selector: 'appUserSettings'`,
      why: 'Kebab-case matches HTML conventions and is easier to read in templates.',
    },
    {
      title: 'Keep it descriptive',
      good: `selector: 'app-order-summary'`,
      avoid: `selector: 'app-summary'`,
      why: 'Descriptive selectors are easier to understand when scanning templates.',
    },
  ];

  minimalExample = `@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`<h3>User Card</h3>\`
})
export class UserCardComponent {}

// usage in some template:
<app-user-card></app-user-card>`;
}
