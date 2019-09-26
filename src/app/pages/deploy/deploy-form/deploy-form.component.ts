import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Image } from '../../images/models/image.model';
import { ImageService } from '../../images/service/image.service';
import { System } from '../../systems/models/system.model';
import { SystemService } from '../../systems/service/system.service';

@Component({
  selector: 'app-deploy-form',
  templateUrl: './deploy-form.component.html',
  styleUrls: ['./deploy-form.component.scss']
})
export class DeployFormComponent implements OnInit {
  images: Array<System>;
  resourceForm: FormGroup;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creationPageTitle();
    this.buildDeployForm();
    this.loadImages();
  }

  private buildDeployForm() {
    this.resourceForm = this.formBuilder.group({
      image: [null, [Validators.required]]
    });
  }

  private loadImages() {
    this.imageService.getAll().subscribe(
      images => this.images = images
    );
    console.log(this.images);
  }

  protected creationPageTitle(): String {
    return 'Cadastrar';
  }

  submitForm() {

  }

}
