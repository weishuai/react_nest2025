import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { StageSearchVo, StageVo } from '../myvo/StageVo';
import { Stage } from '../myentities';

export class StageRepo {
  async create(accountTagVo: StageVo) {
    return await getRepository(Stage).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: StageVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Stage).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Stage).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStagesById(id: string) {
    const qb = getRepository(Stage).createQueryBuilder('stage');
    const fields: Record<string, string> = {
      id: 'stage.id',
      name: 'stage.name',
      description: 'stage.description',
      createdAt: 'stage.created_at',
      updatedAt: 'stage.updated_at',
      isactived: 'stage.isactived',
      islocked: 'stage.islocked',
      createUid: 'stage.create_uid',
      updatedUid: 'stage.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'stage', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStageAll(search: StageSearchVo) {
    const qb = getRepository(Stage).createQueryBuilder('stage');
    const fields: Record<string, string> = {
      id: 'stage.id',
      name: 'stage.name',
      description: 'stage.description',
      createdAt: 'stage.created_at',
      updatedAt: 'stage.updated_at',
      isactived: 'stage.isactived',
      islocked: 'stage.islocked',
      createUid: 'stage.create_uid',
      updatedUid: 'stage.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("stage.isactived='0'");
    multiSearch(qb, ['stage.name', 'stage.description'], search.search);
    qb.orderBy('stage.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getStageAllView() {
    const qb = getRepository(Stage).createQueryBuilder('stage');
    const fields: Record<string, string> = {
      id: 'stage.id',
      name: 'stage.name',
      description: 'stage.description',
      createdAt: 'stage.created_at',
      updatedAt: 'stage.updated_at',
      isactived: 'stage.isactived',
      islocked: 'stage.islocked',
      createUid: 'stage.create_uid',
      updatedUid: 'stage.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getStage(search: StageSearchVo) {
    const qb = getRepository(Stage).createQueryBuilder('stage');
    const fields: Record<string, string> = {
      id: 'stage.id',
      name: 'stage.name',
      description: 'stage.description',
      createdAt: 'stage.created_at',
      updatedAt: 'stage.updated_at',
      isactived: 'stage.isactived',
      islocked: 'stage.islocked',
      createUid: 'stage.create_uid',
      updatedUid: 'stage.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stage.isactived='0'");
    andWhereEqual(qb, 'stage', 'name', search.fundType);
    multiSearch(qb, ['stage.name', 'stage.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
