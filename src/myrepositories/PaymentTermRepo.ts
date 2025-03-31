import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';
import { PaymentTerm } from '../myentities';

export class PaymentTermRepo {
  async create(accountTagVo: PaymentTermVo) {
    return await getRepository(PaymentTerm).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: PaymentTermVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(PaymentTerm).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(PaymentTerm).update(Ids[0], {
      isactived: '1',
    });
  }

  async getPaymentTermsById(id: string) {
    const qb = getRepository(PaymentTerm).createQueryBuilder('payment_term');
    const fields: Record<string, string> = {
      id: 'payment_term.id',
      name: 'payment_term.name',
      description: 'payment_term.description',
      createdAt: 'payment_term.created_at',
      updatedAt: 'payment_term.updated_at',
      isactived: 'payment_term.isactived',
      islocked: 'payment_term.islocked',
      createUid: 'payment_term.create_uid',
      updatedUid: 'payment_term.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'payment_term', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getPaymentTermAll(search: PaymentTermSearchVo) {
    const qb = getRepository(PaymentTerm).createQueryBuilder('payment_term');
    const fields: Record<string, string> = {
      id: 'payment_term.id',
      name: 'payment_term.name',
      description: 'payment_term.description',
      createdAt: 'payment_term.created_at',
      updatedAt: 'payment_term.updated_at',
      isactived: 'payment_term.isactived',
      islocked: 'payment_term.islocked',
      createUid: 'payment_term.create_uid',
      updatedUid: 'payment_term.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("payment_term.isactived='0'");
    multiSearch(
      qb,
      ['payment_term.name', 'payment_term.description'],
      search.search,
    );
    qb.orderBy('payment_term.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getPaymentTermAllView() {
    const qb = getRepository(PaymentTerm).createQueryBuilder('payment_term');
    const fields: Record<string, string> = {
      id: 'payment_term.id',
      name: 'payment_term.name',
      description: 'payment_term.description',
      createdAt: 'payment_term.created_at',
      updatedAt: 'payment_term.updated_at',
      isactived: 'payment_term.isactived',
      islocked: 'payment_term.islocked',
      createUid: 'payment_term.create_uid',
      updatedUid: 'payment_term.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getPaymentTerm(search: PaymentTermSearchVo) {
    const qb = getRepository(PaymentTerm).createQueryBuilder('payment_term');
    const fields: Record<string, string> = {
      id: 'payment_term.id',
      name: 'payment_term.name',
      description: 'payment_term.description',
      createdAt: 'payment_term.created_at',
      updatedAt: 'payment_term.updated_at',
      isactived: 'payment_term.isactived',
      islocked: 'payment_term.islocked',
      createUid: 'payment_term.create_uid',
      updatedUid: 'payment_term.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("payment_term.isactived='0'");
    andWhereEqual(qb, 'payment_term', 'name', search.fundType);
    multiSearch(
      qb,
      ['payment_term.name', 'payment_term.description'],
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
