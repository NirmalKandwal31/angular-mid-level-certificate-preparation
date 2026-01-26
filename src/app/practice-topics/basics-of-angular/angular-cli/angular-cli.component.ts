import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type CliCmd = {
  title: string;
  command: string;
  meaning: string;
  example: string;
  notes?: string[];
};

@Component({
  selector: 'app-angular-cli',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './angular-cli.component.html',
  styleUrl: './angular-cli.component.scss',
})
export class AngularCliComponent {
  commands: CliCmd[] = [
    {
      title: 'ng new',
      command: 'ng new my-app',
      meaning:
        'Creates a new Angular project. It generates the initial application structure, installs dependencies, and sets up configuration files.',
      example: `ng new practice-hub
cd practice-hub
ng serve`,
      notes: [
        'It will ask questions like whether to add routing and which stylesheet format to use (CSS/SCSS/etc.).',
        'This creates an Angular workspace for your project.',
      ],
    },
    {
      title: 'ng serve',
      command: 'ng serve',
      meaning:
        'Starts a development server and runs your application locally. It rebuilds automatically when you change files (live reload).',
      example: `ng serve
ng serve --open
ng serve --port 4300`,
      notes: [
        '--open automatically opens the app in your browser.',
        '--port allows you to run the app on a custom port.',
      ],
    },
    {
      title: 'ng build',
      command: 'ng build',
      meaning:
        'Builds the application for deployment. The output files are generated inside the dist/ folder.',
      example: `ng build
ng build --configuration production`,
      notes: [
        'Production builds are optimized and minified.',
        'You typically deploy the dist/ output to your hosting/server.',
      ],
    },
    {
      title: 'ng generate (ng g)',
      command: 'ng generate component users  (or)  ng g c users',
      meaning:
        'Generates boilerplate code using Angular schematics. You can generate components, services, directives, pipes, guards, and more.',
      example: `ng g c home
ng g s services/user
ng g guard auth`,
      notes: [
        'Common shortcuts: ng g c (component), ng g s (service), ng g p (pipe).',
        'This helps maintain consistent structure and naming conventions.',
      ],
    },
    {
      title: 'Workspace structure',
      command: 'Key folders and files',
      meaning:
        'Angular projects follow a standard folder structure. These files and folders define your app entry point, configuration, dependencies, and source code.',
      example: `src/
  main.ts
  index.html
  styles.(css|scss)
  app/
  assets/
angular.json
package.json
tsconfig.json`,
      notes: [
        'src/app contains your components, services, and routes.',
        'angular.json stores build/serve configuration.',
        'package.json contains dependencies and scripts.',
      ],
    },
  ];
}
