import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';
import { Currency } from '../myentities';

export class CurrencyRepo {
  async create(accountTagVo: CurrencyVo) {
    return await getRepository(Currency).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: CurrencyVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Currency).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Currency).update(Ids[0], {
      isactived: '1',
    });
  }

  async getcurrencysById(id: string) {
    const qb = getRepository(Currency).createQueryBuilder('currency');
    const fields: Record<string, string> = {
      id: 'currency.id',
      name: 'currency.name',
      rate: 'currency.rate',
      source: 'currency.source',
      description: 'currency.description',
      createdAt: 'currency.created_at',
      updatedAt: 'currency.updated_at',
      isactived: 'currency.isactived',
      islocked: 'currency.islocked',
      createUid: 'currency.create_uid',
      updatedUid: 'currency.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'currency', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getcurrencyAll(search: CurrencySearchVo) {
    const qb = getRepository(Currency).createQueryBuilder('currency');
    const fields: Record<string, string> = {
      id: 'currency.id',
      name: 'currency.name',
      rate: 'currency.rate',
      source: 'currency.source',
      description: 'currency.description',
      createdAt: 'currency.created_at',
      updatedAt: 'currency.updated_at',
      isactived: 'currency.isactived',
      islocked: 'currency.islocked',
      createUid: 'currency.create_uid',
      updatedUid: 'currency.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("currency.isactived='0'");
    multiSearch(qb, ['currency.name', 'currency.remark'], search.search);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getcurrencyAllView() {
    const qb = getRepository(Currency).createQueryBuilder('currency');
    const fields: Record<string, string> = {
      id: 'currency.id',
      name: 'currency.name',
      rate: 'currency.rate',
      source: 'currency.source',
      description: 'currency.description',
      createdAt: 'currency.created_at',
      updatedAt: 'currency.updated_at',
      isactived: 'currency.isactived',
      islocked: 'currency.islocked',
      createUid: 'currency.create_uid',
      updatedUid: 'currency.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getcurrency(search: CurrencySearchVo) {
    const qb = getRepository(Currency).createQueryBuilder('currency');
    const fields: Record<string, string> = {
      id: 'currency.id',
      name: 'currency.name',
      rate: 'currency.rate',
      source: 'currency.source',
      description: 'currency.description',
      createdAt: 'currency.created_at',
      updatedAt: 'currency.updated_at',
      isactived: 'currency.isactived',
      islocked: 'currency.islocked',
      createUid: 'currency.create_uid',
      updatedUid: 'currency.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("currency.isactived='0'");
    andWhereEqual(qb, 'currency', 'satus', search.fundType);
    multiSearch(qb, ['currency.name', 'currency.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
