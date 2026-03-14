/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() itemCount!: number;
  @Input() isOpen: boolean = false;

  @Output() cardClick = new EventEmitter<void>();

  onCardClick() {
    this.cardClick.emit();
  }

}