import { SearchVo } from '../myutils/searchvo';

export class FundCategoryAddVo {
  name: string;

  fundType: string;
}

export class FundCategoryUpdateVo extends FundCategoryAddVo {
  id: string;

  isInuse: number;
}

export class FundCategoryGetVo extends FundCategoryUpdateVo {}
