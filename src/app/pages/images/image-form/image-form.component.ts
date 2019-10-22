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
  resource = new Image();

  constructor(protected imageService: ImageService, protected systemService: SystemService, protected injector: Injector) {
    super(new Image, injector, imageService, Image.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadSystems();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      profile: [null, [Validators.required]],
      description: [null],
      idsystem: [null, [Validators.required]]
    });
  }

  private loadSystems() {
    this.systemService.getAll().subscribe(
      systems => this.systems = systems
    );
  }

  protected editionPageTitle(): String {
    const resourceName = this.resource.name || '';
    return 'Editar: ' + resourceName;
  }

  private onSelectedFile(files: FileList) {
    if (files.length > 0) {
      const file = files.item(0);
      this.resourceForm.get('profile').setValue(file);
    };
  }

  protected createResource() {
    this.setResouce();
    // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
    this.resourceService.create(this.jsonDataToResourceFn(this.resource))
        .subscribe(
            resource => this.actionsForSuccess(resource),
            error => this.actionsForError(error)
        );
  }

  protected updateResource() {
    this.setResouce();
    // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
    this.resourceService.update(this.jsonDataToResourceFn(this.resource))
        .subscribe(
            resource => this.actionsForSuccess(resource),
            error => this.actionsForError(error)
        );
  }

  private setResouce() {
  /*
    const formData = new FormData();
    formData.append('profile', this.resourceForm.get('profile').value); 
    */
   const profile = this.resourceForm.get('profile').value;
    
   this.resource.name = this.resourceForm.get('name').value;
   this.resource.description = this.resourceForm.get('description').value;
   this.resource.filename = profile.name;
   this.resource.filepath = profile.name;
   this.resource.filehash = profile.name;
   this.resource.idsystem = this.resourceForm.get('idsystem').value;
  }
}
