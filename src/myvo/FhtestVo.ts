import { SearchVo } from '../myutils/searchvo';

export class FhtestAddVo {
  fhname: string;

  id: string;

  app = 'crmwf';
}

export class FhtestSearchVo extends SearchVo {
  condoId: string;

  locationCategoryId: string;

  fundType: string;

  status: number;
}
