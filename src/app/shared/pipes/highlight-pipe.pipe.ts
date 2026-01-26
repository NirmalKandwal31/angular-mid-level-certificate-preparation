import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
  pure: true, // default
})
export class HighlightPipe implements PipeTransform {
  /**
   * Wraps matched text with <mark> for highlighting.
   * @param value Original text
   * @param search Text to highlight
   */
  transform(value: string, search: string): string {
    if (!value) return '';
    if (!search) return value;

    // Escape regex special chars from search
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped, 'gi');

    return value.replace(re, (match) => `<mark>${match}</mark>`);
  }
}
