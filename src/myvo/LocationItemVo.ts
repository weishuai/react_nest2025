import { SearchVo } from '../myutils/searchvo';

export class LocationItemAddVo {
  name: string;

  locationCategoryId: string;
}

export class LocationItemUpdateVo extends LocationItemAddVo {
  id: string;
}

export class LocationItemGetVo extends LocationItemUpdateVo {}
