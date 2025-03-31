"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePaymentRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class InvoicePaymentRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateInvoicePaymentVoByMid(mid, id) {
        const listItems = this.getInvoicePaymentAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getInvoicePaymentAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).createQueryBuilder('invoice_payment');
        const fields = {
            id: 'invoice_payment.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_payment', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getInvoicePaymentsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).createQueryBuilder('invoice_payment');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_payment', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getinvoicePaymentAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).createQueryBuilder('invoice_payment');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("invoice_payment.isactived='0' and invoice_payment.mid='" + search.mid + "'");
        qb.orderBy('invoice_payment.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getinvoicePaymentAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).createQueryBuilder('invoice_payment');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getinvoicePayment(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoicePayment).createQueryBuilder('invoice_payment');
        const fields = {
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
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("invoice_payment.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['invoice_payment.invoice_id', 'invoice_payment.remark'], search.search);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'invoice_payment', 'mid', search.mid);
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.InvoicePaymentRepo = InvoicePaymentRepo;
//# sourceMappingURL=InvoicePaymentRepo.js.map