import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);

  readonly isDark = computed(() => this.themeService.theme() === 'dark');

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
