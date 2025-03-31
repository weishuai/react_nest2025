import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';
import { WorkNote } from '../myentities';

export class WorkNoteRepo {
  async create(accountTagVo: WorkNoteVo) {
    return await getRepository(WorkNote).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: WorkNoteVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(WorkNote).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(WorkNote).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateWorkNoteVoByMid(mid: string, id: string) {
    const listItems = this.getWorkNoteAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(WorkNote).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  // Add your code herer
  async getWorkNotesById(id: string) {
    const qb = getRepository(WorkNote).createQueryBuilder('work_note');
    const fields: Record<string, string> = {
      id: 'work_note.id',
      workId: 'work_note.work_id',
      title: 'work_note.title',
      note: 'work_note.note',
      assignTo: 'work_note.assign_to',
      createdAt: 'work_note.created_at',
      updatedAt: 'work_note.updated_at',
      isactived: 'work_note.isactived',
      islocked: 'work_note.islocked',
      createUid: 'work_note.create_uid',
      updatedUid: 'work_note.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'work_note', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getWorkNoteAll(search: WorkNoteSearchVo) {
    const qb = getRepository(WorkNote).createQueryBuilder('work_note');
    const fields: Record<string, string> = {
      id: 'work_note.id',
      workId: 'work_note.work_id',
      title: 'work_note.title',
      note: 'work_note.note',
      assignTo: 'work_note.assign_to',
      createdAt: 'work_note.created_at',
      updatedAt: 'work_note.updated_at',
      isactived: 'work_note.isactived',
      islocked: 'work_note.islocked',
      createUid: 'work_note.create_uid',
      updatedUid: 'work_note.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where("work_note.isactived='0'");
    // multiSearch(qb, ['work_note.name', 'work_note.remark'], search.search);
    qb.where("work_note.isactived='0' and work_note.mid='"+search.mid+"'");
    qb.orderBy('work_note.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getWorkNoteAllView() {
    const qb = getRepository(WorkNote).createQueryBuilder('work_note');
    const fields: Record<string, string> = {
      id: 'work_note.id',
      workId: 'work_note.work_id',
      title: 'work_note.title',
      note: 'work_note.note',
      assignTo: 'work_note.assign_to',
      createdAt: 'work_note.created_at',
      updatedAt: 'work_note.updated_at',
      isactived: 'work_note.isactived',
      islocked: 'work_note.islocked',
      createUid: 'work_note.create_uid',
      updatedUid: 'work_note.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getWorkNoteAllByMid(mid: string) {
    const qb = getRepository(WorkNote).createQueryBuilder('work_note');
    const fields: Record<string, string> = {
      id: 'work_note.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'work_note', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getWorkNote(search: WorkNoteSearchVo) {
    const qb = getRepository(WorkNote).createQueryBuilder('work_note');
    const fields: Record<string, string> = {
      id: 'work_note.id',
      workId: 'work_note.work_id',
      title: 'work_note.title',
      note: 'work_note.note',
      assignTo: 'work_note.assign_to',
      createdAt: 'work_note.created_at',
      updatedAt: 'work_note.updated_at',
      isactived: 'work_note.isactived',
      islocked: 'work_note.islocked',
      createUid: 'work_note.create_uid',
      updatedUid: 'work_note.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("work_note.isactived='0'");
    andWhereEqual(qb, 'work_note', 'satus', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'work_note', 'mid', search.mid);
    }

    multiSearch(qb, ['work_note.name', 'work_note.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
