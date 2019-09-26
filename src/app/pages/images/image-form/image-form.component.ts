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

  amountMask = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '', // any single char
    padFractionalZeros: true, // if true, then pads zeros at end to the length of scale
    normalizeZeros: true, // appends or removes zeros at ends
    radix: ','  // fractional delimiter
  };

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };
  
  constructor(protected imageService: ImageService, protected systemService: SystemService, protected injector: Injector) {
    super(new Image, injector, imageService, Image.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadCategories();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Image.types).map(
      ([value, text]) => {
        return {
          value: value,
          text: text
        };
      }
    );
 }

 protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      systemId: [null, [Validators.required]]
      });
  }

  private loadCategories() {
    this.systemService.getAll().subscribe(
      systems => this.systems = systems
    );
  }

  protected creationPageTitle(): String {
    return 'Cadastrar';
  }

  protected editionPageTitle(): String {
    const resourceName = this.resource.name || '';
    return 'Editar: ' + resourceName;
  }

}
