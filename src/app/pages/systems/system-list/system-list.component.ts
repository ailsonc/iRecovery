import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import { System } from '../models/system.model';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss']
})
export class SystemListComponent extends BaseResourceListComponent<System> {
  
  constructor(protected systemService: SystemService) {
    super(systemService);
  }
  
}
