import { CommonModule } from '@angular/common';
import { Component, Injectable, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

@Component({
  selector: 'app-functional-router-guards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './functional-guards.component.html',
  styleUrl: './functional-guards.component.scss',
})
export class FunctionalGuardsComponent {
  // services (using inject in component too, just for demo)
  auth = inject(AuthService);
  router = inject(Router);

  intro =
    'Functional guards are a modern, clean way to protect routes using functions (CanActivateFn) instead of guard classes.';

  keyPoints: string[] = [
    'CanActivateFn is a function-based guard used to allow/deny navigation.',
    'You can use inject() inside the guard to access services (AuthService, Router, etc.).',
    'Less boilerplate than class-based guards → cleaner and easier to read.',
    'Works great with standalone routes and modern Angular apps.',
  ];

  howItWorks: string[] = [
    'User clicks a protected route.',
    'Angular runs the guard function.',
    'Guard checks auth/role/condition.',
    'If allowed → navigation continues.',
    'If denied → redirect to login or return false/UrlTree.',
  ];

  // ✅ Safe snippets (render with [textContent])
  guardSnippet = `import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true; // ✅ allow
  }

  // ✅ redirect if not logged in
  return router.createUrlTree(['/login']);
};`;

  routeSnippet = `export const routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
    canActivate: [authGuard]
  }
];`;

  classGuardSnippet = `// Old class-based guard (more boilerplate)
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.isLoggedIn()
      ? true
      : this.router.createUrlTree(['/login']);
  }
}`;

  // Demo
  demoMessage =
    'You are currently logged out. Try "Login" to allow protected route.';
  protectedNavigationResult = '';

  login() {
    this.auth.login();
    this.demoMessage =
      'Logged in ✅. Now a CanActivateFn guard would allow navigation.';
  }

  logout() {
    this.auth.logout();
    this.demoMessage =
      'Logged out ❌. Now a CanActivateFn guard would block navigation and redirect.';
  }

  // Simulate what a guard would do (without needing an actual protected route)
  simulateGuardCheck() {
    if (this.auth.isLoggedIn()) {
      this.protectedNavigationResult =
        'Guard result: ✅ Allowed (returns true). Navigation continues.';
    } else {
      this.protectedNavigationResult =
        "Guard result: ❌ Blocked. It would return UrlTree('/login') and redirect.";
    }
  }
}
