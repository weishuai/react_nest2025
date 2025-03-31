"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const accounting_voucher_1 = require("../myentities/accounting_voucher");
class AccountingVoucherRepo {
    async create(accountingVoucherVo) {
        return await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).insert(accountingVoucherVo);
    }
    async update(Id, user_id, accountingVoucherVo) {
        accountingVoucherVo.updatedAt = new Date();
        accountingVoucherVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).update(Id, accountingVoucherVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).update(Ids[0], {
            isactived: '1',
        });
    }
    async getAccountingVouchersById(id) {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).createQueryBuilder('accounting_voucher');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'accounting_voucher', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getAccountingVoucherAll() {
        const qb = (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).createQueryBuilder('accounting_voucher');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("accounting_voucher.isactived='0'");
        qb.orderBy('accounting_voucher.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getAccountingVoucherAllView() {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).createQueryBuilder('accounting_voucher');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('accounting_voucher.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getAccountingVoucherList(search) {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_1.AccountingVoucher).createQueryBuilder('accounting_voucher');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("accounting_voucher.isactived='0'");
        qb.orderBy('accounting_voucher.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.AccountingVoucherRepo = AccountingVoucherRepo;
//# sourceMappingURL=accounting_voucher_repo.js.map