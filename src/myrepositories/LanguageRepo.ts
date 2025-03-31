import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';
import { Language } from '../myentities';

export class LanguageRepo {
  async create(accountTagVo: LanguageVo) {
    return await getRepository(Language).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: LanguageVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Language).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Language).update(Ids[0], {
      isactived: '1',
    });
  }

  async getLanguagesById(id: string) {
    const qb = getRepository(Language).createQueryBuilder('language');
    const fields: Record<string, string> = {
      id: 'language.id',
      name: 'language.name',
      description: 'language.description',
      createdAt: 'language.created_at',
      updatedAt: 'language.updated_at',
      isactived: 'language.isactived',
      islocked: 'language.islocked',
      createUid: 'language.create_uid',
      updatedUid: 'language.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'language', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getLanguageAll(search: LanguageSearchVo) {
    const qb = getRepository(Language).createQueryBuilder('language');
    const fields: Record<string, string> = {
      id: 'language.id',
      name: 'language.name',
      description: 'language.description',
      createdAt: 'language.created_at',
      updatedAt: 'language.updated_at',
      isactived: 'language.isactived',
      islocked: 'language.islocked',
      createUid: 'language.create_uid',
      updatedUid: 'language.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("language.isactived='0'");
    multiSearch(qb, ['language.name', 'language.description'], search.search);
    qb.orderBy('language.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getLanguageAllView() {
    const qb = getRepository(Language).createQueryBuilder('language');
    const fields: Record<string, string> = {
      id: 'language.id',
      name: 'language.name',
      description: 'language.description',
      createdAt: 'language.created_at',
      updatedAt: 'language.updated_at',
      isactived: 'language.isactived',
      islocked: 'language.islocked',
      createUid: 'language.create_uid',
      updatedUid: 'language.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getLanguage(search: LanguageSearchVo) {
    const qb = getRepository(Language).createQueryBuilder('language');
    const fields: Record<string, string> = {
      id: 'language.id',
      name: 'language.name',
      description: 'language.description',
      createdAt: 'language.created_at',
      updatedAt: 'language.updated_at',
      isactived: 'language.isactived',
      islocked: 'language.islocked',
      createUid: 'language.create_uid',
      updatedUid: 'language.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("language.isactived='0'");
    andWhereEqual(qb, 'language', 'satus', search.fundType);
    multiSearch(qb, ['language.name', 'language.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
