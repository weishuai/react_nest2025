import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  TermConditionSearchVo,
  TermConditionVo,
} from '../myvo/TermConditionVo';
import { TermCondition } from '../myentities';

export class TermConditionRepo {
  async create(accountTagVo: TermConditionVo) {
    return await getRepository(TermCondition).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TermConditionVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(TermCondition).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(TermCondition).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTermConditionsById(id: string) {
    const qb =
      getRepository(TermCondition).createQueryBuilder('term_condition');
    const fields: Record<string, string> = {
      id: 'term_condition.id',
      name: 'term_condition.name',
      description: 'term_condition.description',
      createdAt: 'term_condition.created_at',
      updatedAt: 'term_condition.updated_at',
      isactived: 'term_condition.isactived',
      islocked: 'term_condition.islocked',
      createUid: 'term_condition.create_uid',
      updatedUid: 'term_condition.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'term_condition', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTermConditionAll(search: TermConditionSearchVo) {
    const qb =
      getRepository(TermCondition).createQueryBuilder('term_condition');
    const fields: Record<string, string> = {
      id: 'term_condition.id',
      name: 'term_condition.name',
      description: 'term_condition.description',
      createdAt: 'term_condition.created_at',
      updatedAt: 'term_condition.updated_at',
      isactived: 'term_condition.isactived',
      islocked: 'term_condition.islocked',
      createUid: 'term_condition.create_uid',
      updatedUid: 'term_condition.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("term_condition.isactived='0'");
    multiSearch(
      qb,
      ['term_condition.name', 'term_condition.description'],
      search.search,
    );
    qb.orderBy('term_condition.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTermConditionAllView() {
    const qb =
      getRepository(TermCondition).createQueryBuilder('term_condition');
    const fields: Record<string, string> = {
      id: 'term_condition.id',
      name: 'term_condition.name',
      description: 'term_condition.description',
      createdAt: 'term_condition.created_at',
      updatedAt: 'term_condition.updated_at',
      isactived: 'term_condition.isactived',
      islocked: 'term_condition.islocked',
      createUid: 'term_condition.create_uid',
      updatedUid: 'term_condition.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getTermCondition(search: TermConditionSearchVo) {
    const qb =
      getRepository(TermCondition).createQueryBuilder('term_condition');
    const fields: Record<string, string> = {
      id: 'term_condition.id',
      name: 'term_condition.name',
      description: 'term_condition.description',
      createdAt: 'term_condition.created_at',
      updatedAt: 'term_condition.updated_at',
      isactived: 'term_condition.isactived',
      islocked: 'term_condition.islocked',
      createUid: 'term_condition.create_uid',
      updatedUid: 'term_condition.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("term_condition.isactived='0'");
    andWhereEqual(qb, 'term_condition', 'name', search.fundType);
    multiSearch(
      qb,
      ['term_condition.name', 'term_condition.description'],
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
