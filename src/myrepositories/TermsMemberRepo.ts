import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';
import { TermsMember } from '../myentities';

export class TermsMemberRepo {
  async create(accountTagVo: TermsMemberVo) {
    return await getRepository(TermsMember).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TermsMemberVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(TermsMember).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(TermsMember).update(Ids[0], {
      isactived: '1',
    });
  }

  async getTermsMembersById(id: string) {
    const qb = getRepository(TermsMember).createQueryBuilder('terms_member');
    const fields: Record<string, string> = {
      id: 'terms_member.id',
      termsId: 'terms_member.terms_id',
      memberId: 'terms_member.member_id',
      createdAt: 'terms_member.created_at',
      updatedAt: 'terms_member.updated_at',
      isactived: 'terms_member.isactived',
      islocked: 'terms_member.islocked',
      createUid: 'terms_member.create_uid',
      updatedUid: 'terms_member.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'terms_member', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTermsMemberAll(search: TermsMemberSearchVo) {
    const qb = getRepository(TermsMember).createQueryBuilder('terms_member');
    const fields: Record<string, string> = {
      id: 'terms_member.id',
      termsId: 'terms_member.terms_id',
      memberId: 'terms_member.member_id',
      createdAt: 'terms_member.created_at',
      updatedAt: 'terms_member.updated_at',
      isactived: 'terms_member.isactived',
      islocked: 'terms_member.islocked',
      createUid: 'terms_member.create_uid',
      updatedUid: 'terms_member.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("terms_member.isactived='0'");
    multiSearch(
      qb,
      ['terms_member.name', 'terms_member.description'],
      search.search,
    );
    qb.orderBy('terms_member.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTermsMemberAllView() {
    const qb = getRepository(TermsMember).createQueryBuilder('terms_member');
    const fields: Record<string, string> = {
      id: 'terms_member.id',
      termsId: 'terms_member.terms_id',
      memberId: 'terms_member.member_id',
      createdAt: 'terms_member.created_at',
      updatedAt: 'terms_member.updated_at',
      isactived: 'terms_member.isactived',
      islocked: 'terms_member.islocked',
      createUid: 'terms_member.create_uid',
      updatedUid: 'terms_member.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getTermsMember(search: TermsMemberSearchVo) {
    const qb = getRepository(TermsMember).createQueryBuilder('terms_member');
    const fields: Record<string, string> = {
      id: 'terms_member.id',
      termsId: 'terms_member.terms_id',
      memberId: 'terms_member.member_id',
      createdAt: 'terms_member.created_at',
      updatedAt: 'terms_member.updated_at',
      isactived: 'terms_member.isactived',
      islocked: 'terms_member.islocked',
      createUid: 'terms_member.create_uid',
      updatedUid: 'terms_member.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("terms_member.isactived='0'");
    andWhereEqual(qb, 'terms_member', 'name', search.fundType);
    multiSearch(
      qb,
      ['terms_member.name', 'terms_member.description'],
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
