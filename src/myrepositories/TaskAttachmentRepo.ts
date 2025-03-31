import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  TaskAttachmentSearchVo,
  TaskAttachmentVo,
} from '../myvo/TaskAttachmentVo';
import { TaskAttachment } from '../myentities';

export class TaskAttachmentRepo {
  async create(accountTagVo: TaskAttachmentVo) {
    return await getRepository(TaskAttachment).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TaskAttachmentVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(TaskAttachment).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(TaskAttachment).update(Ids[0], {
      isactived: '1',
    });
  }
  async updateTaskAttachmentsVoByMid(mid: string, id: string) {
    const listItems = this.getTaskAttachmentsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(TaskAttachment).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getTaskAttachmentsAllByMid(mid: string) {
    const qb =
      getRepository(TaskAttachment).createQueryBuilder('task_attachment');
    const fields: Record<string, string> = {
      id: 'task_attachment.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'task_attachment', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getTaskAttachmentsById(id: string) {
    const qb =
      getRepository(TaskAttachment).createQueryBuilder('task_attachment');
    const fields: Record<string, string> = {
      id: 'task_attachment.id',
      mid: 'task_attachment.mid',
      subject: 'task_attachment.subject',
      note: 'task_attachment.note',
      attachment: 'task_attachment.attachment',
      createdAt: 'task_attachment.created_at',
      updatedAt: 'task_attachment.updated_at',
      isactived: 'task_attachment.isactived',
      islocked: 'task_attachment.islocked',
      createUid: 'task_attachment.create_uid',
      updatedUid: 'task_attachment.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'task_attachment', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTaskAttachmentAll(search: TaskAttachmentSearchVo) {
    const qb =
      getRepository(TaskAttachment).createQueryBuilder('task_attachment');
    const fields: Record<string, string> = {
      id: 'task_attachment.id',
      mid: 'task_attachment.mid',
      subject: 'task_attachment.subject',
      note: 'task_attachment.note',
      attachment: 'task_attachment.attachment',
      createdAt: 'task_attachment.created_at',
      updatedAt: 'task_attachment.updated_at',
      isactived: 'task_attachment.isactived',
      islocked: 'task_attachment.islocked',
      createUid: 'task_attachment.create_uid',
      updatedUid: 'task_attachment.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("task_attachment.isactived='0'");
    multiSearch(
      qb,
      ['task_attachment.subject', 'task_attachment.note'],
      search.search,
    );
    qb.orderBy('task_attachment.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTaskAttachmentAllView() {
    const qb =
      getRepository(TaskAttachment).createQueryBuilder('task_attachment');
    const fields: Record<string, string> = {
      id: 'task_attachment.id',
      mid: 'task_attachment.mid',
      subject: 'task_attachment.subject',
      note: 'task_attachment.note',
      attachment: 'task_attachment.attachment',
      createdAt: 'task_attachment.created_at',
      updatedAt: 'task_attachment.updated_at',
      isactived: 'task_attachment.isactived',
      islocked: 'task_attachment.islocked',
      createUid: 'task_attachment.create_uid',
      updatedUid: 'task_attachment.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getTaskAttachment(search: TaskAttachmentSearchVo) {
    const qb =
      getRepository(TaskAttachment).createQueryBuilder('task_attachment');
    const fields: Record<string, string> = {
      id: 'task_attachment.id',
      mid: 'task_attachment.mid',
      subject: 'task_attachment.subject',
      note: 'task_attachment.note',
      attachment: 'task_attachment.attachment',
      createdAt: 'task_attachment.created_at',
      updatedAt: 'task_attachment.updated_at',
      isactived: 'task_attachment.isactived',
      islocked: 'task_attachment.islocked',
      createUid: 'task_attachment.create_uid',
      updatedUid: 'task_attachment.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("task_attachment.isactived='0'");
    andWhereEqual(qb, 'task_attachment', 'subject', search.fundType);

    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'task_attachment', 'mid', search.mid);
    }

    multiSearch(
      qb,
      ['task_attachment.subject', 'task_attachment.note'],
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
