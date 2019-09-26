import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource-service';
import { Image } from '../models/image.model';
import { SystemService } from '../../systems/service/system.service';
import { map } from 'rxjs/operators'; 
import * as moment from "moment";

import { Observable } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseResourceService<Image> {

  constructor(protected injector: Injector, private systemService: SystemService) {
    super('api/images', injector, Image.fromJson);
  }

  create(image: Image): Observable<Image> {
    return this.setSystemAndSendToServer(image, super.create.bind(this));
  }

  update(image: Image): Observable<Image> {
    return this.setSystemAndSendToServer(image, super.update.bind(this));
  }

  getByMounthAndYear(month: number, year: number): Observable<Image[]> {
    // The in-memory database does not filter, it is issued by an API.
    return this.getAll().pipe(
      map(entries => this.filterByMonthAndYear(entries,month,year))
    )
  }

  private filterByMonthAndYear(images: Image[], month: number, year: number): Image[] {
    return images.filter( entry => {
      const entryData = moment(entry.date, "DD/MM/YYYY");
      const monthMatches = entryData.month() + 1 == month;
      const yearMatches = entryData.year() == year;
      if(monthMatches && yearMatches) return entry;
    })
  }

  private setSystemAndSendToServer(image: Image, sendFn: any): Observable<Image> {
    return this.systemService.getById(image.systemId).pipe(
      flatMap( system => {
        image.system = system;
        return sendFn(image);
      }),
      catchError(this.handleError)
    );
  }

}
