import { CommonModule, Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PRACTICE_PROJECTS } from './practice-projects.data';


type ProjectDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

@Component({
  selector: 'app-practice-project-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './practice-project-list.component.html',
  styleUrls: ['./practice-project-list.component.scss'],
})
export class PracticeProjectListComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly searchTerm = signal('');
  readonly selectedDifficulty = signal<'All' | ProjectDifficulty>('All');

  readonly projects = signal(PRACTICE_PROJECTS);

  readonly filteredProjects = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const difficulty = this.selectedDifficulty();

    return this.projects().filter((project) => {
      const matchesDifficulty =
        difficulty === 'All' || project.difficulty === difficulty;

      const matchesTerm =
        !term ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.skills.some((skill) => skill.toLowerCase().includes(term));

      return matchesDifficulty && matchesTerm;
    });
  });

  updateSearch(value: string) {
    this.searchTerm.set(value);
  }

  setDifficulty(value: 'All' | ProjectDifficulty) {
    this.selectedDifficulty.set(value);
  }

  openProject(route: string) {
    this.router.navigate([route]);
  }

  goBack() {
    this.location.back();
  }
}