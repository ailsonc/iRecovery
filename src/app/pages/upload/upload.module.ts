import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UploadRoutingModule } from './upload-routing.module';
import { ImageFormComponent } from './image-form/image-form.component';

@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    SharedModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
