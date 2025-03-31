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
  OpportunityCommentsSearchVo,
  OpportunityCommentsVo,
} from '../myvo/OpportunityCommentsVo';
import { OpportunityComments } from '../myentities';

export class OpportunityCommentsRepo {
  async create(accountTagVo: OpportunityCommentsVo) {
    return await getRepository(OpportunityComments).insert(accountTagVo);
  }
  async update(
    Id: string,
    user_id: string,
    accountTagVo: OpportunityCommentsVo,
  ) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(OpportunityComments).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(OpportunityComments).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateOpportunityCommentsVoByMid(mid: string, id: string) {
    const listItems = this.getOpportunityCommentsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(OpportunityComments).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getOpportunityCommentsAllByMid(mid: string) {
    const qb = getRepository(OpportunityComments).createQueryBuilder(
      'opportunity_comments',
    );
    const fields: Record<string, string> = {
      id: 'opportunity_comments.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'opportunity_comments', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getOpportunityCommentssById(id: string) {
    const qb = getRepository(OpportunityComments).createQueryBuilder(
      'opportunity_comments',
    );
    const fields: Record<string, string> = {
      id: 'opportunity_comments.id',
      mid: 'opportunity_comments.mid',

      name: 'opportunity_comments.name',
      description: 'opportunity_comments.description',

      subject: 'opportunity_comments.subject',
      assignTo: 'opportunity_comments.assign_to',
      note: 'opportunity_comments.note',
      createdAt: 'opportunity_comments.created_at',
      updatedAt: 'opportunity_comments.updated_at',
      isactived: 'opportunity_comments.isactived',
      islocked: 'opportunity_comments.islocked',
      createUid: 'opportunity_comments.create_uid',
      updatedUid: 'opportunity_comments.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'opportunity_comments', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getOpportunityCommentsAll(search: OpportunityCommentsSearchVo) {
    const qb = getRepository(OpportunityComments).createQueryBuilder(
      'opportunity_comments',
    );
    const fields: Record<string, string> = {
      id: 'opportunity_comments.id',
      mid: 'opportunity_comments.mid',
      name: 'opportunity_comments.name',
      description: 'opportunity_comments.description',  
      subject: 'opportunity_comments.subject',
      assignTo: 'opportunity_comments.assign_to',
      note: 'opportunity_comments.note',
      createdAt: 'opportunity_comments.created_at',
      updatedAt: 'opportunity_comments.updated_at',
      isactived: 'opportunity_comments.isactived',
      islocked: 'opportunity_comments.islocked',
      createUid: 'opportunity_comments.create_uid',
      updatedUid: 'opportunity_comments.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where('1=1');
    // multiSearch(
    //   qb,
    //   ['opportunity_comments.subject', 'opportunity_comments.note'],
    //   search.search,
    // );
    qb.where("opportunity_comments.isactived='0' and opportunity_comments.mid='"+search.mid+"'");
    qb.orderBy('opportunity_comments.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getOpportunityComments(search: OpportunityCommentsSearchVo) {
    const qb = getRepository(OpportunityComments).createQueryBuilder(
      'opportunity_comments',
    );
    const fields: Record<string, string> = {
      id: 'opportunity_comments.id',
      mid: 'opportunity_comments.mid',
      name: 'opportunity_comments.name',
      description: 'opportunity_comments.description',    
      subject: 'opportunity_comments.subject',
      assignTo: 'opportunity_comments.assign_to',
      note: 'opportunity_comments.note',
      createdAt: 'opportunity_comments.created_at',
      updatedAt: 'opportunity_comments.updated_at',
      isactived: 'opportunity_comments.isactived',
      islocked: 'opportunity_comments.islocked',
      createUid: 'opportunity_comments.create_uid',
      updatedUid: 'opportunity_comments.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("opportunity_comments.isactived='0'");
    ///andWhereEqual(qb, 'opportunity_comments', 'subject', search.fundType);

    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'opportunity_comments', 'mid', search.mid);
    }

    multiSearch(
      qb,
      ['opportunity_comments.subject', 'opportunity_comments.note'],
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
