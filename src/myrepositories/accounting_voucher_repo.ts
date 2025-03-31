import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { AccountingVoucherSearchVo, AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
import { AccountingVoucher } from '../myentities/accounting_voucher';

export class AccountingVoucherRepo {
  async create(accountingVoucherVo: AccountingVoucherVo) {
    return await getRepository(AccountingVoucher).insert(accountingVoucherVo);
  }
  async update(Id: string, user_id: string, accountingVoucherVo: AccountingVoucherVo) {
    accountingVoucherVo.updatedAt = new Date();
    accountingVoucherVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(AccountingVoucher).update(Id, accountingVoucherVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(AccountingVoucher).update(Ids[0], {
      isactived: '1',
    });
  }
  async getAccountingVouchersById(id: string) {
    const qb = await getRepository(AccountingVoucher).createQueryBuilder(
      'accounting_voucher',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher.id',
      name: 'accounting_voucher.name',
      title: 'accounting_voucher.title', 
      accountNumber: 'accounting_voucher.account_number', 
      type: 'accounting_voucher.type', 
      billReference: 'accounting_voucher.bill_reference', 
      statementDate: 'accounting_voucher.statement_date', 
      accountingDate: 'accounting_voucher.accounting_date', 
      paymentReference: 'accounting_voucher.payment_reference', 
      payeeBank: 'accounting_voucher.payee_bank', 
      paymentTerms: 'accounting_voucher.payment_terms', 
      journal: 'accounting_voucher.journal', 

      description: 'accounting_voucher.description',
      createdAt: 'accounting_voucher.created_at',
      updatedAt: 'accounting_voucher.updated_at',
      isactived: 'accounting_voucher.isactived',
      islocked: 'accounting_voucher.islocked',
      createUid: 'accounting_voucher.create_uid',
      updatedUid: 'accounting_voucher.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'accounting_voucher', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getAccountingVoucherAll() {
    const qb = getRepository(AccountingVoucher).createQueryBuilder('accounting_voucher');
    const fields: Record<string, string> = {
      id: 'accounting_voucher.id',
      name: 'accounting_voucher.name',
      description: 'accounting_voucher.description',
      title: 'accounting_voucher.title', 
      accountNumber: 'accounting_voucher.account_number', 
      type: 'accounting_voucher.type', 
      billReference: 'accounting_voucher.bill_reference', 
      statementDate: 'accounting_voucher.statement_date', 
      accountingDate: 'accounting_voucher.accounting_date', 
      paymentReference: 'accounting_voucher.payment_reference', 
      payeeBank: 'accounting_voucher.payee_bank', 
      paymentTerms: 'accounting_voucher.payment_terms', 
      journal: 'accounting_voucher.journal', 

      createdAt: 'accounting_voucher.created_at',
      updatedAt: 'accounting_voucher.updated_at',
      isactived: 'accounting_voucher.isactived',
      islocked: 'accounting_voucher.islocked',
      createUid: 'accounting_voucher.create_uid',
      updatedUid: 'accounting_voucher.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("accounting_voucher.isactived='0'");
    qb.orderBy('accounting_voucher.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getAccountingVoucherAllView() {
    const qb = await getRepository(AccountingVoucher).createQueryBuilder(
      'accounting_voucher',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher.id',
      name: 'accounting_voucher.name',
      description: 'accounting_voucher.description',
      title: 'accounting_voucher.title', 
      accountNumber: 'accounting_voucher.account_number', 
      type: 'accounting_voucher.type', 
      billReference: 'accounting_voucher.bill_reference', 
      statementDate: 'accounting_voucher.statement_date', 
      accountingDate: 'accounting_voucher.accounting_date', 
      paymentReference: 'accounting_voucher.payment_reference', 
      payeeBank: 'accounting_voucher.payee_bank', 
      paymentTerms: 'accounting_voucher.payment_terms', 
      journal: 'accounting_voucher.journal', 

      createdAt: 'accounting_voucher.created_at',
      updatedAt: 'accounting_voucher.updated_at',
      isactived: 'accounting_voucher.isactived',
      islocked: 'accounting_voucher.islocked',
      createUid: 'accounting_voucher.create_uid',
      updatedUid: 'accounting_voucher.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('accounting_voucher.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getAccountingVoucherList(search: AccountingVoucherSearchVo) {
    const qb = await getRepository(AccountingVoucher).createQueryBuilder(
      'accounting_voucher',
    );
    const fields: Record<string, string> = {
      id: 'accounting_voucher.id',
      name: 'accounting_voucher.name',
      description: 'accounting_voucher.description',
      title: 'accounting_voucher.title', 
      accountNumber: 'accounting_voucher.account_number', 
      type: 'accounting_voucher.type', 
      billReference: 'accounting_voucher.bill_reference', 
      statementDate: 'accounting_voucher.statement_date', 
      accountingDate: 'accounting_voucher.accounting_date', 
      paymentReference: 'accounting_voucher.payment_reference', 
      payeeBank: 'accounting_voucher.payee_bank', 
      paymentTerms: 'accounting_voucher.payment_terms', 
      journal: 'accounting_voucher.journal', 

      createdAt: 'accounting_voucher.created_at',
      updatedAt: 'accounting_voucher.updated_at',
      isactived: 'accounting_voucher.isactived',
      islocked: 'accounting_voucher.islocked',
      createUid: 'accounting_voucher.create_uid',
      updatedUid: 'accounting_voucher.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("accounting_voucher.isactived='0'");
    /*
    multiSearch(
      qb,
      ['accounting_voucher.name', 'accounting_voucher.description'],
      search.search,
    );
     */
    qb.orderBy('accounting_voucher.created_at', 'DESC');
    //qb.addOrderBy('accounting_voucher.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
