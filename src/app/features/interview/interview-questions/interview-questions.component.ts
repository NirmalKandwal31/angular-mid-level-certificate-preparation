import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { INTERVIEW_PACKS, TopicPack } from './interview-question-packs';

@Component({
  selector: 'app-interview-questions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.scss',
})
export class InterviewQuestionsComponent {
  topicKey = signal<string>('basics-of-angular');
  openedIndex = signal<number | null>(0);
  search = signal<string>('');

  private packs: Record<string, TopicPack> = INTERVIEW_PACKS;

  pack = computed<TopicPack>(() => {
    const key = this.topicKey();
    return (
      this.packs[key] ?? {
        title: 'Interview Questions',
        intro:
          'No questions found for this topic yet. Please open a valid topic from Home.',
        questions: [],
      }
    );
  });

  filteredQuestions = computed(() => {
    const q = this.search().trim().toLowerCase();
    const list = this.pack().questions;
    if (!q) return list;
    return list.filter((item) => {
      const hay = `${item.q} ${item.short ?? ''} ${item.answer}`.toLowerCase();
      return hay.includes(q);
    });
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((pm) => {
      const key = pm.get('topic') || 'basics-of-angular';
      this.topicKey.set(key);
      this.openedIndex.set(0);
      this.search.set('');
    });
  }

  toggle(i: number) {
    this.openedIndex.update((cur) => (cur === i ? null : i));
  }

  collapseAll() {
    this.openedIndex.set(null);
  }
}
