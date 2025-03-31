import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';

import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';
import { Skill } from '../myentities';

export class SkillRepo {
  async create(accountTagVo: SkillVo) {
    return await getRepository(Skill).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: SkillVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Skill).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Skill).update(Ids[0], {
      isactived: '1',
    });
  }
  async getSkillsById(id: string) {
    const qb = getRepository(Skill).createQueryBuilder('skill');
    const fields: Record<string, string> = {
      id: 'skill.id',
      name: 'skill.name',
      description: 'skill.description',
      createdAt: 'skill.created_at',
      updatedAt: 'skill.updated_at',
      isactived: 'skill.isactived',
      islocked: 'skill.islocked',
      createUid: 'skill.create_uid',
      updatedUid: 'skill.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'skill', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getSkillAll(search: SkillSearchVo) {
    const qb = getRepository(Skill).createQueryBuilder('skill');
    const fields: Record<string, string> = {
      id: 'skill.id',
      name: 'skill.name',
      description: 'skill.description',
      createdAt: 'skill.created_at',
      updatedAt: 'skill.updated_at',
      isactived: 'skill.isactived',
      islocked: 'skill.islocked',
      createUid: 'skill.create_uid',
      updatedUid: 'skill.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("skill.isactived='0'");
    multiSearch(qb, ['skill.name', 'skill.description'], search.search);
    qb.orderBy('skill.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getSkillAllView() {
    const qb = getRepository(Skill).createQueryBuilder('skill');
    const fields: Record<string, string> = {
      id: 'skill.id',
      name: 'skill.name',
      description: 'skill.description',
      createdAt: 'skill.created_at',
      updatedAt: 'skill.updated_at',
      isactived: 'skill.isactived',
      islocked: 'skill.islocked',
      createUid: 'skill.create_uid',
      updatedUid: 'skill.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getSkill(search: SkillSearchVo) {
    const qb = getRepository(Skill).createQueryBuilder('skill');
    const fields: Record<string, string> = {
      id: 'skill.id',
      name: 'skill.name',
      description: 'skill.description',
      createdAt: 'skill.created_at',
      updatedAt: 'skill.updated_at',
      isactived: 'skill.isactived',
      islocked: 'skill.islocked',
      createUid: 'skill.create_uid',
      updatedUid: 'skill.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("skill.isactived='0'");
    //andWhereEqual(qb, 'skill', 'satus', search.fundType);
    multiSearch(qb, ['skill.name', 'skill.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
