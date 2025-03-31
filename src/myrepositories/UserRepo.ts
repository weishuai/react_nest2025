import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { User } from '../myentities';
import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
export class UserRepo {
  async create(accountTagVo: FHUserVo) {
    return await getRepository(User).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: FHUserVo) {
    //accountTagVo.updatedAt = new Date();
    //accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(User).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(User).update(Ids, {
      //isactived: '1',
    });
  }

  async getUserBaseAll() {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      name: 'user.user_name',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const raws = await qb.getRawMany();
    return raws;
  }

  async getUserBaseAllView() {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      name: 'user.user_name',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawMany();
    return res;
  }

  async getUserBaseById(id: string) {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      userName: 'user.user_name',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'user', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }
}
