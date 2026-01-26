import {
  Component,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-child-decorator-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-child-decorator-child.component.html',
  styleUrl: './content-child-decorator-child.component.scss',
})
export class ContentChildDecoratorChildComponent implements AfterContentInit {
  /**
   * ✅ Gets the projected element with template reference #para
   * This reference is declared in the parent content.
   */
  @ContentChild('para') paragraphElement!: ElementRef<HTMLParagraphElement>;

  status = 'Waiting for content...';
  extractedText = '';

  // Safe code snippets
  childTsSnippet = `@ContentChild('para') paragraphElement!: ElementRef<HTMLParagraphElement>;

ngAfterContentInit() {
  // Access projected element after content init
  console.log(this.paragraphElement.nativeElement.innerText);
}`;

  childHtmlSnippet = `<div class="card">
  <ng-content></ng-content>
</div>`;

  ngAfterContentInit(): void {
    this.status = 'Content initialized ✅';
    this.extractedText = this.paragraphElement?.nativeElement?.innerText || '';
  }

  readProjectedText() {
    if (!this.paragraphElement) return;
    this.extractedText = this.paragraphElement.nativeElement.innerText;
    this.status = 'Read text from projected content ✅';
  }

  highlightProjectedText() {
    if (!this.paragraphElement) return;

    const el = this.paragraphElement.nativeElement;
    el.style.background = '#fff3cd';
    el.style.border = '1px dashed #ffc107';
    el.style.padding = '8px';
    el.style.borderRadius = '10px';

    this.status = 'Styled projected content from Child ✅';
  }

  resetStyles() {
    if (!this.paragraphElement) return;

    const el = this.paragraphElement.nativeElement;
    el.style.background = '';
    el.style.border = '';
    el.style.padding = '';
    el.style.borderRadius = '';

    this.status = 'Reset styles ✅';
  }
}
