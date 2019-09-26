import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { System } from '../../systems/models/system.model';

export class Image extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public systemId?: number,
    public system?: System,
  ) {
    super();
  }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

   static fromJson(jsonData: any): Image {
    return Object.assign(new Image(), jsonData);
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}
