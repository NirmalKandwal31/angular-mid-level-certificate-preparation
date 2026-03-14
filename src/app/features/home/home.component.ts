import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TopicCategory, TopicCardItem } from '../../core/models/topic.model';
import { TOPIC_CATEGORIES } from '../../core/data/topic-categories.data';
import { TopicCardComponent } from '../../shared/components/topic-card/topic-card.component';
import { SearchBoxComponent } from '../../shared/components/search-box/search-box.component';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, TopicCardComponent, SearchBoxComponent, ThemeToggleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedCategoryIndex = signal<number | null>(null);
  searchTerm = signal('');

  @ViewChild('subTopicsSection') subTopicsSection!: ElementRef<HTMLDivElement>;
  @ViewChild('pageTop') pageTop!: ElementRef<HTMLDivElement>;

  categories = signal<TopicCategory[]>(TOPIC_CATEGORIES);

  filteredCategories = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return this.categories();
    }

    return this.categories().filter((category) => {
      const categoryMatch =
        category.title.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term);

      const itemMatch = category.items.some((item) =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );

      return categoryMatch || itemMatch;
    });
  });

  totalTopicsCount = computed(() =>
    this.categories().reduce((sum, category) => sum + category.items.length, 0)
  );

  totalInterviewTracks = computed(() =>
    this.categories().filter((category) =>
      category.items.some((item) => item.route.includes('interview-questions'))
    ).length
  );


  private readonly router = inject(Router);

  toggleCategory(i: number) {
    const current = this.selectedCategoryIndex();
    const next = current === i ? null : i;

    this.selectedCategoryIndex.set(next);

    if (next !== null) {
      setTimeout(() => {
        this.subTopicsSection?.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    }
  }

  updateSearch(value: string) {
    this.searchTerm.set(value);
    this.selectedCategoryIndex.set(null);
  }

  navigateTo(topic: TopicCardItem) {
    const hasLocalDetail =
      !!topic.overview ||
      !!topic.keyPoints?.length ||
      !!topic.interviewTips?.length;

    if (hasLocalDetail) {
      this.router.navigate(['topics', topic.route]);
      return;
    }

    this.router.navigate([topic.route]);
  }
}
