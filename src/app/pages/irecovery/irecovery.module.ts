import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { IrecoveryRoutingModule } from './irecovery-routing.module';
import { IrecoveryComponent } from './irecovery/irecovery.component';

@NgModule({
  declarations: [IrecoveryComponent],
  imports: [
    SharedModule,
    IrecoveryRoutingModule
  ]
})
export class IrecoveryModule { }
