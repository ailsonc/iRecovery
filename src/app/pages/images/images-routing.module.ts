import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageFormComponent } from './image-form/image-form.component';

const routes: Routes = [
  {
    path: '',
    component: ImageListComponent,
    data: {
      title: 'Image List'
    }
  },
  {
    path: 'new',
    component: ImageFormComponent,
    data: {
      title: 'Images Form New'
    }
  },
  {
    path: ':id/edit',
    component: ImageFormComponent,
    data: {
      title: 'Images Form Update'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
