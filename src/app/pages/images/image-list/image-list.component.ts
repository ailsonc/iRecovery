import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  resources: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getAll().subscribe(
      images => this.resources = images.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteResource(resource: Image) {
    const mustDelete = confirm('Deseja excluir esse item');
    if (mustDelete) {
      this.imageService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element !== resource),
        () => alert('Erro ao tentar excluir')
      );
    }
  }
}
