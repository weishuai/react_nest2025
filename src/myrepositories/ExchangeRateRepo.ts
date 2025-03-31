import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';
import { ExchangeRate } from '../myentities';

export class ExchangeRateRepo {
  async create(accountTagVo: ExchangeRateVo) {
    return await getRepository(ExchangeRate).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ExchangeRateVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ExchangeRate).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ExchangeRate).update(Ids[0], {
      isactived: '1',
    });
  }

  async getExchangeRatesById(id: string) {
    const qb = getRepository(ExchangeRate).createQueryBuilder('exchangeRate');
    const fields: Record<string, string> = {
      id: 'exchangeRate.id',
      name: 'exchangeRate.name',
      description: 'exchangeRate.description',
      createdAt: 'exchangeRate.created_at',
      updatedAt: 'exchangeRate.updated_at',
      isactived: 'exchangeRate.isactived',
      islocked: 'exchangeRate.islocked',
      createUid: 'exchangeRate.create_uid',
      updatedUid: 'exchangeRate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'exchangeRate', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getExchangeRateAll(search: ExchangeRateSearchVo) {
    const qb = getRepository(ExchangeRate).createQueryBuilder('exchangeRate');
    const fields: Record<string, string> = {
      id: 'exchangeRate.id',
      name: 'exchangeRate.name',
      description: 'exchangeRate.description',
      createdAt: 'exchangeRate.created_at',
      updatedAt: 'exchangeRate.updated_at',
      isactived: 'exchangeRate.isactived',
      islocked: 'exchangeRate.islocked',
      createUid: 'exchangeRate.create_uid',
      updatedUid: 'exchangeRate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("exchangeRate.isactived='0'");
    multiSearch(qb, ['exchangeRate.name', 'exchangeRate.description'], search.search);
    qb.orderBy('exchangeRate.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getExchangeRateAllView() {
    const qb = getRepository(ExchangeRate).createQueryBuilder('exchangeRate');
    const fields: Record<string, string> = {
      id: 'exchangeRate.id',
      name: 'exchangeRate.name',
      description: 'exchangeRate.description',
      createdAt: 'exchangeRate.created_at',
      updatedAt: 'exchangeRate.updated_at',
      isactived: 'exchangeRate.isactived',
      islocked: 'exchangeRate.islocked',
      createUid: 'exchangeRate.create_uid',
      updatedUid: 'exchangeRate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getExchangeRate(search: ExchangeRateSearchVo) {
    const qb = getRepository(ExchangeRate).createQueryBuilder('exchangeRate');
    const fields: Record<string, string> = {
      id: 'exchangeRate.id',
      name: 'exchangeRate.name',
      description: 'exchangeRate.description',
      createdAt: 'exchangeRate.created_at',
      updatedAt: 'exchangeRate.updated_at',
      isactived: 'exchangeRate.isactived',
      islocked: 'exchangeRate.islocked',
      createUid: 'exchangeRate.create_uid',
      updatedUid: 'exchangeRate.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("exchangeRate.isactived='0'");
    //andWhereEqual(qb, 'language', 'satus', search.fundType);
    ///multiSearch(qb, ['exchangeRate.name', 'exchangeRate.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
