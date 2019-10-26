import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageFormComponent } from './image-form/image-form.component';

const routes: Routes = [
  {
    path: '',
    component: ImageFormComponent,
    data: {
      title: 'Image Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
