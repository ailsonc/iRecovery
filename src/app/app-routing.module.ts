import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'deploy',
    loadChildren: './pages/deploy/deploy.module#DeployModule'
  },
  {
    path: 'systems',
    loadChildren: './pages/systems/systems.module#SystemsModule'
  },
  {
    path: 'images',
    loadChildren: './pages/images/images.module#ImagesModule'
  },
  {
    path: '',
    redirectTo: '/deploy',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
