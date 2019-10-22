import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { System } from '../models/system.model';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-system-form',
  templateUrl: './system-form.component.html',
  styleUrls: ['./system-form.component.scss']
})
export class SystemFormComponent extends BaseResourceFormComponent<System> {

  constructor(protected systemService: SystemService, protected injector: Injector) {
    super(new System, injector, systemService, System.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  protected editionPageTitle(): String {
    const resourceName = this.resource.name || '';
    return 'Editar: ' + resourceName;
  }

}
