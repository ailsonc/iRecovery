import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource-service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super('api/v1/user', injector, User.fromJson);
  }

}
