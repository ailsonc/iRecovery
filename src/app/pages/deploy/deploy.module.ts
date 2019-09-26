import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DeployRoutingModule } from './deploy-routing.module';
import { DeployFormComponent } from './deploy-form/deploy-form.component';

@NgModule({
  declarations: [DeployFormComponent],
  imports: [
    SharedModule,
    DeployRoutingModule
  ]
})
export class DeployModule { }
