import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { MonthlyGoalSearchVo, MonthlyGoalVo } from '../myvo/MonthlyGoalVo';
import { MonthlyGoal } from '../myentities';

export class MonthlyGoalRepo {
  async create(accountTagVo: MonthlyGoalVo) {
    return await getRepository(MonthlyGoal).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: MonthlyGoalVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(MonthlyGoal).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(MonthlyGoal).update(Ids[0], {
      isactived: '1',
    });
  }

  async getMonthlyGoalsById(id: string) {
    const qb = getRepository(MonthlyGoal).createQueryBuilder('monthly_goal');
    const fields: Record<string, string> = {
      id: 'monthly_goal.id',
      targetNumber: 'monthly_goal.target_number',
      type: 'monthly_goal.type',
      teamId: 'monthly_goal.team_id',
      personalId: 'monthly_goal.personal_id',
      byType: 'monthly_goal.by_type',
      createdAt: 'monthly_goal.created_at',
      updatedAt: 'monthly_goal.updated_at',
      isactived: 'monthly_goal.isactived',
      islocked: 'monthly_goal.islocked',
      createUid: 'monthly_goal.create_uid',
      updatedUid: 'monthly_goal.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'monthly_goal', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getMonthlyGoalAll(search: MonthlyGoalSearchVo) {
    const qb = getRepository(MonthlyGoal).createQueryBuilder('monthly_goal');
    const fields: Record<string, string> = {
      id: 'monthly_goal.id',
      targetNumber: 'monthly_goal.target_number',
      type: 'monthly_goal.type',
      teamId: 'monthly_goal.team_id',
      personalId: 'monthly_goal.personal_id',
      byType: 'monthly_goal.by_type',
      createdAt: 'monthly_goal.created_at',
      updatedAt: 'monthly_goal.updated_at',
      isactived: 'monthly_goal.isactived',
      islocked: 'monthly_goal.islocked',
      createUid: 'monthly_goal.create_uid',
      updatedUid: 'monthly_goal.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    multiSearch(
      qb,
      ['monthly_goal.type', 'monthly_goal.targetNumber'],
      search.search,
    );
    qb.orderBy('monthly_goal.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getMonthlyGoal(search: MonthlyGoalSearchVo) {
    const qb = getRepository(MonthlyGoal).createQueryBuilder('monthly_goal');
    const fields: Record<string, string> = {
      id: 'monthly_goal.id',
      targetNumber: 'monthly_goal.target_number',
      type: 'monthly_goal.type',
      teamId: 'monthly_goal.team_id',
      personalId: 'monthly_goal.personal_id',
      byType: 'monthly_goal.by_type',
      createdAt: 'monthly_goal.created_at',
      updatedAt: 'monthly_goal.updated_at',
      isactived: 'monthly_goal.isactived',
      islocked: 'monthly_goal.islocked',
      createUid: 'monthly_goal.create_uid',
      updatedUid: 'monthly_goal.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("monthly_goal.isactived='0'");
    //andWhereEqual(qb, 'monthly_goal', 'satus', search.fundType);
    multiSearch(
      qb,
      ['monthly_goal.type', 'monthly_goal.targetNumber'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
