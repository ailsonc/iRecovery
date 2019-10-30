import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';
import { Image } from '../models/image.model';
import { SystemService } from '../../systems/service/system.service';
import { System } from '../../systems/models/system.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  apiPath = '/api/v1/image';

  constructor(private http: HttpClient, private systemService: SystemService) { }

  getAll(): Observable<Image[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntries)
    );
  }

  getById(id: number): Observable<Image> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  create(formData) {
    return this.http.post<any>(`${this.apiPath}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }

  update(image: Image): Observable<Image> {
    const url = `${this.apiPath}/${image.id}`;
    return this.systemService.getById(image.idsystem).pipe(
      flatMap( system => {
        image.system = system;
        return this.http.put(url, image).pipe(
          catchError(this.handleError),
          map(() => image)
        );
      })
    );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
		    break;
      case HttpEventType.Response:
        return this.apiResponse(event);
        break;  
      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError(error);
  }

  private jsonDataToEntries(jsonData: any[]): Image[] {
    const images: Image[] = [];
    jsonData.forEach(element => {
      const image = Object.assign(new Image(), element);
      images.push(image);
    });
    return images;
  }

  private jsonDataToEntry(jsonData: any[]): Image {
    return Object.assign(new Image(), jsonData);
  }

}