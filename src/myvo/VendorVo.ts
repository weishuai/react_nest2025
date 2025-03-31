import { SearchVo } from '../myutils/searchvo';

export class VendorAddVo {
  name: string;

  address: string;

  phone: string;

  email: string;

  timezone: string;

  remarks: string;

  categoryIds: string[];

  /*
  @ct.Expose({ groups: ['Get', 'Extra'] })
  @ct.Type(() => VendorCategoryVo)
  @i18n(cv.IsArray)
  @i18n(cv.ValidateNested)
  @i18n(cv.IsOptional)
  fundCategories: VendorCategoryVo[];
  */
}

export class VendorUpdateVo extends VendorAddVo {
  id: string;
}

export class VendorGetVo extends VendorUpdateVo {
  //categories: string;

  categoryNames: string[];

  createDate: Date;

  categories: string;
}

export class VendorSearchVo extends SearchVo {
  fundCategoryId: string;
}

export class VendorCategoryVo {
  id: string;

  name: string;
}

export class VendorQuoteVo {
  caseId: string;

  description: string;

  status: string;

  projectStatus: number;

  sqDate: Date;

  siteSurvey: number;

  warranty: number;

  quoteAmount: number;

  soqSelected: number;

  raisedDate: Date;
}

export class VendorProjectVo {
  projectId: string;

  caseId: string;

  description: string;

  status: string;

  projectStatus: number;

  poDate: Date;

  dueDate: Date;

  amount: number;

  condo: string;

  raisedDate: Date;

  items: string[];
}
