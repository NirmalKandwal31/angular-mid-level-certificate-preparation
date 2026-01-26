import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Product = {
  id: number;
  name: string;
  price: number;
};

@Component({
  selector: 'app-ngif-ngfor-basics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ng-if-and-ng-for.component.html',
  styleUrls: ['./ng-if-and-ng-for.component.scss'],
})
export class NgIfNgForBasicsComponent {
  // ngIf demo state
  isLoggedIn = false;

  // ngFor demo list
  products: Product[] = [
    { id: 1, name: 'Keyboard', price: 49.99 },
    { id: 2, name: 'Mouse', price: 19.99 },
    { id: 3, name: 'Monitor', price: 199.99 },
  ];

  // snippets
  ngIfCode = `<!-- Shows content only when condition is true -->
<div *ngIf="isLoggedIn">
  Welcome back!
</div>`;

  ngForCode = `<!-- Loops over an array -->
<li *ngFor="let product of products">
  {{ product.name }}
</li>`;

  trackByCode = `trackByProductId(index: number, item: Product) {
  return item.id;
}

<li *ngFor="let product of products; trackBy: trackByProductId">
  {{ product.name }}
</li>`;

  whyTrackBy: string[] = [
    'Angular uses trackBy to identify list items with a stable key (like id).',
    'It helps Angular reuse existing DOM elements instead of recreating them.',
    'Improves performance when the list updates frequently or is large.',
  ];

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  addProduct() {
    const nextId = Math.max(...this.products.map((p) => p.id), 0) + 1;
    this.products = [
      ...this.products,
      { id: nextId, name: `Product ${nextId}`, price: 10 * nextId },
    ];
  }

  shuffleProducts() {
    const copy = [...this.products];
    copy.sort(() => Math.random() - 0.5);
    this.products = copy;
  }

  trackByProductId(index: number, item: Product) {
    return item.id;
  }
}
