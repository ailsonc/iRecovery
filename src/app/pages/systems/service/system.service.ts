import { Injectable, Injector } from '@angular/core';
import { System } from '../models/system.model';
import { BaseResourceService } from '../../../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends BaseResourceService<System> {
  constructor(protected injector: Injector) {
    super('http://localhost:4200/api/v1/system', injector, System.fromJson);
  }
}
