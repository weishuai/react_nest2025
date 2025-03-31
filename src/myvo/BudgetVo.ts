import { SearchVo } from '../myutils/searchvo';

export class BudgetAddVo {
  fyYear: number;

  condoId: string;

  fundItemId: string;

  budget: number;

  fullLife: number;

  annualRate: number;

  age: number;
}

export class BudgetUpdateVo {
  id: string;

  budget: number;

  fullLife: number;

  annualRate: number;

  age: number;
}

export class BudgetGetVo extends BudgetUpdateVo {
  fundItemId: string;

  fundItemName: string;

  fyYear: number;

  startDate: Date;

  endDate: Date;

  fundCategoryId: string;

  fundCategoryName: string;

  fundType: string;

  usage: number;

  balance: number;

  estTotal: number;

  provision: number;
}

export class BudgetVo {
  fundType: string;

  condoId: string;

  fyYear: number;

  budgetTotal = 0;

  budgetUsage = 0;

  budgetBalance = 0;

  categories: BudgetCategoryVo[] = [];
}

export class BudgetCategoryVo {
  fundCategoryId: string;

  fundCategoryName: string;

  fundCategoryTotal = 0;

  fundCategoryUsage = 0;

  fundCategoryBalance = 0;

  items: string[] = [];
}

export class BudgetSumVo {
  fundType: string;

  costOfWork: number;

  fundTotal: number;

  fundUsed: number;

  fundBalance: number;

  balanceAfterWork: number;
}
