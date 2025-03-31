import { SearchVo } from '../myutils/searchvo';

export class FundItemAddVo {
  name: string;

  fundCategoryId: string;
}

export class FundItemUpdateVo extends FundItemAddVo {
  id: string;
}

export class FundItemGetVo extends FundItemUpdateVo {}
