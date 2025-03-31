import { SearchVo } from '../myutils/searchvo';
export class LocationCategoryAddVo {
  name: string;

  condoId: string;
}

export class LocationCategoryUpdateVo extends LocationCategoryAddVo {
  id: string;

  isInuse: number;
}

export class LocationCategoryGetVo extends LocationCategoryUpdateVo {}
