import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';

import { User } from '../myentities/User';
import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';

export class FHUserRepo {
  async getFHUsersById(id: string) {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      userName:'user.userName',
      id: 'user.id',
      email: 'user.email',
      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'user', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async UsersLogin(email: string, password: string) {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      email: 'user.email',

      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'user', 'email', email);
    andWhereEqual(qb, 'user', 'password', password);
    const res = await qb.getRawMany();
    return res;
  }

  async getFHUserAll() {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      email: 'user.email',
      userName: 'user.user_name',
      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };

    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('user.created_at', 'DESC');
    console.info('44');

    const raws = await qb.getRawMany();
    return raws;
  }



  async getFHUserAll002(search:  FHUserSearchVo) {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      email: 'user.email',
      userName: 'user.user_name',
      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };

    selectFields(qb, fields);
    qb.where('1=1');

    console.info('44');

    multiSearch(qb, ['user.user_name' ], search.search);
    qb.orderBy('user.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getFHUserAllView() {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      userName: 'user.user_name',
      email: 'user.email',
      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getFHUser(search: FHUserSearchVo) {
    const qb = getRepository(User).createQueryBuilder('user');
    const fields: Record<string, string> = {
      id: 'user.id',
      userName: 'user.user_name',
      email: 'user.email',
      password: 'user.password',
      app: 'user.app',
      timezone: 'user.timezone',
      mobileCountryCode: 'user.mobile_country_code',
      mobileCallingCountryCode: 'user.mobile_calling_country_code',
      mobileNumber: 'user.mobile_number',
      avatar: 'user.avatar',
      lastSignIn: 'user.last_sign_in',
      createdAt: 'user.created_at',
    };

    selectFields(qb, fields);
    qb.where('user.is_del=0');
    multiSearch(qb, ['user.name'], search.search);
    setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
