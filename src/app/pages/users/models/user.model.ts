import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class User extends BaseResourceModel {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public status?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }

}
