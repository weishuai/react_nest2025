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
  PurchaseOrderSearchVo,
  PurchaseOrderVo,
} from '../myvo/PurchaseOrderVo';
import { PurchaseOrder } from '../myentities';
import { User } from '../myentities/User';
import { Currency } from '../myentities/Currency';
import { Taxes } from '../myentities/Taxes';
export class PurchaseOrderRepo {
  async create(accountTagVo: PurchaseOrderVo) {
    return await getRepository(PurchaseOrder).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: PurchaseOrderVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(PurchaseOrder).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(PurchaseOrder).update(Ids[0], {
      isactived: '1',
    });
  }

  async getpurchaseOrdersById(id: string) {
    const qb =
      getRepository(PurchaseOrder).createQueryBuilder('purchase_order');
    const fields: Record<string, string> = {
      id: 'purchase_order.id',
      name: 'purchase_order.name',
      currency: 'purchase_order.currency',
      contact: 'purchase_order.contact',
      paymentTerms: 'purchase_order.payment_terms',
      taxes: 'purchase_order.taxes',
      remark: 'purchase_order.remark',
      createdAt: 'purchase_order.created_at',
      updatedAt: 'purchase_order.updated_at',
      isactived: 'purchase_order.isactived',
      islocked: 'purchase_order.islocked',
      createUid: 'purchase_order.create_uid',
      updatedUid: 'purchase_order.updated_uid',
      refNumber: 'purchase_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'purchase_order', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getpurchaseOrderAll(search: PurchaseOrderSearchVo) {
    const qb =
      getRepository(PurchaseOrder).createQueryBuilder('purchase_order');

      qb.leftJoin(User, 'user', 'purchase_order.contact=user.id');
      qb.leftJoin(Currency, 'currency', 'purchase_order.currency=currency.id');
      qb.leftJoin(Taxes, 'taxes', 'purchase_order.taxes=taxes.id');
    const fields: Record<string, string> = {
      id: 'purchase_order.id',
      name: 'purchase_order.name',
      currency: 'currency.name',
      contact: 'user.userName',
      paymentTerms: 'purchase_order.payment_terms',
      taxes: 'taxes.name',
      remark: 'purchase_order.remark',
      createdAt: 'purchase_order.created_at',
      updatedAt: 'purchase_order.updated_at',
      isactived: 'purchase_order.isactived',
      islocked: 'purchase_order.islocked',
      createUid: 'purchase_order.create_uid',
      updatedUid: 'purchase_order.updated_uid',
      refNumber: 'purchase_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where("purchase_order.isactived='0'");
    multiSearch(
      qb,
      ['purchase_order.name', 'purchase_order.remark'],
      search.search,
    );
    qb.distinct(true);
    qb.orderBy('purchase_order.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getpurchaseOrderAllView() {
    const qb =
      getRepository(PurchaseOrder).createQueryBuilder('purchase_order');
    const fields: Record<string, string> = {
      id: 'purchase_order.id',
      name: 'purchase_order.name',
      currency: 'purchase_order.currency',
      contact: 'purchase_order.contact',
      paymentTerms: 'purchase_order.payment_terms',
      taxes: 'purchase_order.taxes',
      remark: 'purchase_order.remark',
      createdAt: 'purchase_order.created_at',
      updatedAt: 'purchase_order.updated_at',
      isactived: 'purchase_order.isactived',
      islocked: 'purchase_order.islocked',
      createUid: 'purchase_order.create_uid',
      updatedUid: 'purchase_order.updated_uid',
      refNumber: 'purchase_order.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.distinct(true);
    const res = await qb.getRawMany();
    return res;
  }

  async getpurchaseOrder(userId: string, search: PurchaseOrderSearchVo) {
    const qb =
      getRepository(PurchaseOrder).createQueryBuilder('purchase_order');
    const fields: Record<string, string> = {
      id: 'purchase_order.id',
      name: 'purchase_order.name',
      currency: 'purchase_order.currency',
      contact: 'purchase_order.contact',
      paymentTerms: 'purchase_order.payment_terms',
      taxes: 'purchase_order.taxes',
      remark: 'purchase_order.remark',
      createdAt: 'purchase_order.created_at',
      updatedAt: 'purchase_order.updated_at',
      isactived: 'purchase_order.isactived',
      islocked: 'purchase_order.islocked',
      createUid: 'purchase_order.create_uid',
      updatedUid: 'purchase_order.updated_uid',
      refNumber: 'purchase_order.ref_number',
    };

    selectFields(qb, fields);
    ///qb.where("purchase_order.isactived='0'");
    const userIds = userId;
    qb.where(
      "purchase_order.isactived='0' and (purchase_order.create_uid = '" +
        userIds +
        "' or purchase_order.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );
    qb.distinct(true);

    andWhereEqual(qb, 'purchase_order', 'satus', search.fundType);
    multiSearch(
      qb,
      ['purchase_order.name', 'purchase_order.remark'],
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
