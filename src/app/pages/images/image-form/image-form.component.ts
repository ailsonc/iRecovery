import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Image } from '../models/image.model';
import { ImageService } from '../service/image.service';
import { System } from '../../systems/models/system.model';
import { SystemService } from '../../systems/service/system.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent extends BaseResourceFormComponent<Image> implements OnInit {
  systems: Array<System>;
  error: string;
  fileUpload = {status: 'error', message: 'Teste', filePath: ''};

  constructor(protected imageService: ImageService, protected systemService: SystemService, protected injector: Injector) {
    super(new Image, injector, imageService, Image.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadCategories();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      profile: [null, [Validators.required]],
      description: [null],
      systemId: [null, [Validators.required]]
    });
  }

  private loadCategories() {
    this.systemService.getAll().subscribe(
      systems => this.systems = systems
    );
  }

  private onSelectedFile(files: FileList) {
    if (files.length > 0) {
      const file = files.item(0);
      this.resourceForm.get('profile').setValue(file);
    };
  }

  protected creationPageTitle(): String {
    return 'Cadastrar';
  }

  protected editionPageTitle(): String {
    const resourceName = this.resource.name || '';
    return 'Editar: ' + resourceName;
  }

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.resourceForm.get('name').value);
    formData.append('profile', this.resourceForm.get('profile').value);   
  }

}
