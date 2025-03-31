"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCashRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const bank_cash_1 = require("../myentities/bank_cash");
class BankCashRepo {
    async create(bankCashVo) {
        return await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).insert(bankCashVo);
    }
    async update(Id, user_id, bankCashVo) {
        bankCashVo.updatedAt = new Date();
        bankCashVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).update(Id, bankCashVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).update(Ids[0], {
            isactived: '1',
        });
    }
    async getBankCashsById(id) {
        const qb = await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).createQueryBuilder('bank_cash');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'bank_cash', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getBankCashAll() {
        const qb = (0, typeorm_1.getRepository)(bank_cash_1.BankCash).createQueryBuilder('bank_cash');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("bank_cash.isactived='0'");
        qb.orderBy('bank_cash.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getBankCashAllView() {
        const qb = await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).createQueryBuilder('bank_cash');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('bank_cash.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getBankCashList(search) {
        const qb = await (0, typeorm_1.getRepository)(bank_cash_1.BankCash).createQueryBuilder('bank_cash');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("bank_cash.isactived='0'");
        qb.orderBy('bank_cash.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.BankCashRepo = BankCashRepo;
//# sourceMappingURL=bank_cash_repo.js.map