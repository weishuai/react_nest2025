import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';
import { Translate } from '../myentities';

export class TranslateRepo {
  async create(accountTagVo: TranslateVo) {
    return await getRepository(Translate).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TranslateVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Translate).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Translate).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTranslatesById(id: string) {
    const qb = getRepository(Translate).createQueryBuilder('translate');
    const fields: Record<string, string> = {
      id: 'translate.id',
      name: 'translate.name',
      description: 'translate.description',
      createdAt: 'translate.created_at',
      updatedAt: 'translate.updated_at',
      isactived: 'translate.isactived',
      islocked: 'translate.islocked',
      createUid: 'translate.create_uid',
      updatedUid: 'translate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'translate', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTranslateAll(search: TranslateSearchVo) {
    const qb = getRepository(Translate).createQueryBuilder('translate');
    const fields: Record<string, string> = {
      id: 'translate.id',
      name: 'translate.name',
      description: 'translate.description',
      createdAt: 'translate.created_at',
      updatedAt: 'translate.updated_at',
      isactived: 'translate.isactived',
      islocked: 'translate.islocked',
      createUid: 'translate.create_uid',
      updatedUid: 'translate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("translate.isactived='0'");
    multiSearch(qb, ['translate.name', 'translate.description'], search.search);
    qb.orderBy('translate.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTranslateAllView() {
    const qb = getRepository(Translate).createQueryBuilder('translate');
    const fields: Record<string, string> = {
      id: 'translate.id',
      name: 'translate.name',
      description: 'translate.description',
      createdAt: 'translate.created_at',
      updatedAt: 'translate.updated_at',
      isactived: 'translate.isactived',
      islocked: 'translate.islocked',
      createUid: 'translate.create_uid',
      updatedUid: 'translate.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getTranslate(search: TranslateSearchVo) {
    const qb = getRepository(Translate).createQueryBuilder('translate');
    const fields: Record<string, string> = {
      id: 'translate.id',
      name: 'translate.name',
      description: 'translate.description',
      createdAt: 'translate.created_at',
      updatedAt: 'translate.updated_at',
      isactived: 'translate.isactived',
      islocked: 'translate.islocked',
      createUid: 'translate.create_uid',
      updatedUid: 'translate.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("translate.isactived='0'");
    //andWhereEqual(qb, 'language', 'satus', search.fundType);
    multiSearch(qb, ['translate.name', 'translate.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
