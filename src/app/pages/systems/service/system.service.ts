import { Injectable, Injector } from '@angular/core';
import { System } from '../models/system.model';
import { BaseResourceService } from '../../../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends BaseResourceService<System> {
  constructor(protected injector: Injector) {
    super('api/systems', injector, System.fromJson);
  }
}
