import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type DiffRow = {
  aspect: string;
  angular: string;
  angularjs: string;
};

@Component({
  selector: 'app-angular-vs-angularjs-difference',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './angular-vs-angularjs-difference.component.html',
  styleUrl: './angular-vs-angularjs-difference.component.scss',
})
export class AngularVsAngularjsDifferenceComponent {
  summaryChips: string[] = [
    'AngularJS = 1.x (legacy)',
    'Angular = 2+ (modern)',
    'Different architectures',
    'Different performance model',
  ];

  quickTakeaways: string[] = [
    'Angular (2+) is a complete rewrite of AngularJS (1.x). It is not an “upgrade” in a backward-compatible way.',
    'Angular uses TypeScript + component-based architecture, while AngularJS uses JavaScript + controllers with $scope.',
    'Angular typically delivers better performance and tooling because of modern build systems and compilation strategies.',
    'Angular is recommended for new applications; AngularJS is considered legacy and usually maintained only for older projects.',
  ];

  differences: DiffRow[] = [
    {
      aspect: 'Language',
      angular: 'TypeScript (recommended), supports modern JavaScript',
      angularjs: 'JavaScript (ES5-era style was common)',
    },
    {
      aspect: 'Architecture',
      angular: 'Component-based (components + templates + services)',
      angularjs: 'MVC/MVVM style (controllers + $scope + directives)',
    },
    {
      aspect: 'Data Binding',
      angular:
        'Unidirectional patterns encouraged; change detection runs in a controlled cycle',
      angularjs: 'Two-way binding heavily used with watchers',
    },
    {
      aspect: 'Change Detection',
      angular:
        'Change detection mechanism (zone-based by default), more predictable and optimized over time',
      angularjs:
        'Digest cycle with watchers ($digest), can slow down in large apps',
    },
    {
      aspect: 'Rendering / DOM',
      angular: 'Modern rendering pipeline; improved performance and ergonomics',
      angularjs: 'DOM updates via digest cycle + directives',
    },
    {
      aspect: 'Routing',
      angular: 'Built-in Router with lazy loading and guards',
      angularjs: 'Commonly used ngRoute or ui-router (separate libraries)',
    },
    {
      aspect: 'Dependency Injection',
      angular: 'Strong DI system with decorators, tree-shakable providers',
      angularjs: 'DI exists but less structured and older patterns',
    },
    {
      aspect: 'Tooling',
      angular: 'Angular CLI, strong build tooling, testing integration',
      angularjs: 'No official CLI equivalent; tooling varies by setup',
    },
    {
      aspect: 'Mobile & Modern Web',
      angular:
        'Built for modern web apps, supports PWA patterns more naturally',
      angularjs: 'Older framework; modern patterns require more custom work',
    },
    {
      aspect: 'Learning Curve',
      angular: 'More concepts (modules/standalone, RxJS, DI, decorators)',
      angularjs: 'Simpler start, but large apps can become hard to manage',
    },
    {
      aspect: 'Best Use Today',
      angular: 'Recommended for new enterprise-grade SPAs',
      angularjs: 'Legacy maintenance or gradual migration only',
    },
  ];

  whenToChooseAngular: string[] = [
    'You are building a new application.',
    'You want strong typing, modern tooling, and scalable architecture.',
    'Your app is large/enterprise-grade and needs long-term maintainability.',
  ];

  whenYouMaySeeAngularJS: string[] = [
    'Existing legacy applications built years ago.',
    'Projects that are in maintenance mode or migrating gradually.',
    'Organizations that have not completed a modernization effort yet.',
  ];
}
