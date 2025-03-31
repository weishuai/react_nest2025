import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';
import { Unit } from '../myentities';

export class UnitRepo {
  async create(accountTagVo: UnitVo) {
    return await getRepository(Unit).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: UnitVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Unit).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Unit).update(Ids[0], {
      isactived: '1',
    });
  }

  async getUnitsById(id: string) {
    const qb = getRepository(Unit).createQueryBuilder('unit');
    const fields: Record<string, string> = {
      id: 'unit.id',
      name: 'unit.name',
      description: 'unit.description',
      createdAt: 'unit.created_at',
      updatedAt: 'unit.updated_at',
      isactived: 'unit.isactived',
      islocked: 'unit.islocked',
      createUid: 'unit.create_uid',
      updatedUid: 'unit.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'unit', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getUnitAll(search: UnitSearchVo) {
    const qb = getRepository(Unit).createQueryBuilder('unit');
    const fields: Record<string, string> = {
      id: 'unit.id',
      name: 'unit.name',
      description: 'unit.description',
      createdAt: 'unit.created_at',
      updatedAt: 'unit.updated_at',
      isactived: 'unit.isactived',
      islocked: 'unit.islocked',
      createUid: 'unit.create_uid',
      updatedUid: 'unit.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("unit.isactived='0'");
    multiSearch(qb, ['unit.name', 'unit.description'], search.search);
    qb.orderBy('unit.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getUnitAllView() {
    const qb = getRepository(Unit).createQueryBuilder('unit');
    const fields: Record<string, string> = {
      id: 'unit.id',
      name: 'unit.name',
      description: 'unit.description',
      createdAt: 'unit.created_at',
      updatedAt: 'unit.updated_at',
      isactived: 'unit.isactived',
      islocked: 'unit.islocked',
      createUid: 'unit.create_uid',
      updatedUid: 'unit.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {'fhok':res};
  }

  async getUnit(search: UnitSearchVo) {
    const qb = getRepository(Unit).createQueryBuilder('unit');
    const fields: Record<string, string> = {
      id: 'unit.id',
      name: 'unit.name',
      description: 'unit.description',
      createdAt: 'unit.created_at',
      updatedAt: 'unit.updated_at',
      isactived: 'unit.isactived',
      islocked: 'unit.islocked',
      createUid: 'unit.create_uid',
      updatedUid: 'unit.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("unit.isactived='0'");
    andWhereEqual(qb, 'unit', 'name', search.fundType);
    multiSearch(qb, ['unit.name', 'unit.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
