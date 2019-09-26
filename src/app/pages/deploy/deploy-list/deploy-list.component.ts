import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import { Image } from '../../images/models/image.model';
import { ImageService } from '../../images/service/image.service';

@Component({
  selector: 'app-deploy-list',
  templateUrl: './deploy-list.component.html',
  styleUrls: ['./deploy-list.component.scss']
})
export class DeployListComponent extends BaseResourceListComponent<Image> {

  constructor(private imageService: ImageService) {
    super(imageService);
  }

}
