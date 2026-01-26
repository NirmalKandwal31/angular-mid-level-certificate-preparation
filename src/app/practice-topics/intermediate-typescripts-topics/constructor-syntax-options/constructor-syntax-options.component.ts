import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type User = {
  name: string;
  role: string;
};

@Component({
  selector: 'app-constructor-syntax-options',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './constructor-syntax-options.component.html',
  styleUrl: './constructor-syntax-options.component.scss',
})
export class ConstructorSyntaxOptionsComponent {
  intro =
    'TypeScript constructors support “parameter properties”. If you add access modifiers (public/private/protected) or readonly in constructor parameters, TypeScript automatically creates and assigns class fields for you.';

  keyPoints: string[] = [
    'Normal constructor needs explicit field declarations + assignments.',
    'Parameter properties let you write less code: constructor(public name: string) {}',
    'private makes a property accessible only inside the class.',
    'readonly means value can be set once (usually in constructor) and cannot be changed later.',
  ];

  // -----------------------------
  // Demo Output
  // -----------------------------
  selectedDemo: 'normal' | 'parameter' | 'private' | 'readonly' = 'parameter';
  outputTitle = '';
  outputLines: string[] = [];

  // Code snippets (safe)
  normalConstructorSnippet = `class UserProfile {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}`;

  parameterPropsSnippet = `class UserProfile {
  constructor(public name: string, public role: string) {}
  // TS automatically creates:
  // public name: string;
  // public role: string;
}`;

  privateSnippet = `class AuthService {
  constructor(private token: string) {}

  showToken() {
    return this.token; // ✅ allowed inside class
  }
}

const a = new AuthService('abc');
// a.token ❌ error: private property`;

  readonlySnippet = `class Config {
  constructor(public readonly apiUrl: string) {}

  changeUrl() {
    // this.apiUrl = 'new-url' ❌ error (readonly)
  }
}`;

  // Quick guide snippet
  quickGuideSnippet = `// Parameter properties options:
constructor(
  public name: string,         // accessible everywhere
  private token: string,       // accessible only inside class
  protected id: number,        // accessible in class + subclasses
  readonly apiUrl: string      // set once, cannot reassign
) {}`;

  // -----------------------------
  // Demo Models (for explanation)
  // -----------------------------
  demoUser: User = { name: 'Alex', role: 'Admin' };

  runDemo(type: 'normal' | 'parameter' | 'private' | 'readonly') {
    this.selectedDemo = type;
    this.outputLines = [];

    if (type === 'normal') {
      this.outputTitle = 'Normal constructor (more code)';
      this.outputLines.push(
        'You must declare fields in the class.',
        'Then you manually assign them inside constructor.',
        `Example: name="${this.demoUser.name}", role="${this.demoUser.role}"`
      );
    }

    if (type === 'parameter') {
      this.outputTitle = 'Parameter properties (clean + short)';
      this.outputLines.push(
        'Add public/private/protected/readonly in constructor params.',
        'TypeScript automatically creates class fields and assigns them.',
        'Angular DI also uses this pattern a lot (constructor(private svc: Svc)).'
      );
    }

    if (type === 'private') {
      this.outputTitle = 'private parameter';
      this.outputLines.push(
        'private makes it accessible only inside the class.',
        'Useful to hide internal values like tokens/config.',
        'Outside code cannot access it directly.'
      );
    }

    if (type === 'readonly') {
      this.outputTitle = 'readonly parameter';
      this.outputLines.push(
        'readonly means “assign once”.',
        'You can set it in constructor but cannot reassign later.',
        'Good for configs/constants injected through constructor.'
      );
    }
  }

  constructor() {
    // default demo
    this.runDemo('parameter');
  }
}
