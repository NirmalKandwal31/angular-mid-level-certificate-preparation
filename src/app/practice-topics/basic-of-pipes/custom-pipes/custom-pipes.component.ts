import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HighlightPipe } from '../../../shared/pipes/highlight-pipe.pipe';
import { JoinNamesImpurePipe } from '../../../shared/pipes/join-names-impure-pipe.pipe';
import { JoinNamesPurePipe } from '../../../shared/pipes/join-names-pure-pipe.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HighlightPipe,
    JoinNamesPurePipe,
    JoinNamesImpurePipe,
  ],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss',
})
export class CustomPipesComponent {
  // ---------------------------
  // 1) Highlight demo
  // ---------------------------
  searchText = 'ang';
  paragraph =
    'Angular is a popular framework. Custom pipes help format data for display in Angular templates.';

  // ---------------------------
  // 2) Theory + snippets (kept)
  // ---------------------------
  pipeDecoratorCode = `@Pipe({
  name: 'myPipe',
  pure: true // default
})
export class MyPipe implements PipeTransform { }`;

  transformCode = `transform(value: string, arg1?: string, arg2?: number): string {
  // value comes from template
  // arg1, arg2 come after colon (:) in template
  return value;
}`;

  usageCode = `<!-- Syntax -->
<p>{{ value | myPipe:arg1:arg2 }}</p>`;

  highlightUsageCode = `<!-- highlight matches -->
<div [innerHTML]="paragraph | highlight:searchText"></div>`;

  pureImpureCode = `// Pure (default)
@Pipe({ name: 'demo', pure: true })
export class DemoPipe implements PipeTransform { }

// Impure
@Pipe({ name: 'demo', pure: false })
export class DemoPipe implements PipeTransform { }`;

  // ---------------------------
  // 3) Pure vs Impure explanation
  // ---------------------------
  purePoints: string[] = [
    'Pure pipes run only when the input reference or pipe arguments change.',
    'They are fast and recommended for almost all formatting use cases.',
    'Default behavior: pure: true.',
    'If you mutate an array/object (push/pop), pure pipe may NOT rerun because reference is same.',
  ];

  impurePoints: string[] = [
    'Impure pipes run on every change detection cycle.',
    'They can cause performance issues if the transform work is heavy.',
    'Use only when you must react to mutations without reference change.',
  ];

  // ---------------------------
  // 4) Pure vs Impure LIVE DEMO DATA
  // ---------------------------
  names: string[] = ['Alex', 'John', 'Sara'];

  get pureRuns() {
    return JoinNamesPurePipe.runs;
  }

  get impureRuns() {
    return JoinNamesImpurePipe.runs;
  }

  pushNameMutate() {
    // MUTATION: same array reference
    this.names.push(`User${this.names.length + 1}`);
  }

  replaceArrayNewRef() {
    // NEW reference: triggers pure pipe
    this.names = [...this.names, `User${this.names.length + 1}`];
  }

  resetDemo() {
    this.names = ['Alex', 'John', 'Sara'];
    JoinNamesPurePipe.runs = 0;
    JoinNamesImpurePipe.runs = 0;
  }
}
