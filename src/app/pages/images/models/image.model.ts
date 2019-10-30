import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { System } from '../../systems/models/system.model';

export class Image extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public originalname?: string,
    public filename?: string,
    public filesize?: string,
    public idsystem?: number,
    public system?: System
    
  ) {
    super();
  }

  static fromJson(jsonData: any): Image {
    return Object.assign(new Image(), jsonData);
  }

}
