import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFormComponent } from './upload-form/upload-form.component';

const routes: Routes = [
  {
    path: '',
    component: UploadFormComponent,
    data: {
      title: 'Upload Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
