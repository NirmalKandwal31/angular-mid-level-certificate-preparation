import { Routes } from '@angular/router';

export const signalsRoutes: Routes = [
  {
    path: 'sharing-data-using-signal',
    loadComponent: () =>
      import(
        './sharing-data-using-signals/sharing-data-using-signals.component'
      ).then((m) => m.SharingDataUsingSignalsComponent),
  },
  {
    path: 'signals-characteristics',
    loadComponent: () =>
      import('./signal-characteristics/signal-characteristics.component').then(
        (m) => m.SignalCharacteristicsComponent
      ),
  },
  {
    path: 'signals-computed-effect',
    loadComponent: () =>
      import(
        './signals-computed-effect/signals-computed-effect.component'
      ).then((m) => m.ComputedAndEffectComponent),
  },
  {
    path: 'signals-rxjs-interop',
    loadComponent: () =>
      import('./rxjs-interoperability/rxjs-interoperability.component').then(
        (m) => m.RxjsInteroperabilityComponent
      ),
  },
];
