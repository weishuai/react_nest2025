export declare class BudgetAddVo {
    fyYear: number;
    condoId: string;
    fundItemId: string;
    budget: number;
    fullLife: number;
    annualRate: number;
    age: number;
}
export declare class BudgetUpdateVo {
    id: string;
    budget: number;
    fullLife: number;
    annualRate: number;
    age: number;
}
export declare class BudgetGetVo extends BudgetUpdateVo {
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
export declare class BudgetVo {
    fundType: string;
    condoId: string;
    fyYear: number;
    budgetTotal: number;
    budgetUsage: number;
    budgetBalance: number;
    categories: BudgetCategoryVo[];
}
export declare class BudgetCategoryVo {
    fundCategoryId: string;
    fundCategoryName: string;
    fundCategoryTotal: number;
    fundCategoryUsage: number;
    fundCategoryBalance: number;
    items: string[];
}
export declare class BudgetSumVo {
    fundType: string;
    costOfWork: number;
    fundTotal: number;
    fundUsed: number;
    fundBalance: number;
    balanceAfterWork: number;
}
