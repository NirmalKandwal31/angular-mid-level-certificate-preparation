import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hash-location-strategy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hash-location-strategy.component.html',
  styleUrl: './hash-location-strategy.component.scss',
})
export class HashLocationStrategyComponent {
  intro =
    'HashLocationStrategy makes Angular routes work using URL hash (#). Example: https://site.com/#/home';

  keyPoints: string[] = [
    'Hash-based routing uses URLs like /#/route instead of /route.',
    'The part after # is handled by the browser and is not sent to the server.',
    'This avoids server-side 404 errors on refresh for static hosting.',
    'It is useful when you cannot configure server rewrite rules.',
  ];

  whenUseful: string[] = [
    'Static hosting platforms where you cannot set fallback rewrite rules easily.',
    'Legacy servers or shared hosting where server config is restricted.',
    'When refreshing /deep-link routes causes 404 from the server.',
  ];

  tradeoffs: string[] = [
    'URLs look less clean because of #.',
    'Modern hosting usually supports history routing with rewrites (clean URLs).',
    'Hash routes are still valid and reliable when server config is not possible.',
  ];

  // Safe code snippets
  normalUrlSnippet = `// Default (PathLocationStrategy)
https://myapp.com/products
https://myapp.com/profile/settings`;

  hashUrlSnippet = `// HashLocationStrategy
https://myapp.com/#/products
https://myapp.com/#/profile/settings`;

  enableSnippet = `// main.ts (standalone bootstrap)
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
});`;

  whySnippet = `// Why it works on static hosting?
// The server only receives: https://myapp.com/
// The part after # is NOT sent to the server.
// Browser keeps it client-side, Angular Router handles it.`;

  tip =
    'If your hosting supports rewrite rules (fallback to index.html), you can keep clean URLs (no #). If not, use hash routing.';
}
