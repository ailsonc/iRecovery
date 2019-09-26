import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ImagesRoutingModule } from './images-routing.module';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageFormComponent } from './image-form/image-form.component';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [ImageListComponent, ImageFormComponent],
  imports: [
    SharedModule,
    ImagesRoutingModule,
    CalendarModule,
    IMaskModule,
  ]
})
export class ImagesModule { }
