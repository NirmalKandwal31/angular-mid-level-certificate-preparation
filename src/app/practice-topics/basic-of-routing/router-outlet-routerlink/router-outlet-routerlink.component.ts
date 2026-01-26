import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-router-outlet-routerlink',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './router-outlet-routerlink.component.html',
  styleUrl: './router-outlet-routerlink.component.scss',
})
export class RouterOutletRouterlinkComponent {
  routerOutletCode = `<router-outlet></router-outlet>`;

  routerLinkCode = `<a [routerLink]="['/home']">Go to Home</a>`;

  routerLinkActiveCode = `<a
  routerLink="/home"
  routerLinkActive="active-link"
>
  Home
</a>`;

  points: string[] = [
    'router-outlet is a placeholder where routed components are displayed',
    'routerLink is used instead of href for SPA navigation',
    'routerLinkActive adds a CSS class when the route is active',
  ];
}
