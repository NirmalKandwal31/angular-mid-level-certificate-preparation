import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appmodule-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-module-overview.component.html',
  styleUrl: './app-module-overview.component.scss',
})
export class AppModuleOverviewComponent {
  introPoints: string[] = [
    'In older Angular versions, every application started with a root NgModule called AppModule.',
    'AppModule is responsible for bootstrapping the root component of the application.',
    'Even today, AppModule is widely used in existing and legacy Angular projects.',
  ];

  appModuleExample = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }`;

  bootstrapExplanation: string[] = [
    'Angular starts the application from the bootstrap array.',
    'The component listed here becomes the root component.',
    'This root component is inserted into index.html.',
  ];

  modernNote =
    'In modern Angular (v14+), standalone components can bootstrap the app without AppModule. However, AppModule knowledge is still essential for interviews and maintaining older codebases.';
}
