import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';
import { Note } from '../myentities';

export class NoteRepo {
  async create(accountTagVo: NoteVo) {
    return await getRepository(Note).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: NoteVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Note).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Note).update(Ids[0], {
      isactived: '1',
    });
  }

  async getnotesById(id: string) {
    const qb = getRepository(Note).createQueryBuilder('note');
    const fields: Record<string, string> = {
      id: 'note.id',
      subject: 'note.subject',
      relatedTo: 'note.related_to',
      relatedType: 'note.related_type',
      note: 'note.note',
      attachment: 'note.attachment',
      createdAt: 'note.created_at',
      updatedAt: 'note.updated_at',
      isactived: 'note.isactived',
      islocked: 'note.islocked',
      createUid: 'note.create_uid',
      updatedUid: 'note.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'note', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getnoteAll(search: NoteSearchVo) {
    const qb = getRepository(Note).createQueryBuilder('note');
    const fields: Record<string, string> = {
      id: 'note.id',
      subject: 'note.subject',
      relatedType: 'note.related_type',
      relatedTo: 'note.related_to',
      note: 'note.note',
      attachment: 'note.attachment',
      createdAt: 'note.created_at',
      updatedAt: 'note.updated_at',
      isactived: 'note.isactived',
      islocked: 'note.islocked',
      createUid: 'note.create_uid',
      updatedUid: 'note.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where('1=1');
    qb.where("note.isactived='0'");
    multiSearch(qb, ['note.subject', 'note.note'], search.search);
    qb.orderBy('note.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getnote(search: NoteSearchVo) {
    const qb = getRepository(Note).createQueryBuilder('note');
    const fields: Record<string, string> = {
      id: 'note.id',
      subject: 'note.subject',
      relatedType: 'note.related_type',
      relatedTo: 'note.related_to',
      note: 'note.note',
      attachment: 'note.attachment',
      createdAt: 'note.created_at',
      updatedAt: 'note.updated_at',
      isactived: 'note.isactived',
      islocked: 'note.islocked',
      createUid: 'note.create_uid',
      updatedUid: 'note.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("note.isactived='0'");
    andWhereEqual(qb, 'note', 'satus', search.fundType);
    multiSearch(qb, ['note.subject', 'note.note'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
