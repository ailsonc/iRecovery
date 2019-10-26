import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  entries: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    /*
    this.imageService.getAll().subscribe(
      entries => this.entries = entries.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    );*/
  }

  deleteEntry(entry: Image) {
    /*
    const mustDelete = confirm('Deseja excluir esse item');
    if (mustDelete) {
      this.imageService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(element => element !== entry),
        () => alert('Erro ao tentar excluir')
      );
    }*/
  }
}
