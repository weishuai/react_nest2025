import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { LeadpoolsSearchVo, LeadpoolsVo } from '../myvo/LeadpoolsVo';
import { Leadpools } from '../myentities';

export class LeadpoolsRepo {
  async create(accountTagVo: LeadpoolsVo) {
    return await getRepository(Leadpools).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: LeadpoolsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Leadpools).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Leadpools).update(Ids[0], {
      isactived: '1',
    });
  }

  async getLeadpoolsById(id: string) {
    const qb = getRepository(Leadpools).createQueryBuilder('leadpools');
    const fields: Record<string, string> = {
      id: 'leadpools.id',
      name: 'leadpools.name',
      description: 'leadpools.description',
      createdAt: 'leadpools.created_at',
      updatedAt: 'leadpools.updated_at',
      isactived: 'leadpools.isactived',
      islocked: 'leadpools.islocked',
      createUid: 'leadpools.create_uid',
      updatedUid: 'leadpools.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getLeadpoolsAll(search: LeadpoolsSearchVo) {
    const qb = getRepository(Leadpools).createQueryBuilder('leadpools');
    const fields: Record<string, string> = {
      id: 'leadpools.id',
      name: 'leadpools.name',
      description: 'leadpools.description',
      createdAt: 'leadpools.created_at',
      updatedAt: 'leadpools.updated_at',
      isactived: 'leadpools.isactived',
      islocked: 'leadpools.islocked',
      createUid: 'leadpools.create_uid',
      updatedUid: 'leadpools.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("leadpools.isactived='0'");
    multiSearch(qb, ['leadpools.name', 'leadpools.description'], search.search);
    qb.orderBy('leadpools.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getLeadpoolsAllView() {
    const qb = getRepository(Leadpools).createQueryBuilder('leadpools');
    const fields: Record<string, string> = {
      id: 'leadpools.id',
      name: 'leadpools.name',
      description: 'leadpools.description',
      createdAt: 'leadpools.created_at',
      updatedAt: 'leadpools.updated_at',
      isactived: 'leadpools.isactived',
      islocked: 'leadpools.islocked',
      createUid: 'leadpools.create_uid',
      updatedUid: 'leadpools.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getLeadpools(search: LeadpoolsSearchVo) {
    const qb = getRepository(Leadpools).createQueryBuilder('leadpools');
    const fields: Record<string, string> = {
      id: 'leadpools.id',
      name: 'leadpools.name',
      description: 'leadpools.description',
      createdAt: 'leadpools.created_at',
      updatedAt: 'leadpools.updated_at',
      isactived: 'leadpools.isactived',
      islocked: 'leadpools.islocked',
      createUid: 'leadpools.create_uid',
      updatedUid: 'leadpools.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("leadpools.isactived='0'");
    //andWhereEqual(qb, 'leadpools', 'name', search.fundType);
    multiSearch(qb, ['leadpools.name', 'leadpools.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
