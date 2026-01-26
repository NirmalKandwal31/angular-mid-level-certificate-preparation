import { Component } from '@angular/core';

@Component({
  selector: 'app-router-module-configuration',
  standalone: true,
  imports: [],
  templateUrl: './router-module-configuration.component.html',
  styleUrl: './router-module-configuration.component.scss',
})
export class RouterModuleConfigurationComponent {
  routerModuleCode = `import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;

  routesArrayCode = `const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];`;

  pathMatchCode = `{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}`;

  redirectToCode = `{
  path: 'old-route',
  redirectTo: 'new-route'
}`;

  lazyLoadingCode = `{
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
}`;
}
