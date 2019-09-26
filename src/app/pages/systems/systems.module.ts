import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SystemsRoutingModule } from './systems-routing.module';
import { SystemListComponent } from './system-list/system-list.component';
import { SystemFormComponent } from './system-form/system-form.component';

@NgModule({
  declarations: [SystemListComponent, SystemFormComponent],
  imports: [
    SharedModule,
    SystemsRoutingModule
  ]
})
export class SystemsModule { }
