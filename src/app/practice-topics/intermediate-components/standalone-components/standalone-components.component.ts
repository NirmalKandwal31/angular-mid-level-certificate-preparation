import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standalone-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './standalone-components.component.html',
  styleUrl: './standalone-components.component.scss',
})
export class StandaloneComponentsComponent {
  intro =
    'Standalone components remove the need for NgModules in many cases. You directly declare dependencies in the component using the imports array.';

  keyPoints: string[] = [
    'standalone: true means the component is not declared in any NgModule.',
    'imports: [] replaces NgModule imports — you import CommonModule, RouterModule, other standalone components, directives, and pipes.',
    'Good for feature pages and modern Angular projects (simpler structure).',
    'You can lazy-load standalone components directly in routes using loadComponent.',
  ];

  whyNoNgModule: string[] = [
    'Before standalone, every component had to be declared inside an NgModule.',
    'Standalone lets you keep feature pages self-contained: template + logic + dependencies in one place.',
    'Less boilerplate, easier learning, and cleaner routing-based feature structure.',
  ];

  commonImports: string[] = [
    'CommonModule → for *ngIf, *ngFor (common directives)',
    'RouterModule → for routerLink, router-outlet usage in templates',
    'FormsModule / ReactiveFormsModule → for template-driven or reactive forms',
    'Other standalone components / directives / pipes → reuse directly',
  ];

  // Safe code snippets (render with [textContent])
  standaloneSnippet = `@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html'
})
export class ExampleComponent { }`;

  importsSnippet = `imports: [
  CommonModule,        // *ngIf, *ngFor
  RouterModule,        // routerLink, router-outlet
  FormsModule,         // ngModel
  ReactiveFormsModule, // FormGroup, FormControl
  SomeOtherComponent,  // reuse standalone component
  MyPipe               // reuse standalone pipe
]`;

  noNgModuleSnippet = `// ✅ No need to declare in NgModule:
// declarations: [ExampleComponent]  ❌ not needed

// You can directly route to it:
{
  path: 'example',
  loadComponent: () =>
    import('./example.component').then(m => m.ExampleComponent)
}`;

  migrationSnippet = `// Old module way (before standalone)
@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, RouterModule]
})
export class FeatureModule { }`;

  demoList = [
    'Standalone components are self-contained.',
    'They declare their own imports.',
    'They can be lazy-loaded directly with loadComponent.',
  ];
}
