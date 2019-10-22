import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../../../shared/services/base-resource-service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/api/v1/user`, injector, User.fromJson);
  }

}
