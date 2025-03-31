import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { AccountingVoucherListSearchVo, AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
import { AccountingVoucherList } from '../myentities/accounting_voucher_list';

export class AccountingVoucherListRepo {
  async create(accountingVoucherListVo: AccountingVoucherListVo) {
    return await getRepository(AccountingVoucherList).insert(accountingVoucherListVo);
  }
  async update(Id: string, user_id: string, accountingVoucherListVo: AccountingVoucherListVo) {
    accountingVoucherListVo.updatedAt = new Date();
    accountingVoucherListVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(AccountingVoucherList).update(Id, accountingVoucherListVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(AccountingVoucherList).update(Ids[0], {
      isactived: '1',
    });
  }
  async getAccountingVoucherListsById(id: string) {
    const qb = await getRepository(AccountingVoucherList).createQueryBuilder(
      'accounting_voucher_list',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher_list.id',
      name: 'accounting_voucher_list.name',
      mid: 'accounting_voucher_list.mid', 
      product: 'accounting_voucher_list.product', 
      note: 'accounting_voucher_list.note', 
      landedCost: 'accounting_voucher_list.landed_cost', 
      type: 'accounting_voucher_list.type', 
      subject: 'accounting_voucher_list.subject', 
      analysis: 'accounting_voucher_list.analysis', 
      number: 'accounting_voucher_list.number', 
      unit: 'accounting_voucher_list.unit', 
      price: 'accounting_voucher_list.price', 
      tax: 'accounting_voucher_list.tax', 
      subtotal: 'accounting_voucher_list.subtotal', 

      description: 'accounting_voucher_list.description',
      createdAt: 'accounting_voucher_list.created_at',
      updatedAt: 'accounting_voucher_list.updated_at',
      isactived: 'accounting_voucher_list.isactived',
      islocked: 'accounting_voucher_list.islocked',
      createUid: 'accounting_voucher_list.create_uid',
      updatedUid: 'accounting_voucher_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'accounting_voucher_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getAccountingVoucherListAll() {
    const qb = getRepository(AccountingVoucherList).createQueryBuilder('accounting_voucher_list');
    const fields: Record<string, string> = {
      id: 'accounting_voucher_list.id',
      name: 'accounting_voucher_list.name',
      description: 'accounting_voucher_list.description',
      mid: 'accounting_voucher_list.mid', 
      product: 'accounting_voucher_list.product', 
      note: 'accounting_voucher_list.note', 
      landedCost: 'accounting_voucher_list.landed_cost', 
      type: 'accounting_voucher_list.type', 
      subject: 'accounting_voucher_list.subject', 
      analysis: 'accounting_voucher_list.analysis', 
      number: 'accounting_voucher_list.number', 
      unit: 'accounting_voucher_list.unit', 
      price: 'accounting_voucher_list.price', 
      tax: 'accounting_voucher_list.tax', 
      subtotal: 'accounting_voucher_list.subtotal', 

      createdAt: 'accounting_voucher_list.created_at',
      updatedAt: 'accounting_voucher_list.updated_at',
      isactived: 'accounting_voucher_list.isactived',
      islocked: 'accounting_voucher_list.islocked',
      createUid: 'accounting_voucher_list.create_uid',
      updatedUid: 'accounting_voucher_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("accounting_voucher_list.isactived='0'");
    qb.orderBy('accounting_voucher_list.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getAccountingVoucherListAllView() {
    const qb = await getRepository(AccountingVoucherList).createQueryBuilder(
      'accounting_voucher_list',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher_list.id',
      name: 'accounting_voucher_list.name',
      description: 'accounting_voucher_list.description',
      mid: 'accounting_voucher_list.mid', 
      product: 'accounting_voucher_list.product', 
      note: 'accounting_voucher_list.note', 
      landedCost: 'accounting_voucher_list.landed_cost', 
      type: 'accounting_voucher_list.type', 
      subject: 'accounting_voucher_list.subject', 
      analysis: 'accounting_voucher_list.analysis', 
      number: 'accounting_voucher_list.number', 
      unit: 'accounting_voucher_list.unit', 
      price: 'accounting_voucher_list.price', 
      tax: 'accounting_voucher_list.tax', 
      subtotal: 'accounting_voucher_list.subtotal', 

      createdAt: 'accounting_voucher_list.created_at',
      updatedAt: 'accounting_voucher_list.updated_at',
      isactived: 'accounting_voucher_list.isactived',
      islocked: 'accounting_voucher_list.islocked',
      createUid: 'accounting_voucher_list.create_uid',
      updatedUid: 'accounting_voucher_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('accounting_voucher_list.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getAccountingVoucherListList(search: AccountingVoucherListSearchVo) {
    const qb = await getRepository(AccountingVoucherList).createQueryBuilder(
      'accounting_voucher_list',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher_list.id',
      name: 'accounting_voucher_list.name',
      description: 'accounting_voucher_list.description',
      mid: 'accounting_voucher_list.mid', 
      product: 'accounting_voucher_list.product', 
      note: 'accounting_voucher_list.note', 
      landedCost: 'accounting_voucher_list.landed_cost', 
      type: 'accounting_voucher_list.type', 
      subject: 'accounting_voucher_list.subject', 
      analysis: 'accounting_voucher_list.analysis', 
      number: 'accounting_voucher_list.number', 
      unit: 'accounting_voucher_list.unit', 
      price: 'accounting_voucher_list.price', 
      tax: 'accounting_voucher_list.tax', 
      subtotal: 'accounting_voucher_list.subtotal', 

      createdAt: 'accounting_voucher_list.created_at',
      updatedAt: 'accounting_voucher_list.updated_at',
      isactived: 'accounting_voucher_list.isactived',
      islocked: 'accounting_voucher_list.islocked',
      createUid: 'accounting_voucher_list.create_uid',
      updatedUid: 'accounting_voucher_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("accounting_voucher_list.isactived='0'");
    /*
    multiSearch(
      qb,
      ['accounting_voucher_list.name', 'accounting_voucher_list.description'],
      search.search,
    );
     */
    qb.orderBy('accounting_voucher_list.created_at', 'DESC');
    //qb.addOrderBy('accounting_voucher_list.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
