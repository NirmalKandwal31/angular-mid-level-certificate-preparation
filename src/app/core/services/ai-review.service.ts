import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AiReviewService {
  private http = inject(HttpClient);

  reviewAnswer(payload: { topic: string; question: string; answer: string }) {
    return this.http.post<{ result: string }>('http://localhost:3001/api/review-answer', payload);
  }
}
