import { MonthlyGoalRepo } from '../myrepositories';
import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class MonthlyGoalService {
  private monthlyGoalRepo = new MonthlyGoalRepo();

  async findOneMonthlyGoal(Id: string) {
    ///const issue = new Fhtest();
    return this.monthlyGoalRepo.getMonthlyGoalsById(Id);
  }

  async createMonthlyGoal(monthlyGoalVo: MonthlyGoalVo) {
    ///monthlyGoalVo.id = id();
    return this.monthlyGoalRepo.create(monthlyGoalVo);
  }

  async updateaMonthlyGoal(
    Id: string,
    user_id: string,
    monthlyGoalVo: MonthlyGoalVo,
  ) {
    monthlyGoalVo.updatedAt = new Date();

    monthlyGoalVo.updatedUid = user_id;
    return this.monthlyGoalRepo.update(Id, user_id, monthlyGoalVo);
  }

  async removeMonthlyGoal(Ids: string[]) {
    return this.monthlyGoalRepo.remove(Ids);
  }

  async getMonthlyGoalById(id: string) {
    return this.monthlyGoalRepo.getMonthlyGoalsById(id);
  }

  async getMonthlyGoal(search: MonthlyGoalSearchVo) {
    return this.monthlyGoalRepo.getMonthlyGoal(search);
  }

  async getMonthlyGoalAll(search: MonthlyGoalSearchVo) {
    return this.monthlyGoalRepo.getMonthlyGoalAll(search);
  }
}
