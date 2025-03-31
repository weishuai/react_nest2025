import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';

import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';
import { Taxes } from '../myentities';

export class TaxesRepo {
  async create(accountTagVo: TaxesVo) {
    return await getRepository(Taxes).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TaxesVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Taxes).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Taxes).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTaxessById(id: string) {
    const qb = getRepository(Taxes).createQueryBuilder('taxes');
    const fields: Record<string, string> = {
      id: 'taxes.id',
      name: 'taxes.name',
      rate: 'taxes.rate',
      source: 'taxes.source',
      description: 'taxes.description',
      createdAt: 'taxes.created_at',
      updatedAt: 'taxes.updated_at',
      isactived: 'taxes.isactived',
      islocked: 'taxes.islocked',
      createUid: 'taxes.create_uid',
      updatedUid: 'taxes.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'taxes', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTaxesAll(search: TaxesSearchVo) {
    const qb = getRepository(Taxes).createQueryBuilder('taxes');
    const fields: Record<string, string> = {
      id: 'taxes.id',
      name: 'taxes.name',
      rate: 'taxes.rate',
      source: 'taxes.source',
      description: 'taxes.description',
      createdAt: 'taxes.created_at',
      updatedAt: 'taxes.updated_at',
      isactived: 'taxes.isactived',
      islocked: 'taxes.islocked',
      createUid: 'taxes.create_uid',
      updatedUid: 'taxes.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("taxes.isactived='0'");
    multiSearch(qb, ['taxes.name', 'taxes.description'], search.search);
    qb.orderBy('taxes.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTaxesAllView() {
    const qb = getRepository(Taxes).createQueryBuilder('taxes');
    const fields: Record<string, string> = {
      id: 'taxes.id',
      name: 'taxes.name',
      rate: 'taxes.rate',
      source: 'taxes.source',
      description: 'taxes.description',
      createdAt: 'taxes.created_at',
      updatedAt: 'taxes.updated_at',
      isactived: 'taxes.isactived',
      islocked: 'taxes.islocked',
      createUid: 'taxes.create_uid',
      updatedUid: 'taxes.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getTaxes(search: TaxesSearchVo) {
    const qb = getRepository(Taxes).createQueryBuilder('taxes');
    const fields: Record<string, string> = {
      id: 'taxes.id',
      name: 'taxes.name',
      rate: 'taxes.rate',
      source: 'taxes.source',
      description: 'taxes.description',
      createdAt: 'taxes.created_at',
      updatedAt: 'taxes.updated_at',
      isactived: 'taxes.isactived',
      islocked: 'taxes.islocked',
      createUid: 'taxes.create_uid',
      updatedUid: 'taxes.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("taxes.isactived='0'");
    andWhereEqual(qb, 'taxes', 'name', search.fundType);
    multiSearch(qb, ['taxes.name', 'taxes.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
