import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends BaseResourceFormComponent<User> {

  constructor(protected userService: UserService, protected injector: Injector) {
    super(new User, injector, userService, User.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      username: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      status: [1, [Validators.required]]
    });
  }

  protected editionPageTitle(): String {
    const resourceUserName = this.resource.username || '';
    return 'Editar: ' + resourceUserName;
  }

}
