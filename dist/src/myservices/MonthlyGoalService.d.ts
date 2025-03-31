import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class MonthlyGoalService {
    private monthlyGoalRepo;
    findOneMonthlyGoal(Id: string): Promise<any>;
    createMonthlyGoal(monthlyGoalVo: MonthlyGoalVo): Promise<import("typeorm").InsertResult>;
    updateaMonthlyGoal(Id: string, user_id: string, monthlyGoalVo: MonthlyGoalVo): Promise<import("typeorm").UpdateResult>;
    removeMonthlyGoal(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getMonthlyGoalById(id: string): Promise<any>;
    getMonthlyGoal(search: MonthlyGoalSearchVo): Promise<any[]>;
    getMonthlyGoalAll(search: MonthlyGoalSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
