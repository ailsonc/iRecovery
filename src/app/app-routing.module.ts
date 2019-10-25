import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'irecovey',
    loadChildren: './pages/irecovery/irecovery.module#IrecoveryModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    loadChildren: './pages/users/users.module#UsersModule',
    canActivate: [AuthGuard] 
  },
  {
    path: 'upload',
    loadChildren: './pages/upload/upload.module#UploadModule',
    canActivate: [AuthGuard] 
  },
  {
    path: 'systems',
    loadChildren: './pages/systems/systems.module#SystemsModule',
    canActivate: [AuthGuard] 
  },
  {
    path: 'images',
    loadChildren: './pages/images/images.module#ImagesModule',
    canActivate: [AuthGuard] 
  },
  {
    path: '',
    redirectTo: '/irecovey',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
