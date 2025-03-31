import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TaskCommentsSearchVo, TaskCommentsVo } from '../myvo/TaskCommentsVo';
import { TaskComments } from '../myentities';

export class TaskCommentsRepo {
  async create(accountTagVo: TaskCommentsVo) {
    return await getRepository(TaskComments).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TaskCommentsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(TaskComments).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(TaskComments).update(Ids[0], {
      isactived: '1',
    });
  }
  async updateTaskCommentsVoByMid(mid: string, id: string) {
    const listItems = this.getTaskCommentsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(TaskComments).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getTaskCommentsAllByMid(mid: string) {
    const qb = getRepository(TaskComments).createQueryBuilder('task_comments');
    const fields: Record<string, string> = {
      id: 'task_comments.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'task_comments', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getTaskCommentssById(id: string) {
    const qb = getRepository(TaskComments).createQueryBuilder('task_comments');
    const fields: Record<string, string> = {
      id: 'task_comments.id',
      mid: 'task_comments.mid',
      subject: 'task_comments.subject',
      assignTo: 'task_comments.assign_to',
      note: 'task_comments.note',
      createdAt: 'task_comments.created_at',
      updatedAt: 'task_comments.updated_at',
      isactived: 'task_comments.isactived',
      islocked: 'task_comments.islocked',
      createUid: 'task_comments.create_uid',
      updatedUid: 'task_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'task_comments', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTaskCommentsAll(search: TaskCommentsSearchVo) {
    const qb = getRepository(TaskComments).createQueryBuilder('task_comments');
    const fields: Record<string, string> = {
      id: 'task_comments.id',
      mid: 'task_comments.mid',
      subject: 'task_comments.subject',
      assignTo: 'task_comments.assign_to',
      note: 'task_comments.note',
      createdAt: 'task_comments.created_at',
      updatedAt: 'task_comments.updated_at',
      isactived: 'task_comments.isactived',
      islocked: 'task_comments.islocked',
      createUid: 'task_comments.create_uid',
      updatedUid: 'task_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("task_comments.isactived='0'");
    multiSearch(
      qb,
      ['task_comments.subject', 'task_comments.note'],
      search.search,
    );
    qb.orderBy('task_comments.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTaskCommentsAllView() {
    const qb = getRepository(TaskComments).createQueryBuilder('task_comments');
    const fields: Record<string, string> = {
      id: 'task_comments.id',
      mid: 'task_comments.mid',
      subject: 'task_comments.subject',
      assignTo: 'task_comments.assign_to',
      note: 'task_comments.note',
      createdAt: 'task_comments.created_at',
      updatedAt: 'task_comments.updated_at',
      isactived: 'task_comments.isactived',
      islocked: 'task_comments.islocked',
      createUid: 'task_comments.create_uid',
      updatedUid: 'task_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getTaskComments(search: TaskCommentsSearchVo) {
    const qb = getRepository(TaskComments).createQueryBuilder('task_comments');
    const fields: Record<string, string> = {
      id: 'task_comments.id',
      mid: 'task_comments.mid',
      subject: 'task_comments.subject',
      assignTo: 'task_comments.assign_to',
      note: 'task_comments.note',
      createdAt: 'task_comments.created_at',
      updatedAt: 'task_comments.updated_at',
      isactived: 'task_comments.isactived',
      islocked: 'task_comments.islocked',
      createUid: 'task_comments.create_uid',
      updatedUid: 'task_comments.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("task_comments.isactived='0'");
    andWhereEqual(qb, 'task_comments', 'subject', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'task_comments', 'mid', search.mid);
    }
    multiSearch(
      qb,
      ['task_comments.subject', 'task_comments.note'],
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
