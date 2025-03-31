import { SearchVo } from '../myutils/searchvo';

export class MonthlyGoalVo {
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

export class MonthlyGoalSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
