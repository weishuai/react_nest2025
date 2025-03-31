import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';
import { Terms } from '../myentities';

export class TermsRepo {
  async create(accountTagVo: TermsVo) {
    return await getRepository(Terms).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TermsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Terms).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Terms).update(Ids[0], {
      isactived: '1',
    });
  }
  async gettermssById(id: string) {
    const qb = getRepository(Terms).createQueryBuilder('terms');
    const fields: Record<string, string> = {
      id: 'terms.id',
      name: 'terms.name',
      backgroundColor: 'terms.background_color',
      description: 'terms.description',
      leaderId: 'terms.leader_id',
      roleId: 'terms.role_id',
      createdAt: 'terms.created_at',
      updatedAt: 'terms.updated_at',
      isactived: 'terms.isactived',
      islocked: 'terms.islocked',
      createUid: 'terms.create_uid',
      updatedUid: 'terms.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'terms', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async gettermsAll(search: TermsSearchVo) {
    const qb = getRepository(Terms).createQueryBuilder('terms');
    const fields: Record<string, string> = {
      id: 'terms.id',
      name: 'terms.name',
      backgroundColor: 'terms.background_color',
      description: 'terms.description',
      leaderId: 'terms.leader_id',
      roleId: 'terms.role_id',
      createdAt: 'terms.created_at',
      updatedAt: 'terms.updated_at',
      isactived: 'terms.isactived',
      islocked: 'terms.islocked',
      createUid: 'terms.create_uid',
      updatedUid: 'terms.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("terms.isactived='0'");
    multiSearch(qb, ['terms.name', 'terms.description'], search.search);
    qb.orderBy('terms.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async gettermsAllView() {
    const qb = getRepository(Terms).createQueryBuilder('terms');
    const fields: Record<string, string> = {
      id: 'terms.id',
      name: 'terms.name',
      backgroundColor: 'terms.background_color',
      description: 'terms.description',
      leaderId: 'terms.leader_id',
      roleId: 'terms.role_id',
      createdAt: 'terms.created_at',
      updatedAt: 'terms.updated_at',
      isactived: 'terms.isactived',
      islocked: 'terms.islocked',
      createUid: 'terms.create_uid',
      updatedUid: 'terms.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getterms(search: TermsSearchVo) {
    const qb = getRepository(Terms).createQueryBuilder('terms');
    const fields: Record<string, string> = {
      id: 'terms.id',
      name: 'terms.name',
      backgroundColor: 'terms.background_color',
      description: 'terms.description',
      leaderId: 'terms.leader_id',
      roleId: 'terms.role_id',
      createdAt: 'terms.created_at',
      updatedAt: 'terms.updated_at',
      isactived: 'terms.isactived',
      islocked: 'terms.islocked',
      createUid: 'terms.create_uid',
      updatedUid: 'terms.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("terms.isactived='0'");
    //andWhereEqual(qb, 'terms', 'satus', search.fundType);
    multiSearch(qb, ['terms.name', 'terms.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
