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
