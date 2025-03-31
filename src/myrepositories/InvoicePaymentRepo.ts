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
  InvoicePaymentSearchVo,
  InvoicePaymentVo,
} from '../myvo/InvoicePaymentVo';
import { InvoicePayment } from '../myentities';

export class InvoicePaymentRepo {
  async create(accountTagVo: InvoicePaymentVo) {
    return await getRepository(InvoicePayment).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: InvoicePaymentVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(InvoicePayment).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(InvoicePayment).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateInvoicePaymentVoByMid(mid: string, id: string) {
    const listItems = this.getInvoicePaymentAllByMid(mid);
    (await listItems).map((Item) => {
      getRepository(InvoicePayment).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getInvoicePaymentAllByMid(mid: string) {
    const qb =
      getRepository(InvoicePayment).createQueryBuilder('invoice_payment');
    const fields: Record<string, string> = {
      id: 'invoice_payment.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'invoice_payment', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getInvoicePaymentsById(id: string) {
    const qb =
      getRepository(InvoicePayment).createQueryBuilder('invoice_payment');
    const fields: Record<string, string> = {
      id: 'invoice_payment.id',
      name: 'invoice_payment.name',
      photo: 'invoice_payment.photo',
      mid: 'invoice_payment.mid',
      invoiceId: 'invoice_payment.invoice_id',
      date: 'invoice_payment.date',
      method: 'invoice_payment.method',
      refNo: 'invoice_payment.ref_no',
      paymentAmount: 'invoice_payment.payment_amount',
      remark: 'invoice_payment.remark',
      createdAt: 'invoice_payment.created_at',
      updatedAt: 'invoice_payment.updated_at',
      isactived: 'invoice_payment.isactived',
      islocked: 'invoice_payment.islocked',
      createUid: 'invoice_payment.create_uid',
      updatedUid: 'invoice_payment.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'invoice_payment', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getinvoicePaymentAll(search: InvoicePaymentSearchVo) {
    const qb =
      getRepository(InvoicePayment).createQueryBuilder('invoice_payment');
    const fields: Record<string, string> = {
      id: 'invoice_payment.id',
      name: 'invoice_payment.name',
      photo: 'invoice_payment.photo',
      mid: 'invoice_payment.mid',
      invoiceId: 'invoice_payment.invoice_id',
      date: 'invoice_payment.date',
      method: 'invoice_payment.method',
      refNo: 'invoice_payment.ref_no',
      paymentAmount: 'invoice_payment.payment_amount',
      remark: 'invoice_payment.remark',
      createdAt: 'invoice_payment.created_at',
      updatedAt: 'invoice_payment.updated_at',
      isactived: 'invoice_payment.isactived',
      islocked: 'invoice_payment.islocked',
      createUid: 'invoice_payment.create_uid',
      updatedUid: 'invoice_payment.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where("invoice_payment.isactived='0'");
    qb.where("invoice_payment.isactived='0' and invoice_payment.mid='"+search.mid+"'");
    // multiSearch(
    //   qb,
    //   ['invoice_payment.invoice_id', 'invoice_payment.remark'],
    //   search.search,
    // );
    qb.orderBy('invoice_payment.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getinvoicePaymentAllView() {
    const qb =
      getRepository(InvoicePayment).createQueryBuilder('invoice_payment');
    const fields: Record<string, string> = {
      id: 'invoice_payment.id',
      name: 'invoice_payment.name',
      photo: 'invoice_payment.photo',
      mid: 'invoice_payment.mid',
      invoiceId: 'invoice_payment.invoice_id',
      date: 'invoice_payment.date',
      method: 'invoice_payment.method',
      refNo: 'invoice_payment.ref_no',
      paymentAmount: 'invoice_payment.payment_amount',
      remark: 'invoice_payment.remark',
      createdAt: 'invoice_payment.created_at',
      updatedAt: 'invoice_payment.updated_at',
      isactived: 'invoice_payment.isactived',
      islocked: 'invoice_payment.islocked',
      createUid: 'invoice_payment.create_uid',
      updatedUid: 'invoice_payment.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getinvoicePayment(search: InvoicePaymentSearchVo) {
    const qb =
      getRepository(InvoicePayment).createQueryBuilder('invoice_payment');
    const fields: Record<string, string> = {
      id: 'invoice_payment.id',
      name: 'invoice_payment.name',
      mid: 'invoice_payment.mid',
      photo: 'invoice_payment.photo',
      invoiceId: 'invoice_payment.invoice_id',
      date: 'invoice_payment.date',
      method: 'invoice_payment.method',
      refNo: 'invoice_payment.ref_no',
      paymentAmount: 'invoice_payment.payment_amount',
      remark: 'invoice_payment.remark',
      createdAt: 'invoice_payment.created_at',
      updatedAt: 'invoice_payment.updated_at',
      isactived: 'invoice_payment.isactived',
      islocked: 'invoice_payment.islocked',
      createUid: 'invoice_payment.create_uid',
      updatedUid: 'invoice_payment.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("invoice_payment.isactived='0'");
    ///andWhereEqual(qb, 'invoice_payment', 'satus', search.fundType);
    multiSearch(
      qb,
      ['invoice_payment.invoice_id', 'invoice_payment.remark'],
      search.search,
    );
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'invoice_payment', 'mid', search.mid);
    }

    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
