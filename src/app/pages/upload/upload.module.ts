import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadFormComponent } from './upload-form/upload-form.component';

@NgModule({
  declarations: [UploadFormComponent],
  imports: [
    SharedModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
