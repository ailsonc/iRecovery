import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'User List'
    }
  },
  {
    path: 'new',
    component: UserFormComponent,
    data: {
      title: 'Users Form New'
    }
  },
  {
    path: ':id/edit',
    component: UserFormComponent,
    data: {
      title: 'Users Form Update'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
