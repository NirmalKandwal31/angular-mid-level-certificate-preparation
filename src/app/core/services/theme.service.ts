import { Injectable, effect, signal } from '@angular/core';

const STORAGE_KEY = 'angular-prep-theme';

export type AppTheme = 'light' | 'dark';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    readonly theme = signal<AppTheme>(this.getInitialTheme());

    constructor() {
        effect(() => {
            const currentTheme = this.theme();

            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add(`${currentTheme}-theme`);

            localStorage.setItem(STORAGE_KEY, currentTheme);
        });
    }

    toggleTheme() {
        this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    }

    setTheme(theme: AppTheme) {
        this.theme.set(theme);
    }

    private getInitialTheme(): AppTheme {
        const saved = localStorage.getItem(STORAGE_KEY) as AppTheme | null;

        if (saved === 'light' || saved === 'dark') {
            return saved;
        }

        return 'light';
    }
}
