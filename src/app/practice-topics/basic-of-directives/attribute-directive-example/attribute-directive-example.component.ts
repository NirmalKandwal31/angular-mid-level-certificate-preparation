import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-example',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './attribute-directive-example.component.html',
  styleUrl: './attribute-directive-example.component.scss',
})
export class AttributeDirectiveExampleComponent {
  isAdmin: boolean = true;

  // Code snippets for explanation
  ngStyleCode = `<p [ngStyle]="{ color: isAdmin ? 'green' : 'orange' }">
  Styled using ngStyle
</p>`;

  ngClassCode = `<p [ngClass]="{ 'admin-class': isAdmin, 'user-class': !isAdmin }">
  Styled using ngClass
</p>`;

  toggleRole() {
    this.isAdmin = !this.isAdmin;
  }
}
