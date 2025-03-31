import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';
export declare class MonthlyGoalRepo {
    create(accountTagVo: MonthlyGoalVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: MonthlyGoalVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getMonthlyGoalsById(id: string): Promise<any>;
    getMonthlyGoalAll(search: MonthlyGoalSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getMonthlyGoal(search: MonthlyGoalSearchVo): Promise<any[]>;
}
