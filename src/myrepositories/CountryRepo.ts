import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';
import { Country } from '../myentities';

export class CountryRepo {
  // Add your code herer
  async create(accountTagVo: CountryVo) {
    return await getRepository(Country).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: CountryVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Country).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Country).update(Ids[0], {
      isactived: '1',
    });
  }
  async getCountryById(id: string) {
    const qb = getRepository(Country).createQueryBuilder('country');
    const fields: Record<string, string> = {
      id: 'country.id',
      name: 'country.name',
      description: 'country.description',
      createdAt: 'country.created_at',
      updatedAt: 'country.updated_at',
      isactived: 'country.isactived',
      islocked: 'country.islocked',
      createUid: 'country.create_uid',
      updatedUid: 'country.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'country', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getCountryAll(search: CountrySearchVo) {
    const qb = getRepository(Country).createQueryBuilder('country');
    const fields: Record<string, string> = {
      id: 'country.id',
      name: 'country.name',
      description: 'country.description',
      createdAt: 'country.created_at',
      updatedAt: 'country.updated_at',
      isactived: 'country.isactived',
      islocked: 'country.islocked',
      createUid: 'country.create_uid',
      updatedUid: 'country.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("country.isactived='0'");
    multiSearch(qb, ['country.name', 'country.description'], search.search);
    qb.orderBy('country.created_at', 'DESC');
    //andWhereEqual(qb, 'country', 'id', id);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getCountryAllView() {
    const qb = getRepository(Country).createQueryBuilder('country');
    const fields: Record<string, string> = {
      id: 'country.id',
      name: 'country.name',
      description: 'country.description',
      createdAt: 'country.created_at',
      updatedAt: 'country.updated_at',
      isactived: 'country.isactived',
      islocked: 'country.islocked',
      createUid: 'country.create_uid',
      updatedUid: 'country.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'country', 'id', id);
    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getCountry(search: CountrySearchVo) {
    const qb = getRepository(Country).createQueryBuilder('country');
    const fields: Record<string, string> = {
      id: 'country.id',
      name: 'country.name',
      description: 'country.description',
      createdAt: 'country.created_at',
      updatedAt: 'country.updated_at',
      isactived: 'country.isactived',
      islocked: 'country.islocked',
      createUid: 'country.create_uid',
      updatedUid: 'country.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("country.isactived='0'");
    //andWhereEqual(qb, 'country', 'name', search.fundType);
    multiSearch(qb, ['country.name', 'country.description'], search.search);
    setSorts(qb, fields, search.sort);

    setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
