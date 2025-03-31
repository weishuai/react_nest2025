import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';
import { Feedback } from '../myentities';

export class FeedbackRepo {
  async create(accountTagVo: FeedbackVo) {
    return await getRepository(Feedback).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: FeedbackVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Feedback).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Feedback).update(Ids[0], {
      isactived: '1',
    });
  }

  async getFeedbacksById(id: string) {
    const qb = getRepository(Feedback).createQueryBuilder('feedback');
    const fields: Record<string, string> = {
      id: 'feedback.id',
      name: 'feedback.name',
      description: 'feedback.description',
      createdAt: 'feedback.created_at',
      updatedAt: 'feedback.updated_at',
      isactived: 'feedback.isactived',
      islocked: 'feedback.islocked',
      createUid: 'feedback.create_uid',
      updatedUid: 'feedback.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'feedback', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFeedbackAll(search: FeedbackSearchVo) {
    const qb = getRepository(Feedback).createQueryBuilder('feedback');
    const fields: Record<string, string> = {
      id: 'feedback.id',
      name: 'feedback.name',
      description: 'feedback.description',
      createdAt: 'feedback.created_at',
      updatedAt: 'feedback.updated_at',
      isactived: 'feedback.isactived',
      islocked: 'feedback.islocked',
      createUid: 'feedback.create_uid',
      updatedUid: 'feedback.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("feedback.isactived='0'");
    multiSearch(qb, ['feedback.name', 'feedback.description'], search.search);
    qb.orderBy('feedback.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getFeedbackAllView() {
    const qb = getRepository(Feedback).createQueryBuilder('feedback');
    const fields: Record<string, string> = {
      id: 'feedback.id',
      name: 'feedback.name',
      description: 'feedback.description',
      createdAt: 'feedback.created_at',
      updatedAt: 'feedback.updated_at',
      isactived: 'feedback.isactived',
      islocked: 'feedback.islocked',
      createUid: 'feedback.create_uid',
      updatedUid: 'feedback.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getFeedback(search: FeedbackSearchVo) {
    const qb = getRepository(Feedback).createQueryBuilder('feedback');
    const fields: Record<string, string> = {
      id: 'feedback.id',
      name: 'feedback.name',
      description: 'feedback.description',
      createdAt: 'feedback.created_at',
      updatedAt: 'feedback.updated_at',
      isactived: 'feedback.isactived',
      islocked: 'feedback.islocked',
      createUid: 'feedback.create_uid',
      updatedUid: 'feedback.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("feedback.isactived='0'");
    andWhereEqual(qb, 'feedback', 'name', search.fundType);
    multiSearch(qb, ['feedback.name', 'feedback.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
