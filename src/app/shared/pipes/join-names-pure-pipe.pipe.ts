import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNamesPure',
  standalone: true,
  pure: true, // default
})
export class JoinNamesPurePipe implements PipeTransform {
  // just to show how many times the pipe ran
  static runs = 0;

  transform(items: string[]): string {
    JoinNamesPurePipe.runs++;

    if (!items || items.length === 0) return '(empty)';
    return items.join(', ');
  }
}
