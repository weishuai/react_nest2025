import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';
import { StaffList } from '../myentities';

export class StaffListRepo {
  async create(accountTagVo: StaffListVo) {
    return await getRepository(StaffList).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: StaffListVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StaffList).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StaffList).update(Ids[0], {
      isactived: '1',
    });
  }

  async getStaffListsById(id: string) {
    const qb = getRepository(StaffList).createQueryBuilder('staff_list');
    const fields: Record<string, string> = {
      id: 'staff_list.id',
      fullName: 'staff_list.full_name',
      name: 'staff_list.name',
      description: 'staff_list.description',
      contactNo: 'staff_list.contact_no',
      email: 'staff_list.email',
      role: 'staff_list.role',
      clients: 'staff_list.clients',
      type: 'staff_list.type',
      login: 'staff_list.login',
      createdAt: 'staff_list.created_at',
      updatedAt: 'staff_list.updated_at',
      isactived: 'staff_list.isactived',
      islocked: 'staff_list.islocked',
      createUid: 'staff_list.create_uid',
      updatedUid: 'staff_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'staff_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStaffListAll(search: StaffListSearchVo) {
    const qb = getRepository(StaffList).createQueryBuilder('staff_list');
    const fields: Record<string, string> = {
      id: 'staff_list.id',
      name: 'staff_list.name',
      description: 'staff_list.description',
      fullName: 'staff_list.full_name',
      contactNo: 'staff_list.contact_no',
      email: 'staff_list.email',
      role: 'staff_list.role',
      clients: 'staff_list.clients',
      type: 'staff_list.type',
      login: 'staff_list.login',
      createdAt: 'staff_list.created_at',
      updatedAt: 'staff_list.updated_at',
      isactived: 'staff_list.isactived',
      islocked: 'staff_list.islocked',
      createUid: 'staff_list.create_uid',
      updatedUid: 'staff_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("staff_list.isactived='0'");
    multiSearch(
      qb,
      ['staff_list.fullName', 'staff_list.contactNo'],
      search.search,
    );
    qb.orderBy('staff_list.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getStaffListAllView() {
    const qb = getRepository(StaffList).createQueryBuilder('staff_list');
    const fields: Record<string, string> = {
      id: 'staff_list.id',
      name: 'staff_list.name',
      description: 'staff_list.description',
      fullName: 'staff_list.full_name',
      contactNo: 'staff_list.contact_no',
      email: 'staff_list.email',
      role: 'staff_list.role',
      clients: 'staff_list.clients',
      type: 'staff_list.type',
      login: 'staff_list.login',
      createdAt: 'staff_list.created_at',
      updatedAt: 'staff_list.updated_at',
      isactived: 'staff_list.isactived',
      islocked: 'staff_list.islocked',
      createUid: 'staff_list.create_uid',
      updatedUid: 'staff_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getStaffList(search: StaffListSearchVo) {
    const qb = getRepository(StaffList).createQueryBuilder('staff_list');
    const fields: Record<string, string> = {
      id: 'staff_list.id',
      name: 'staff_list.name',
      description: 'staff_list.description',
      fullName: 'staff_list.full_name',
      contactNo: 'staff_list.contact_no',
      email: 'staff_list.email',
      role: 'staff_list.role',
      clients: 'staff_list.clients',
      type: 'staff_list.type',
      login: 'staff_list.login',
      createdAt: 'staff_list.created_at',
      updatedAt: 'staff_list.updated_at',
      isactived: 'staff_list.isactived',
      islocked: 'staff_list.islocked',
      createUid: 'staff_list.create_uid',
      updatedUid: 'staff_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("staff_list.isactived='0'");
    andWhereEqual(qb, 'staff_list', 'contactNo', search.fundType);
    multiSearch(
      qb,
      ['staff_list.fullName', 'staff_list.contactNo'],
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
