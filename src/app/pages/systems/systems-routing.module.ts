import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SystemListComponent } from './system-list/system-list.component';
import { SystemFormComponent } from './system-form/system-form.component';

const routes: Routes = [
  {
    path: '',
    component: SystemListComponent,
    data: {
      title: 'System List'
    }
  },
  {
    path: 'new',
    component: SystemFormComponent,
    data: {
      title: 'Systems Form New'
    }
  },
  {
    path: ':id/edit',
    component: SystemFormComponent,
    data: {
      title: 'Systems Form Update'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsRoutingModule { }
