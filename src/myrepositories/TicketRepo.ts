import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';
import { Ticket } from '../myentities';

export class TicketRepo {
  async create(accountTagVo: TicketVo) {
    return await getRepository(Ticket).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TicketVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Ticket).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Ticket).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTicketsById(id: string) {
    const qb = getRepository(Ticket).createQueryBuilder('ticket');
    const fields: Record<string, string> = {
      id: 'ticket.id',
      name: 'ticket.name',
      rate: 'ticket.rate',
      source: 'ticket.source',
      description: 'ticket.description',
      createdAt: 'ticket.created_at',
      updatedAt: 'ticket.updated_at',
      isactived: 'ticket.isactived',
      islocked: 'ticket.islocked',
      createUid: 'ticket.create_uid',
      updatedUid: 'ticket.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'ticket', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTicketAll(search: TicketSearchVo) {
    const qb = getRepository(Ticket).createQueryBuilder('ticket');
    const fields: Record<string, string> = {
      id: 'ticket.id',
      name: 'ticket.name',
      rate: 'ticket.rate',
      source: 'ticket.source',
      description: 'ticket.description',
      createdAt: 'ticket.created_at',
      updatedAt: 'ticket.updated_at',
      isactived: 'ticket.isactived',
      islocked: 'ticket.islocked',
      createUid: 'ticket.create_uid',
      updatedUid: 'ticket.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("ticket.isactived='0'");
    multiSearch(qb, ['ticket.name', 'ticket.description'], search.search);
    qb.orderBy('ticket.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getTicketAllView() {
    const qb = getRepository(Ticket).createQueryBuilder('ticket');
    const fields: Record<string, string> = {
      id: 'ticket.id',
      name: 'ticket.name',
      rate: 'ticket.rate',
      source: 'ticket.source',
      description: 'ticket.description',
      createdAt: 'ticket.created_at',
      updatedAt: 'ticket.updated_at',
      isactived: 'ticket.isactived',
      islocked: 'ticket.islocked',
      createUid: 'ticket.create_uid',
      updatedUid: 'ticket.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getTicket(search: TicketSearchVo) {
    const qb = getRepository(Ticket).createQueryBuilder('ticket');
    const fields: Record<string, string> = {
      id: 'ticket.id',
      name: 'ticket.name',
      rate: 'ticket.rate',
      source: 'ticket.source',
      description: 'ticket.description',
      createdAt: 'ticket.created_at',
      updatedAt: 'ticket.updated_at',
      isactived: 'ticket.isactived',
      islocked: 'ticket.islocked',
      createUid: 'ticket.create_uid',
      updatedUid: 'ticket.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("ticket.isactived='0'");
    andWhereEqual(qb, 'ticket', 'name', search.fundType);
    multiSearch(qb, ['ticket.name', 'ticket.description'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
