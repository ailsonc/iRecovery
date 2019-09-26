import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DeployRoutingModule } from './deploy-routing.module';
import { DeployListComponent } from './deploy-list/deploy-list.component';

@NgModule({
  declarations: [DeployListComponent],
  imports: [
    SharedModule,
    DeployRoutingModule
  ]
})
export class DeployModule { }
