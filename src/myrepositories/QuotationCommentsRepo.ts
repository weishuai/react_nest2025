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
  QuotationCommentsSearchVo,
  QuotationCommentsVo,
} from '../myvo/QuotationCommentsVo';
import { QuotationComments } from '../myentities';

export class QuotationCommentsRepo {
  async create(accountTagVo: QuotationCommentsVo) {
    return await getRepository(QuotationComments).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: QuotationCommentsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(QuotationComments).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(QuotationComments).update(Ids[0], {
      isactived: '1',
    });
  }
  async getQuotationCommentssById(id: string) {
    const qb =
      getRepository(QuotationComments).createQueryBuilder('quotation_comments');
    const fields: Record<string, string> = {
      id: 'quotation_comments.id',
      mid: 'quotation_comments.mid',
      subject: 'quotation_comments.subject',
      assignTo: 'quotation_comments.assignTo',
      note: 'quotation_comments.note',
      createdAt: 'quotation_comments.created_at',
      updatedAt: 'quotation_comments.updated_at',
      isactived: 'quotation_comments.isactived',
      islocked: 'quotation_comments.islocked',
      createUid: 'quotation_comments.create_uid',
      updatedUid: 'quotation_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'quotation_comments', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getQuotationCommentsAll(search: QuotationCommentsSearchVo) {
    const qb =
      getRepository(QuotationComments).createQueryBuilder('quotation_comments');
    const fields: Record<string, string> = {
      id: 'quotation_comments.id',
      mid: 'quotation_comments.mid',
      subject: 'quotation_comments.subject',
      assignTo: 'quotation_comments.assignTo',
      note: 'quotation_comments.note',
      createdAt: 'quotation_comments.created_at',
      updatedAt: 'quotation_comments.updated_at',
      isactived: 'quotation_comments.isactived',
      islocked: 'quotation_comments.islocked',
      createUid: 'quotation_comments.create_uid',
      updatedUid: 'quotation_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("quotation_comments.isactived='0'");
    multiSearch(
      qb,
      ['quotation_comments.name', 'quotation_comments.description'],
      search.search,
    );
    qb.orderBy('quotation_comments.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getQuotationCommentsAllView() {
    const qb =
      getRepository(QuotationComments).createQueryBuilder('quotation_comments');
    const fields: Record<string, string> = {
      id: 'quotation_comments.id',
      mid: 'quotation_comments.mid',
      subject: 'quotation_comments.subject',
      assignTo: 'quotation_comments.assignTo',
      note: 'quotation_comments.note',
      createdAt: 'quotation_comments.created_at',
      updatedAt: 'quotation_comments.updated_at',
      isactived: 'quotation_comments.isactived',
      islocked: 'quotation_comments.islocked',
      createUid: 'quotation_comments.create_uid',
      updatedUid: 'quotation_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getQuotationComments(search: QuotationCommentsSearchVo) {
    const qb =
      getRepository(QuotationComments).createQueryBuilder('quotation_comments');
    const fields: Record<string, string> = {
      id: 'quotation_comments.id',
      mid: 'quotation_comments.mid',
      subject: 'quotation_comments.subject',
      assignTo: 'quotation_comments.assignTo',
      note: 'quotation_comments.note',
      createdAt: 'quotation_comments.created_at',
      updatedAt: 'quotation_comments.updated_at',
      isactived: 'quotation_comments.isactived',
      islocked: 'quotation_comments.islocked',
      createUid: 'quotation_comments.create_uid',
      updatedUid: 'quotation_comments.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quotation_comments.isactived='0'");
    andWhereEqual(qb, 'quotation_comments', 'name', search.fundType);

    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'quotation_comments', 'mid', search.mid);
    }

    multiSearch(
      qb,
      ['quotation_comments.name', 'quotation_comments.description'],
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
