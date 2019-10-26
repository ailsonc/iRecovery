import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from '../service/image.service';
import { System } from '../../systems/models/system.model';
import { SystemService } from '../../systems/service/system.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  systems: Array<System>;
  resourceForm: FormGroup;
  submittingForm: boolean = false;
  error: string;

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private formBuilder: FormBuilder, private imageService: ImageService, private systemService: SystemService) { }

  ngOnInit() {
    this.buildResourceForm();
    this.loadSystems();
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resourceForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    this.submittingForm = true;
    const formData = new FormData();
    formData.append('name', this.resourceForm.get('name').value);
    formData.append('description', this.resourceForm.get('description').value);
    formData.append('profile', this.resourceForm.get('profile').value);
    formData.append('idsystem', this.resourceForm.get('idsystem').value);

    this.imageService.create(formData).subscribe(
      res => {
        this.fileUpload = res
        this.submittingForm = false;
      },
      err => {
        this.error = err;
        this.submittingForm = false;
      }
    );
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
}
