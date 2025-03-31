import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TaskSearchVo, TaskVo } from '../myvo/TaskVo';
import { Task } from '../myentities';

export class TaskRepo {
  async create(accountTagVo: TaskVo) {
    return await getRepository(Task).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TaskVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Task).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Task).update(Ids[0], {
      isactived: '1',
    });
  }

  async gettasksById(id: string) {
    const qb = getRepository(Task).createQueryBuilder('task');
    const fields: Record<string, string> = {
      id: 'task.id',
      subject: 'task.subject',
      dueDate: 'task.due_date',
      collaborate1: 'task.collaborate1',
      collaborate2: 'task.collaborate2',
      relatedTo: 'task.related_to',
      priority: 'task.priority',
      status: 'task.status',
      comments: 'task.comments',
      relatedType: 'task.related_type',
      feedback: 'task.feedback',
      createdAt: 'task.created_at',
      updatedAt: 'task.updated_at',
      isactived: 'task.isactived',
      islocked: 'task.islocked',
      createUid: 'task.create_uid',
      updatedUid: 'task.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'task', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async gettaskAll(search: TaskSearchVo) {
    const qb = getRepository(Task).createQueryBuilder('task');
    const fields: Record<string, string> = {
      id: 'task.id',
      subject: 'task.subject',
      dueDate: 'task.due_date',
      collaborate1: 'task.collaborate1',
      collaborate2: 'task.collaborate2',
      relatedTo: 'task.related_to',
      priority: 'task.priority',
      status: 'task.status',
      comments: 'task.comments',
      relatedType: 'task.related_type',
      feedback: 'task.feedback',
      createdAt: 'task.created_at',
      updatedAt: 'task.updated_at',
      isactived: 'task.isactived',
      islocked: 'task.islocked',
      createUid: 'task.create_uid',
      updatedUid: 'task.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("task.isactived='0'");
    multiSearch(qb, ['task.subject', 'task.comments'], search.search);
    qb.orderBy('task.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async gettaskAllView() {
    const qb = getRepository(Task).createQueryBuilder('task');
    const fields: Record<string, string> = {
      id: 'task.id',
      subject: 'task.subject',
      dueDate: 'task.due_date',
      collaborate1: 'task.collaborate1',
      collaborate2: 'task.collaborate2',
      relatedTo: 'task.related_to',
      priority: 'task.priority',
      status: 'task.status',
      comments: 'task.comments',
      relatedType: 'task.related_type',
      feedback: 'task.feedback',
      createdAt: 'task.created_at',
      updatedAt: 'task.updated_at',
      isactived: 'task.isactived',
      islocked: 'task.islocked',
      createUid: 'task.create_uid',
      updatedUid: 'task.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async gettask(search: TaskSearchVo) {
    const qb = getRepository(Task).createQueryBuilder('task');
    const fields: Record<string, string> = {
      id: 'task.id',
      subject: 'task.subject',
      dueDate: 'task.due_date',
      collaborate1: 'task.collaborate1',
      collaborate2: 'task.collaborate2',
      relatedTo: 'task.related_to',
      priority: 'task.priority',
      status: 'task.status',
      comments: 'task.comments',
      relatedType: 'task.related_type',
      feedback: 'task.feedback',
      createdAt: 'task.created_at',
      updatedAt: 'task.updated_at',
      isactived: 'task.isactived',
      islocked: 'task.islocked',
      createUid: 'task.create_uid',
      updatedUid: 'task.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("task.isactived='0'");
    andWhereEqual(qb, 'task', 'satus', search.fundType);
    multiSearch(qb, ['task.subject', 'task.comments'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
