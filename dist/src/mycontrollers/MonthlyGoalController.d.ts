import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';
export declare class MonthlyGoalController {
    private monthlyGoalService;
    createMonthlyGoal(MonthlyGoalVo: MonthlyGoalVo): Promise<import("typeorm").InsertResult>;
    updateaMonthlyGoal(userToken: string, Id: string, MonthlyGoalVo: MonthlyGoalVo): Promise<import("typeorm").UpdateResult>;
    removeMonthlyGoal(Id: string): Promise<import("typeorm").UpdateResult>;
    getMonthlyGoalById(Id: string): Promise<any>;
    getMonthlyGoal(search: MonthlyGoalSearchVo): Promise<any[]>;
    getMonthlyGoalAll(search: MonthlyGoalSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
