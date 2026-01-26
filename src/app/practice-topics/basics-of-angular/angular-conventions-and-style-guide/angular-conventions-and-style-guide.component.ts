import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Rule = {
  title: string;
  why: string;
  good: string;
  avoid?: string;
};

type Section = {
  heading: string;
  description: string;
  rules: Rule[];
};

@Component({
  selector: 'app-angular-conventions-and-style-guide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './angular-conventions-and-style-guide.component.html',
  styleUrl: './angular-conventions-and-style-guide.component.scss',
})
export class AngularConventionsAndStyleGuideComponent {
  topPrinciples: { title: string; text: string }[] = [
    {
      title: 'Consistency',
      text: 'Follow one naming and folder pattern across the entire project.',
    },
    {
      title: 'Clarity',
      text: 'Prefer readable code and explicit names over clever shortcuts.',
    },
    {
      title: 'Single Responsibility',
      text: 'Keep components small and focused. Move logic into services/helpers.',
    },
    {
      title: 'Scalability',
      text: 'Organize by features and keep shared code in a predictable place.',
    },
  ];

  sections: Section[] = [
    {
      heading: 'Project & Folder Structure',
      description:
        'A clean structure makes scaling and navigation much easier.',
      rules: [
        {
          title: 'Prefer feature-based folders',
          why: 'Keeps related UI + logic together and scales better than “type-based” folders.',
          good: `src/app/
  features/
    users/
      users-list/
      users-detail/
      users.routes.ts
      users.service.ts
  shared/
    ui/
    utils/`,
          avoid: `src/app/
  components/
  services/
  pipes/
  directives/`,
        },
        {
          title: 'Keep shared code in a shared folder',
          why: 'Prevents circular dependencies and makes reuse intentional.',
          good: `src/app/shared/
  ui/
  pipes/
  directives/
  utils/`,
        },
      ],
    },
    {
      heading: 'Naming Conventions',
      description:
        'Predictable naming reduces mental load and improves searchability.',
      rules: [
        {
          title: 'Use kebab-case for file names',
          why: 'Matches Angular ecosystem conventions and keeps filenames consistent.',
          good: `user-profile.component.ts
user-profile.component.html
user-profile.component.scss`,
          avoid: `UserProfile.component.ts
userProfile.component.ts`,
        },
        {
          title: 'Use PascalCase for classes, camelCase for variables',
          why: 'Standard TypeScript conventions.',
          good: `export class UserProfileComponent {}
const userName = 'Ali';`,
        },
        {
          title: 'Use descriptive selectors (if not standalone routing)',
          why: 'Helps avoid selector collisions and clarifies ownership.',
          good: `selector: 'app-user-profile'`,
        },
      ],
    },
    {
      heading: 'Components',
      description:
        'Keep components lean: UI + orchestration, not heavy business logic.',
      rules: [
        {
          title: 'Keep templates simple',
          why: 'Complex templates are hard to test and debug.',
          good: `✅ Use small helper methods / computed values
✅ Use async pipe where possible`,
          avoid: `❌ Heavy logic in template
❌ Nested ternaries everywhere`,
        },
        {
          title: 'Do not put business logic in components',
          why: 'Services are easier to test, reuse, and maintain.',
          good: `Component calls service methods
Service handles data fetching/processing`,
        },
        {
          title: 'Prefer smart/dumb separation (optional)',
          why: 'Container components manage data; presentational components focus on UI.',
          good: `UsersPageComponent (data)
UsersListComponent (UI list)`,
        },
      ],
    },
    {
      heading: 'Services & Dependency Injection',
      description: 'Services should own data access and reusable logic.',
      rules: [
        {
          title: 'Use services for API calls and shared state',
          why: 'Keeps components simpler and improves testability.',
          good: `UsersService: fetchUsers(), createUser()
Component: subscribe / async pipe`,
        },
        {
          title: 'Provide services at root when appropriate',
          why: 'Creates a singleton and avoids accidental multiple instances.',
          good: `@Injectable({ providedIn: 'root' })`,
        },
      ],
    },
    {
      heading: 'TypeScript & Types',
      description: 'Strong typing prevents bugs and makes refactoring safer.',
      rules: [
        {
          title: 'Prefer interfaces/types for data models',
          why: 'Improves autocomplete and makes contracts clear.',
          good: `type User = { id: number; name: string; };`,
        },
        {
          title: 'Avoid any (use unknown if needed)',
          why: 'any disables type safety; unknown forces you to validate.',
          good: `function parse(input: unknown) { /* validate */ }`,
        },
      ],
    },
    {
      heading: 'Templates & Styling',
      description: 'Consistent UI structure keeps the app predictable.',
      rules: [
        {
          title: 'Use structural directives cleanly',
          why: 'Readable templates are easier to maintain.',
          good: `Use <ng-container> to avoid extra DOM nodes`,
        },
        {
          title: 'Prefer component-scoped styles',
          why: 'Avoids global CSS conflicts and makes components portable.',
          good: `styles in component.scss`,
        },
      ],
    },
    {
      heading: 'Performance & Best Practices',
      description: 'Good defaults reduce surprises in larger apps.',
      rules: [
        {
          title: 'Avoid heavy work in change cycles',
          why: 'Heavy computations can slow rendering.',
          good: `Compute once (signals/computed) or in TS, not repeatedly in template`,
        },
        {
          title: 'Use trackBy in large lists',
          why: 'Reduces DOM re-renders when list changes.',
          good: `*ngFor="let item of items; trackBy: trackById"`,
        },
      ],
    },
  ];

  checklist: string[] = [
    'Use feature-based folders',
    'Kebab-case filenames',
    'Components are small and focused',
    'Business logic lives in services',
    'Strict typing (avoid any)',
    'Readable templates (minimal logic)',
    'TrackBy for large ngFor lists',
    'Consistent naming everywhere',
  ];
}
