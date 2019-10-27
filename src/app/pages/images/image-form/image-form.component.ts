import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';
import { Image } from '../models/image.model';
import { ImageService } from '../service/image.service';
import { System } from '../../systems/models/system.model';
import { SystemService } from '../../systems/service/system.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit, AfterContentChecked {
  currentAction: String;
  pageTitle: String;
  image: Image = new Image();
  systems: Array<System>;
  resourceForm: FormGroup;
  submittingForm: boolean = false;

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private imageService: ImageService, private systemService: SystemService) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadImage();
    this.loadSystems();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resourceForm.get('profile').setValue(file);
    }
  }

  submitForm() {
    this.submittingForm = true;
    if (this.currentAction === 'new') {
      this.createImage();
    } else {
      //this.updateImage();
    }
  }

  // Private Methods
  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      profile: [null, [Validators.required]],
      description: [null],
      idsystem: [null, [Validators.required]]
    });
  }

  private loadImage() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.imageService.getById(+params.get('id')))
      ).subscribe(
        (image) =>{
          this.image = image;
          this.resourceForm.patchValue(image); // binds loader entry data to entryForm
      },
        (error) => {
          alert('ocorreu um erro no servidor, tente mas tarde.');
        }
      );
    }
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastrar';
    } else {
      const imageName = this.image.name || '';
      this.pageTitle = 'Editar: ' + imageName;
    }
  }

  private loadSystems() {
    this.systemService.getAll().subscribe(
      systems => this.systems = systems
    );
  }

  private createImage() {
    const formData = new FormData();
    formData.append('name', this.resourceForm.get('name').value);
    formData.append('description', this.resourceForm.get('description').value);
    formData.append('profile', this.resourceForm.get('profile').value);
    formData.append('idsystem', this.resourceForm.get('idsystem').value);

    this.imageService.create(formData).subscribe(
      res => this.actionsForSuccess(res),
      error => this.actionsForError(error)
    );
  }

  private actionsForSuccess(res) {
    this.fileUpload = res
    console.log(res);
    if(res.id) {
      toastr.success('Solicitação processada com sucesso!');
      this.submittingForm = false;
      this.router.navigateByUrl('images', {skipLocationChange: true}).then(
        () => this.router.navigate(['images', res.id, 'edit'])
      );
    }
  }

  private actionsForError(error) {
    toastr.error('Ocorreu um erro ao processada sua solicitação');
    this.submittingForm = false;
    if (error.status === 422) {
      // this.serverErrorMessages = JSON.parse(error._body).erros;
      //this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
    } else {
      //this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
    }
  }
}
