import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IrecoveryComponent } from './irecovery/irecovery.component';

const routes: Routes = [
  {
    path: '',
    component: IrecoveryComponent,
    data: {
      title: 'IRecovery'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrecoveryRoutingModule { }
