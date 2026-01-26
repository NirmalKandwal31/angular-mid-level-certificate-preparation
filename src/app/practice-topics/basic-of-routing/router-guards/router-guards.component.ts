import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-router-guards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './router-guards.component.html',
  styleUrl: './router-guards.component.scss',
})
export class RouterGuardsComponent {
  definition = [
    'Router guards control whether navigation is allowed or blocked.',
    'They are commonly used for authentication (protect routes) and preventing data loss (unsaved changes).',
  ];

  canActivateInfo = [
    'Runs before route is activated.',
    'Used for auth checks (login required).',
    'If it returns false/UrlTree, navigation is blocked or redirected.',
  ];

  canDeactivateInfo = [
    'Runs when leaving a route.',
    'Used to warn about unsaved changes.',
    'Usually shows a confirm dialog.',
  ];

  canActivateCode = `export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn() ? true : router.parseUrl('/home');
};`;

  canDeactivateCode = `export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
(component) => component.canDeactivate();`;
}
