import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { JobSearchVo, JobVo } from '../myvo/JobVo';
import { Job } from '../myentities';

export class JobRepo {
  async create(accountTagVo: JobVo) {
    return await getRepository(Job).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: JobVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Job).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Job).update(Ids[0], {
      isactived: '1',
    });
  }

  async getJobsById(id: string) {
    const qb = getRepository(Job).createQueryBuilder('job');
    const fields: Record<string, string> = {
      id: 'job.id',
      title: 'job.title',
      name: 'job.name',
      description: 'job.description',
      wiType: 'job.wi_type',
      clients: 'job.clients',
      enabled: 'job.enabled',
      createdAt: 'job.created_at',
      updatedAt: 'job.updated_at',
      isactived: 'job.isactived',
      islocked: 'job.islocked',
      createUid: 'job.create_uid',
      updatedUid: 'job.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'job', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getJobAll(search: JobSearchVo) {
    const qb = getRepository(Job).createQueryBuilder('job');
    const fields: Record<string, string> = {
      id: 'job.id',
      title: 'job.title',
      name: 'job.name',
      description: 'job.description',
      wiType: 'job.wi_type',
      clients: 'job.clients',
      enabled: 'job.enabled',
      createdAt: 'job.created_at',
      updatedAt: 'job.updated_at',
      isactived: 'job.isactived',
      islocked: 'job.islocked',
      createUid: 'job.create_uid',
      updatedUid: 'job.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("job.isactived='0'");
    multiSearch(qb, ['job.title'], search.search);
    qb.orderBy('job.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getJobAllView() {
    const qb = getRepository(Job).createQueryBuilder('job');
    const fields: Record<string, string> = {
      id: 'job.id',
      title: 'job.title',
      name: 'job.name',
      description: 'job.description',
      wiType: 'job.wi_type',
      clients: 'job.clients',
      enabled: 'job.enabled',
      createdAt: 'job.created_at',
      updatedAt: 'job.updated_at',
      isactived: 'job.isactived',
      islocked: 'job.islocked',
      createUid: 'job.create_uid',
      updatedUid: 'job.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {"fhok":res};
  }

  async getJob(userId: string, search: JobSearchVo) {
    const qb = getRepository(Job).createQueryBuilder('job');
    const fields: Record<string, string> = {
      id: 'job.id',
      title: 'job.title',
      name: 'job.name',
      description: 'job.description',
      wiType: 'job.wi_type',
      clients: 'job.clients',
      enabled: 'job.enabled',
      createdAt: 'job.created_at',
      updatedAt: 'job.updated_at',
      isactived: 'job.isactived',
      islocked: 'job.islocked',
      createUid: 'job.create_uid',
      updatedUid: 'job.updated_uid',
    };

    selectFields(qb, fields);
    ///qb.where("job.isactived='0'");
    const userIds = userId;
    ///qb.where("job.isactived='0' and (job.create_uid = '" + userIds + "' or job.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    andWhereEqual(qb, 'job', 'satus', search.fundType);
    multiSearch(qb, ['job.title'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
