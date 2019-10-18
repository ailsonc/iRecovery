import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class User extends BaseResourceModel {
  constructor(
    public id?: number,
    public username?: string,
    public email?: string,
    public password?: string,
    public status?: number,
    public token?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }

}
