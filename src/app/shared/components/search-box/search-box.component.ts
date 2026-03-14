import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  @Input() placeholder = 'Search topics...';
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  onInput(value: string) {
    this.valueChange.emit(value);
  }

  clear() {
    this.valueChange.emit('');
  }
}
