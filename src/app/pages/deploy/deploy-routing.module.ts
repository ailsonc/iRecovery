import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeployFormComponent } from './deploy-form/deploy-form.component';

const routes: Routes = [
  {
    path: '',
    component: DeployFormComponent,
    data: {
      title: 'Deploy Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
