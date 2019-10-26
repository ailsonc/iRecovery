import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { System } from '../../systems/models/system.model';

export class Image extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public filename?: System,
    public filepath?: System,
    public filehash?: System,
    public idsystem?: number,
    public system?: System
    
  ) {
    super();
  }

  static fromJson(jsonData: any): Image {
    return Object.assign(new Image(), jsonData);
  }

}
