import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-mid-cert-practice';

  showHomeButton: boolean = true;   // (optional rename for clarity)
  showScrollTop: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showHomeButton = this.router.url !== '/home';
        // route change pe top button ko bhi reset kar do
        this.showScrollTop = window.scrollY > 300;
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  goHome() {
    if (this.router.url !== '/home') {
      this.showHomeButton = false;
      this.router.navigate(['/home']);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
