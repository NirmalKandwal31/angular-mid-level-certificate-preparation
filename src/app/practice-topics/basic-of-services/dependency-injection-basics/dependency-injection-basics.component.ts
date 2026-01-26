import { CommonModule } from '@angular/common';
import { Component, Injectable, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * ✅ Service Example
 * @Injectable makes the class available for Angular DI system.
 * providedIn: 'root' => singleton instance for whole app (root injector)
 */
@Injectable({ providedIn: 'root' })
export class LoggerService {
  private logs: string[] = [];

  log(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logs.unshift(`[${time}] ${message}`);
  }

  getLogs() {
    return this.logs;
  }

  clear() {
    this.logs = [];
  }
}

/**
 * ✅ Another service that depends on LoggerService
 * Shows how DI injects dependencies into constructors.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  private userName = 'Guest';

  constructor(private logger: LoggerService) {}

  setUser(name: string) {
    this.userName = name;
    this.logger.log(`User changed to: ${name}`);
  }

  getUser() {
    this.logger.log(`User requested: ${this.userName}`);
    return this.userName;
  }
}

@Component({
  selector: 'app-dependency-injection-basics',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dependency-injection-basics.component.html',
  styleUrl: './dependency-injection-basics.component.scss',
})
export class DependencyInjectionBasicsComponent {
  // Live demo state
  newName = '';
  currentUser = '';

  constructor(
    public userService: UserService,
    public logger: LoggerService,
    private injector: Injector
  ) {}

  // ---- Live demo actions ----
  setName() {
    const trimmed = (this.newName || '').trim();
    if (!trimmed) {
      this.logger.log('Name input was empty.');
      return;
    }
    this.userService.setUser(trimmed);
    this.currentUser = this.userService.getUser();
    this.newName = '';
  }

  readUser() {
    this.currentUser = this.userService.getUser();
  }

  clearLogs() {
    this.logger.clear();
  }

  // ---- Content / definitions ----
  overviewPoints: string[] = [
    'Dependency Injection (DI) is a design pattern where a class receives its dependencies instead of creating them.',
    'Angular has a built-in DI container that creates and provides service instances.',
    '@Injectable marks a class as available to be injected.',
    'Providers tell Angular how/where to create a dependency.',
  ];

  providerPoints: string[] = [
    "providedIn: 'root' creates a single shared instance (singleton) in the root injector.",
    'You can also provide a service at a component level to create a new instance for that component subtree.',
    'Providers can be configured using class providers, useClass, useValue, useFactory, and useExisting.',
  ];

  hierarchicalPoints: string[] = [
    'Angular injectors form a tree (hierarchy).',
    'Root injector is created at app bootstrap and is shared across the app.',
    'Each component can have its own injector if it declares providers.',
    'If a dependency is not found in the current injector, Angular searches up the parent injectors.',
  ];

  // Safe code snippets (render with [textContent] to avoid ICU issues)
  injectableSnippet = `@Injectable({ providedIn: 'root' })
export class LoggerService { }`;

  injectConstructorSnippet = `export class UserService {
  constructor(private logger: LoggerService) {}
}`;

  providerComponentSnippet = `@Component({
  providers: [LoggerService] // new instance for this component subtree
})
export class AnyComponent { }`;

  hierarchySnippet = `// Search order (simplified):
// Component injector -> Parent injectors -> Root injector

// If provided in component: new instance
// If providedIn: 'root': shared instance across app`;

  // OPTIONAL: show how to resolve from Injector (for teaching)
  injectorSnippet = `constructor(private injector: Injector) {
  const logger = this.injector.get(LoggerService);
  logger.log('Resolved via Injector');
}`;
}
