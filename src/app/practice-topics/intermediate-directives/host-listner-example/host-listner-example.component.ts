import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listner-example',
  standalone: true,
  imports: [],
  templateUrl: './host-listner-example.component.html',
  styleUrl: './host-listner-example.component.scss',
})
export class HostListnerExampleComponent {
  /**
   * HostBinding
   * Binds a property of the host element directly
   */
  @HostBinding('style.color') hostBindingColor: string = 'black';

  /**
   * Normal property updated using HostListener
   */
  textColorUsingHostListener: string = 'black';

  hostListenerText: string =
    'Hover over this text to see HostListener in action';

  hostBindingText: string = 'This text color is controlled using HostBinding';

  // 🔽 Code snippets for explanation
  hostListenerCode = `@HostListener('mouseenter')
onMouseEnter() {
  this.textColorUsingHostListener = 'red';
}`;

  hostBindingCode = `@HostBinding('style.color')
hostBindingColor: string = 'black';`;

  /**
   * HostListener listens to DOM events on host element
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.textColorUsingHostListener = 'red';
    this.hostBindingColor = 'blue';
    this.hostListenerText = 'Mouse entered the component!';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.textColorUsingHostListener = 'green';
    this.hostBindingColor = 'orange';
    this.hostListenerText = 'Mouse left the component!';
  }
}
