"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetSumVo = exports.BudgetCategoryVo = exports.BudgetVo = exports.BudgetGetVo = exports.BudgetUpdateVo = exports.BudgetAddVo = void 0;
class BudgetAddVo {
}
exports.BudgetAddVo = BudgetAddVo;
class BudgetUpdateVo {
}
exports.BudgetUpdateVo = BudgetUpdateVo;
class BudgetGetVo extends BudgetUpdateVo {
}
exports.BudgetGetVo = BudgetGetVo;
class BudgetVo {
    constructor() {
        this.budgetTotal = 0;
        this.budgetUsage = 0;
        this.budgetBalance = 0;
        this.categories = [];
    }
}
exports.BudgetVo = BudgetVo;
class BudgetCategoryVo {
    constructor() {
        this.fundCategoryTotal = 0;
        this.fundCategoryUsage = 0;
        this.fundCategoryBalance = 0;
        this.items = [];
    }
}
exports.BudgetCategoryVo = BudgetCategoryVo;
class BudgetSumVo {
}
exports.BudgetSumVo = BudgetSumVo;
//# sourceMappingURL=BudgetVo.js.map