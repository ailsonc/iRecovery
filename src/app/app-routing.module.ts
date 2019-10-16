import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './pages/users/users.module#UsersModule'
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
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
