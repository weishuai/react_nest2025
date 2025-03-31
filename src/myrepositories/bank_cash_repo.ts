import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { BankCashSearchVo, BankCashVo } from '../myvo/bank_cash_vo';
import { BankCash } from '../myentities/bank_cash';

export class BankCashRepo {
  async create(bankCashVo: BankCashVo) {
    return await getRepository(BankCash).insert(bankCashVo);
  }
  async update(Id: string, user_id: string, bankCashVo: BankCashVo) {
    bankCashVo.updatedAt = new Date();
    bankCashVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(BankCash).update(Id, bankCashVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(BankCash).update(Ids[0], {
      isactived: '1',
    });
  }
  async getBankCashsById(id: string) {
    const qb = await getRepository(BankCash).createQueryBuilder(
      'bank_cash',
    );
    const fields: Record<string, string> = {
      id: 'bank_cash.id',
      name: 'bank_cash.name',
      report: 'bank_cash.report', 
      fhdate: 'bank_cash.fhdate', 
      lable: 'bank_cash.lable', 
      refer: 'bank_cash.refer', 
      partners: 'bank_cash.partners', 
      amountMoney: 'bank_cash.amount_money', 
      serialNumber: 'bank_cash.serial_number', 
      notes: 'bank_cash.notes', 
      type: 'bank_cash.type', 
      accountingVoucher: 'bank_cash.accounting_voucher', 

      description: 'bank_cash.description',
      createdAt: 'bank_cash.created_at',
      updatedAt: 'bank_cash.updated_at',
      isactived: 'bank_cash.isactived',
      islocked: 'bank_cash.islocked',
      createUid: 'bank_cash.create_uid',
      updatedUid: 'bank_cash.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'bank_cash', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getBankCashAll() {
    const qb = getRepository(BankCash).createQueryBuilder('bank_cash');
    const fields: Record<string, string> = {
      id: 'bank_cash.id',
      name: 'bank_cash.name',
      description: 'bank_cash.description',
      report: 'bank_cash.report', 
      fhdate: 'bank_cash.fhdate', 
      lable: 'bank_cash.lable', 
      refer: 'bank_cash.refer', 
      partners: 'bank_cash.partners', 
      amountMoney: 'bank_cash.amount_money', 
      serialNumber: 'bank_cash.serial_number', 
      notes: 'bank_cash.notes', 
      type: 'bank_cash.type', 
      accountingVoucher: 'bank_cash.accounting_voucher', 

      createdAt: 'bank_cash.created_at',
      updatedAt: 'bank_cash.updated_at',
      isactived: 'bank_cash.isactived',
      islocked: 'bank_cash.islocked',
      createUid: 'bank_cash.create_uid',
      updatedUid: 'bank_cash.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("bank_cash.isactived='0'");
    qb.orderBy('bank_cash.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getBankCashAllView() {
    const qb = await getRepository(BankCash).createQueryBuilder(
      'bank_cash',
    );
    const fields: Record<string, string> = {
      id: 'bank_cash.id',
      name: 'bank_cash.name',
      description: 'bank_cash.description',
      report: 'bank_cash.report', 
      fhdate: 'bank_cash.fhdate', 
      lable: 'bank_cash.lable', 
      refer: 'bank_cash.refer', 
      partners: 'bank_cash.partners', 
      amountMoney: 'bank_cash.amount_money', 
      serialNumber: 'bank_cash.serial_number', 
      notes: 'bank_cash.notes', 
      type: 'bank_cash.type', 
      accountingVoucher: 'bank_cash.accounting_voucher', 

      createdAt: 'bank_cash.created_at',
      updatedAt: 'bank_cash.updated_at',
      isactived: 'bank_cash.isactived',
      islocked: 'bank_cash.islocked',
      createUid: 'bank_cash.create_uid',
      updatedUid: 'bank_cash.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('bank_cash.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getBankCashList(search: BankCashSearchVo) {
    const qb = await getRepository(BankCash).createQueryBuilder(
      'bank_cash',
    );
    const fields: Record<string, string> = {
      id: 'bank_cash.id',
      name: 'bank_cash.name',
      description: 'bank_cash.description',
      report: 'bank_cash.report', 
      fhdate: 'bank_cash.fhdate', 
      lable: 'bank_cash.lable', 
      refer: 'bank_cash.refer', 
      partners: 'bank_cash.partners', 
      amountMoney: 'bank_cash.amount_money', 
      serialNumber: 'bank_cash.serial_number', 
      notes: 'bank_cash.notes', 
      type: 'bank_cash.type', 
      accountingVoucher: 'bank_cash.accounting_voucher', 

      createdAt: 'bank_cash.created_at',
      updatedAt: 'bank_cash.updated_at',
      isactived: 'bank_cash.isactived',
      islocked: 'bank_cash.islocked',
      createUid: 'bank_cash.create_uid',
      updatedUid: 'bank_cash.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("bank_cash.isactived='0'");
    /*
    multiSearch(
      qb,
      ['bank_cash.name', 'bank_cash.description'],
      search.search,
    );
     */
    qb.orderBy('bank_cash.created_at', 'DESC');
    //qb.addOrderBy('bank_cash.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
