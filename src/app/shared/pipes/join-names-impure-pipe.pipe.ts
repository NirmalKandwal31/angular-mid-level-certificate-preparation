import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNamesImpure',
  standalone: true,
  pure: false, // 🚨 impure
})
export class JoinNamesImpurePipe implements PipeTransform {
  static runs = 0;

  transform(items: string[]): string {
    JoinNamesImpurePipe.runs++;

    if (!items || items.length === 0) return '(empty)';
    return items.join(', ');
  }
}
