import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentChildDecoratorChildComponent } from './content-child-decorator-child/content-child-decorator-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-child-decorator',
  standalone: true,
  imports: [RouterModule, ContentChildDecoratorChildComponent, CommonModule],
  templateUrl: './content-child-decorator.component.html',
  styleUrl: './content-child-decorator.component.scss',
})
export class ContentChildDecoratorComponent {
  intro =
    '@ContentChild is used inside the CHILD component to get access to projected content (content passed from the parent between child tags).';

  flowPoints: string[] = [
    'Parent places HTML inside <app-child> ... </app-child> (this is content projection).',
    'Child uses <ng-content> to render that projected content.',
    'Child can capture a specific projected element using @ContentChild("#ref").',
    'Access is available after content is initialized (ngAfterContentInit).',
  ];

  // Safe snippets for UI
  parentHtmlSnippet = `<app-content-child-decorator-child>
  <p #para>
    This paragraph is passed from Parent to Child using content projection.
  </p>
</app-content-child-decorator-child>`;
}
