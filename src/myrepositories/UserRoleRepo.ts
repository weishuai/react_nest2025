// {}
import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
///import { UserRoleVoSearchVo, UserRoleVoVo } from '../myvo/';
import { UserRole } from '../myentities';

export class UserRoleRepo {
  /*
  async create(accountTagVo: UserRoleVo) {
    return await getRepository(UserRole).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: UserRoleVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(UserRole).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(UserRole).update(Ids[0], {
      isactived: '1',
    });
  }
  */
}
