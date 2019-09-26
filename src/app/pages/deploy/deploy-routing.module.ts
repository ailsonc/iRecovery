import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeployListComponent } from './deploy-list/deploy-list.component';

const routes: Routes = [
  {
    path: '',
    component: DeployListComponent,
    data: {
      title: 'Deploy List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
