import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TeslaService } from './tesla.service';

@Component({
  selector: 'app-tesla-project',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tesla-project.component.html',
  styleUrl: './tesla-project.component.scss'
})
export class TeslaProjectComponent {
  private router = inject(Router);
  private teslaService = inject(TeslaService);

  selectedCar = this.teslaService.selectedCar;
  selectedColor = this.teslaService.selectedColor;



  ngOnInit() {
    // Force always step1 when tesla-project loads (including refresh)
    this.router.navigate(['tesla-project/step1'], { replaceUrl: true });
  }
}
