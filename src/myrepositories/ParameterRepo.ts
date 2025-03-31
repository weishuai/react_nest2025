import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';
import { Parameter } from '../myentities';

export class ParameterRepo {
  async create(accountTagVo: ParameterVo) {
    return await getRepository(Parameter).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ParameterVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Parameter).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Parameter).update(Ids[0], {
      isactived: '1',
    });
  }
  async getParametersById(id: string) {
    const qb = getRepository(Parameter).createQueryBuilder('parameter');
    const fields: Record<string, string> = {
      id: 'parameter.id',
      name: 'parameter.name',
      key: 'parameter.key',
      description: 'parameter.description',
      createdAt: 'parameter.created_at',
      updatedAt: 'parameter.updated_at',
      isactived: 'parameter.isactived',
      islocked: 'parameter.islocked',
      createUid: 'parameter.create_uid',
      updatedUid: 'parameter.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'parameter', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getParameterAll(search: ParameterSearchVo) {
    const qb = getRepository(Parameter).createQueryBuilder('parameter');
    const fields: Record<string, string> = {
      id: 'parameter.id',
      name: 'parameter.name',
      key: 'parameter.key',
      description: 'parameter.description',
      createdAt: 'parameter.created_at',
      updatedAt: 'parameter.updated_at',
      isactived: 'parameter.isactived',
      islocked: 'parameter.islocked',
      createUid: 'parameter.create_uid',
      updatedUid: 'parameter.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("parameter.isactived='0'");
    multiSearch(qb, ['parameter.name', 'parameter.description'], search.search);
    qb.orderBy('parameter.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getParameterAllView() {
    const qb = getRepository(Parameter).createQueryBuilder('parameter');
    const fields: Record<string, string> = {
      id: 'parameter.id',
      name: 'parameter.name',
      key: 'parameter.key',
      description: 'parameter.description',
      createdAt: 'parameter.created_at',
      updatedAt: 'parameter.updated_at',
      isactived: 'parameter.isactived',
      islocked: 'parameter.islocked',
      createUid: 'parameter.create_uid',
      updatedUid: 'parameter.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getParameter(search: ParameterSearchVo) {
    const qb = getRepository(Parameter).createQueryBuilder('parameter');
    const fields: Record<string, string> = {
      id: 'parameter.id',
      name: 'parameter.name',
      key: 'parameter.key',
      description: 'parameter.description',
      createdAt: 'parameter.created_at',
      updatedAt: 'parameter.updated_at',
      isactived: 'parameter.isactived',
      islocked: 'parameter.islocked',
      createUid: 'parameter.create_uid',
      updatedUid: 'parameter.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("parameter.isactived='0'");
    //andWhereEqual(qb, 'language', 'satus', search.fundType);
    multiSearch(qb, ['parameter.name', 'parameter.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
