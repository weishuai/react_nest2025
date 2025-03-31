import { SearchVo } from '../myutils/searchvo';
export declare class MonthlyGoalVo {
    id: string;
    targetNumber: string;
    type: string;
    teamId: string;
    personalId: string;
    byType: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class MonthlyGoalSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
