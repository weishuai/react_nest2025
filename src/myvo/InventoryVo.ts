import { SearchVo } from '../myutils/searchvo';

export class InventoryAddVo {
  projectId: string;

  poDate: Date;

  replacementDate: Date;

  locationItemId: string;

  item: string;

  price: number;

  warranty: string;

  description: string;

  remarks: string;
}

export class InventoryUpdateVo extends InventoryAddVo {
  id: string;

  projectId: string;

  poDate: Date;

  replacementDate: Date;

  locationItemId: string;
}

export class InventoryGetVo extends InventoryUpdateVo {
  subject: string;

  locationItemName: string;

  locationCategoryName: string;

  condoId: string;

  locationItemId: string;

  locationCategoryId: string;
}

export class InventorySearchVo extends SearchVo {
  condoId: string;

  locationCategoryId: string;

  projectId: string;
}

export class InventoryReportItemVo {
  id: string;

  poDateD: Date;

  poDate: string;

  replacementDateD: Date;

  replacementDate: string;

  item: string;

  price: number;

  priceInt: number;

  warranty: string;

  description: string;

  remarks: string;

  location: string;

  block: string;
}
