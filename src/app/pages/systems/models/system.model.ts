import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class System extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): System {
    return Object.assign(new System(), jsonData);
  }
}
