import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';
import { JobItem } from '../myentities';

export class JobItemRepo {
  async create(accountTagVo: JobItemVo) {
    return await getRepository(JobItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: JobItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(JobItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(JobItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateJobItemVoByMid(mid: string, id: string) {
    const listItems = this.getJobItemAllByMid(mid);
    (await listItems).map((Item) => {
      getRepository(JobItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getJobItemAllByMid(mid: string) {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'job_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getJobItemsById(id: string) {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
      photo: 'job_item.photo',
      step: 'job_item.step',
      title: 'job_item.title',
      mid: 'job_item.mid',
      template: 'job_item.template',
      require: 'job_item.require',
      createdAt: 'job_item.created_at',
      updatedAt: 'job_item.updated_at',
      isactived: 'job_item.isactived',
      islocked: 'job_item.islocked',
      createUid: 'job_item.create_uid',
      updatedUid: 'job_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'job_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getJobItemAll(search: JobItemSearchVo) {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
      mid: 'job_item.mid',
      photo: 'job_item.photo',
      step: 'job_item.step',
      title: 'job_item.title',
      template: 'job_item.template',
      require: 'job_item.require',
      createdAt: 'job_item.created_at',
      updatedAt: 'job_item.updated_at',
      isactived: 'job_item.isactived',
      islocked: 'job_item.islocked',
      createUid: 'job_item.create_uid',
      updatedUid: 'job_item.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where("job_item.isactived='0'");
    // multiSearch(qb, ['job_item.title'], search.search);

    qb.where("job_item.isactived='0' and job_item.mid='"+search.mid+"'");

    qb.orderBy('job_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getJobItemAllView() {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
      mid: 'job_item.mid',
      photo: 'job_item.photo',
      step: 'job_item.step',
      title: 'job_item.title',
      template: 'job_item.template',
      require: 'job_item.require',
      createdAt: 'job_item.created_at',
      updatedAt: 'job_item.updated_at',
      isactived: 'job_item.isactived',
      islocked: 'job_item.islocked',
      createUid: 'job_item.create_uid',
      updatedUid: 'job_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getJobItem(search: JobItemSearchVo) {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
      mid: 'job_item.mid',
      photo: 'job_item.photo',
      step: 'job_item.step',
      title: 'job_item.title',
      template: 'job_item.template',
      require: 'job_item.require',
      createdAt: 'job_item.created_at',
      updatedAt: 'job_item.updated_at',
      isactived: 'job_item.isactived',
      islocked: 'job_item.islocked',
      createUid: 'job_item.create_uid',
      updatedUid: 'job_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("job_item.isactived='0'");
    andWhereEqual(qb, 'job_item', 'satus', search.fundType);

    if (!_.isNil(search.mid) && !_.isEmpty(search.mid)) {
      andWhereEqual(qb, 'job_item', 'mid', search.mid);
    }

    ///multiSearch(qb, ['job_item.name', 'job_item.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }

  async getJobItemAPP(search: JobItemSearchVo) {
    const qb = getRepository(JobItem).createQueryBuilder('job_item');
    const fields: Record<string, string> = {
      id: 'job_item.id',
      mid: 'job_item.mid',
      photo: 'job_item.photo',
      step: 'job_item.step',
      title: 'job_item.title',
      template: 'job_item.template',
      require: 'job_item.require',
      createdAt: 'job_item.created_at',
      updatedAt: 'job_item.updated_at',
      isactived: 'job_item.isactived',
      islocked: 'job_item.islocked',
      createUid: 'job_item.create_uid',
      updatedUid: 'job_item.updated_uid',
    };

    selectFields(qb, fields);
    ////qb.where("job_item.isactived='0'");
    ///const jobitemIDs = search.jobitemIDs.toString().substring(1, search.jobitemIDs.length - 2);
    ///qb.where("job_item.isactived='0' and job_item.mid in (" + search.jobitemIDs + ')');
    ///andWhereEqual(qb, 'job_item', 'satus', search.fundType);
    /*
    if (!_.isNil(search.mid) && !_.isEmpty(search.mid)) {
      andWhereEqual(qb, 'job_item', 'mid', search.mid);
    }
*/
    multiSearch(qb, ['job_item.title'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
