"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingVoucherListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const accounting_voucher_list_1 = require("../myentities/accounting_voucher_list");
class AccountingVoucherListRepo {
    async create(accountingVoucherListVo) {
        return await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).insert(accountingVoucherListVo);
    }
    async update(Id, user_id, accountingVoucherListVo) {
        accountingVoucherListVo.updatedAt = new Date();
        accountingVoucherListVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).update(Id, accountingVoucherListVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getAccountingVoucherListsById(id) {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).createQueryBuilder('accounting_voucher_list');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'accounting_voucher_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getAccountingVoucherListAll() {
        const qb = (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).createQueryBuilder('accounting_voucher_list');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("accounting_voucher_list.isactived='0'");
        qb.orderBy('accounting_voucher_list.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getAccountingVoucherListAllView() {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).createQueryBuilder('accounting_voucher_list');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('accounting_voucher_list.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getAccountingVoucherListList(search) {
        const qb = await (0, typeorm_1.getRepository)(accounting_voucher_list_1.AccountingVoucherList).createQueryBuilder('accounting_voucher_list');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("accounting_voucher_list.isactived='0'");
        qb.orderBy('accounting_voucher_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.AccountingVoucherListRepo = AccountingVoucherListRepo;
//# sourceMappingURL=accounting_voucher_list_repo.js.map