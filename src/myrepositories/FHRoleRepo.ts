import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';

import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';
import { Role } from '../myentities';

export class FHRoleRepo {
  async create(accountTagVo: FHRoleVo) {
    return await getRepository(Role).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: FHRoleVo) {
    accountTagVo.updatedAt = new Date();
    //accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Role).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Role).update(Ids, { isDel: 1 });
  }

  async getFHRolesById(id: string) {
    const qb = getRepository(Role).createQueryBuilder('role');
    const fields: Record<string, string> = {
      id: 'role.id',
      name: 'role.name',
      app: 'role.app',
      isDefault: 'role.is_default',
      isDel: 'role.is_del',
      createdAt: 'role.created_at',
      updatedAt: 'role.updated_at',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'role', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFHRoleAll(search: FHRoleSearchVo) {
    const qb = getRepository(Role).createQueryBuilder('role');
    const fields: Record<string, string> = {
      id: 'role.id',
      name: 'role.name',
      app: 'role.app',
      isDefault: 'role.is_default',
      isDel: 'role.is_del',
      createdAt: 'role.created_at',
      updatedAt: 'role.updated_at',
    };
    selectFields(qb, fields);
    qb.where('role.is_del=0');
    multiSearch(qb, ['role.name'], search.search);
    qb.orderBy('role.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getFHRoleAllView() {
    const qb = getRepository(Role).createQueryBuilder('role');
    const fields: Record<string, string> = {
      id: 'role.id',
      name: 'role.name',
      app: 'role.app',
      isDefault: 'role.is_default',
      isDel: 'role.is_del',
      createdAt: 'role.created_at',
      updatedAt: 'role.updated_at',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getFHRole(search: FHRoleSearchVo) {
    const qb = getRepository(Role).createQueryBuilder('role');
    const fields: Record<string, string> = {
      id: 'role.id',
      name: 'role.name',
      app: 'role.app',
      isDefault: 'role.is_default',
      isDel: 'role.is_del',
      createdAt: 'role.created_at',
      updatedAt: 'role.updated_at',
    };

    selectFields(qb, fields);
    qb.where('role.is_del=0');
    ///andWhereEqual(qb, 'fhrole', 'satus', search.fundType);
    multiSearch(qb, ['role.name'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
