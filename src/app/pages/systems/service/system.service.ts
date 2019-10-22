import { Injectable, Injector } from '@angular/core';
import { System } from '../models/system.model';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../../../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends BaseResourceService<System> {
  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/api/v1/system`, injector, System.fromJson);
  }
}
