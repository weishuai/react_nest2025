import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';
import { Industry } from '../myentities';

export class IndustryRepo {
  async create(accountTagVo: IndustryVo) {
    return await getRepository(Industry).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: IndustryVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Industry).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Industry).update(Ids[0], {
      isactived: '1',
    });
  }

  async getIndustryById(id: string) {
    const qb = getRepository(Industry).createQueryBuilder('industry');
    const fields: Record<string, string> = {
      id: 'industry.id',
      name: 'industry.name',
      description: 'industry.description',
      createdAt: 'industry.created_at',
      updatedAt: 'industry.updated_at',
      isactived: 'industry.isactived',
      islocked: 'industry.islocked',
      createUid: 'industry.create_uid',
      updatedUid: 'industry.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'industry', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getIndustryAll(search: IndustrySearchVo) {
    const qb = getRepository(Industry).createQueryBuilder('industry');
    const fields: Record<string, string> = {
      id: 'industry.id',
      name: 'industry.name',
      description: 'industry.description',
      createdAt: 'industry.created_at',
      updatedAt: 'industry.updated_at',
      isactived: 'industry.isactived',
      islocked: 'industry.islocked',
      createUid: 'industry.create_uid',
      updatedUid: 'industry.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("industry.isactived='0'");
    multiSearch(qb, ['industry.name', 'industry.description'], search.search);
    qb.orderBy('industry.created_at', 'DESC');  
    //andWhereEqual(qb, 'industry', 'id', id);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getIndustryAllView() {
    const qb = getRepository(Industry).createQueryBuilder('industry');
    const fields: Record<string, string> = {
      id: 'industry.id',
      name: 'industry.name',
      description: 'industry.description',
      createdAt: 'industry.created_at',
      updatedAt: 'industry.updated_at',
      isactived: 'industry.isactived',
      islocked: 'industry.islocked',
      createUid: 'industry.create_uid',
      updatedUid: 'industry.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'industry', 'id', id);
    const res = await qb.getRawMany();
    return res;
  }

  async getIndustry(search: IndustrySearchVo) {
    const qb = getRepository(Industry).createQueryBuilder('industry');
    const fields: Record<string, string> = {
      id: 'industry.id',
      name: 'industry.name',
      description: 'industry.description',
      createdAt: 'industry.created_at',
      updatedAt: 'industry.updated_at',
      isactived: 'industry.isactived',
      islocked: 'industry.islocked',
      createUid: 'industry.create_uid',
      updatedUid: 'industry.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("industry.isactived='0'");
    //andWhereEqual(qb, 'industry', 'name', search.fundType);
    multiSearch(qb, ['industry.name', 'industry.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
