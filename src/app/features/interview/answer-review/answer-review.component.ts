import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiReviewService } from '../../../core/services/ai-review.service';

@Component({
  selector: 'app-answer-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './answer-review.component.html',
  styleUrl: './answer-review.component.scss',
})
export class AnswerReviewComponent {
  private aiReviewService = inject(AiReviewService);

  topic = signal('Angular Signals');
  question = signal('Explain Angular Signals and how they differ from RxJS Observables.');
  answer = signal('');
  loading = signal(false);
  result = signal('');

  submit() {
    if (!this.answer().trim()) return;

    this.loading.set(true);

    this.aiReviewService.reviewAnswer({
      topic: this.topic(),
      question: this.question(),
      answer: this.answer(),
    }).subscribe({
      next: (response) => {
        this.result.set(response.result);
        this.loading.set(false);
      },
      error: () => {
        this.result.set('Something went wrong while reviewing the answer.');
        this.loading.set(false);
      }
    });
  }
}
