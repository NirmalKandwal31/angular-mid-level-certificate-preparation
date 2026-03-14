import { CommonModule, Location } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TOPIC_CATEGORIES } from '../../../core/data/topic-categories.data';
import { TopicCardItem } from '../../../core/models/topic.model';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-detail.component.html',
  styleUrl: './topic-detail.component.scss',
})
export class TopicDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  private readonly topicRoute = this.route.snapshot.paramMap.get('topicId') ?? '';

  readonly topic = computed<TopicCardItem | null>(() => {
    for (const category of TOPIC_CATEGORIES) {
      const found = category.items.find((item) => item.route === this.topicRoute);
      if (found) {
        return found;
      }
    }
    return null;
  });

  goBack() {
    this.location.back();
  }
}