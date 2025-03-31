import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
import { AccountTag } from '../myentities/account.tag';

export class AccountTagRepo {
  async create(accountTagVo: AccountTagVo) {
    return await getRepository(AccountTag).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: AccountTagVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(AccountTag).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(AccountTag).update(Ids[0], {
      isactived: '1',
    });
  }
  async getAccountTagsById(id: string) {
    const qb = await getRepository(AccountTag).createQueryBuilder(
      'account_tag',
    );
    const fields: Record<string, string> = {
      id: 'account_tag.id',
      name: 'account_tag.name',
      description: 'account_tag.description',
      createdAt: 'account_tag.created_at',
      updatedAt: 'account_tag.updated_at',
      isactived: 'account_tag.isactived',
      islocked: 'account_tag.islocked',
      createUid: 'account_tag.create_uid',
      updatedUid: 'account_tag.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'account_tag', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getAccountTagAll(search: AccountTagSearchVo) {
    const qb = getRepository(AccountTag).createQueryBuilder('account_tag');
    const fields: Record<string, string> = {
      id: 'account_tag.id',
      name: 'account_tag.name',
      description: 'account_tag.description',
      createdAt: 'account_tag.created_at',
      updatedAt: 'account_tag.updated_at',
      isactived: 'account_tag.isactived',
      islocked: 'account_tag.islocked',
      createUid: 'account_tag.create_uid',
      updatedUid: 'account_tag.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("account_tag.isactived='0'");
    qb.orderBy('account_tag.created_at', 'DESC');
    multiSearch(
      qb,
      ['account_tag.name', 'account_tag.description'],
      search.search,
    );  
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getAccountTagAllView() {
    const qb = await getRepository(AccountTag).createQueryBuilder(
      'account_tag',
    );
    const fields: Record<string, string> = {
      id: 'account_tag.id',
      name: 'account_tag.name',
      description: 'account_tag.description',
      createdAt: 'account_tag.created_at',
      updatedAt: 'account_tag.updated_at',
      isactived: 'account_tag.isactived',
      islocked: 'account_tag.islocked',
      createUid: 'account_tag.create_uid',
      updatedUid: 'account_tag.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('account_tag.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getAccountTagList(search: AccountTagSearchVo) {
    const qb = await getRepository(AccountTag).createQueryBuilder(
      'account_tag',
    );
    const fields: Record<string, string> = {
      id: 'account_tag.id',
      name: 'account_tag.name',
      description: 'account_tag.description',
      createdAt: 'account_tag.created_at',
      updatedAt: 'account_tag.updated_at',
      isactived: 'account_tag.isactived',
      islocked: 'account_tag.islocked',
      createUid: 'account_tag.create_uid',
      updatedUid: 'account_tag.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("account_tag.isactived='0'");

    multiSearch(
      qb,
      ['account_tag.name', 'account_tag.description'],
      search.search,
    );
    qb.orderBy('account_tag.created_at', 'DESC');
    //qb.addOrderBy('account_tag.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
