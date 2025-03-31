"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDetailsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
const User_1 = require("../myentities/User");
class InvoiceDetailsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).update(Ids[0], {
            isactived: '1',
        });
    }
    async getinvoiceDetailsAllBydueDate() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        const fields = {
            id: 'invoice_details.id',
            dueDate: 'invoice_details.due_date',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getinvoiceDetailssById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        const fields = {
            id: 'invoice_details.id',
            linkedUotation: 'invoice_details.linked_uotation',
            invoiceNumber: 'invoice_details.invoice_number',
            invoiceStatus: 'invoice_details.invoice_status',
            invoiceName: 'invoice_details.invoice_name',
            account: 'invoice_details.account',
            salesPerson: 'invoice_details.sales_person',
            clientContact: 'invoice_details.client_contact',
            currency: 'invoice_details.currency',
            invoiceDate: 'invoice_details.invoice_date',
            dueDate: 'invoice_details.due_date',
            techName: 'invoice_details.tech_name',
            trackingNo: 'invoice_details.tracking_no',
            additionalField3: 'invoice_details.additional_field3',
            additionalField4: 'invoice_details.additional_field4',
            remark: 'invoice_details.remark',
            clientNumber: 'invoice_details.client_number',
            createdAt: 'invoice_details.created_at',
            updatedAt: 'invoice_details.updated_at',
            isactived: 'invoice_details.isactived',
            islocked: 'invoice_details.islocked',
            createUid: 'invoice_details.create_uid',
            updatedUid: 'invoice_details.updated_uid',
            tax: 'invoice_details.tax',
            overDate: 'invoice_details.over_date',
            isAlert: 'invoice_details.is_alert',
            totalAmount: 'invoice_details.total_amount',
            paidAmount: 'invoice_details.paid_amount',
            outstandingAmount: 'invoice_details.outstanding_amount',
            refNumber: 'invoice_details.ref_number',
            clientPoNumber: 'invoice_details.client_po_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_details', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getInvoiceDetailsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        const fields = {
            id: 'invoice_details.id',
            linkedUotation: 'invoice_details.linked_uotation',
            invoiceNumber: 'invoice_details.invoice_number',
            invoiceStatus: 'invoice_details.invoice_status',
            invoiceName: 'invoice_details.invoice_name',
            account: 'invoice_details.account',
            salesPerson: 'invoice_details.sales_person',
            clientContact: 'invoice_details.client_contact',
            currency: 'invoice_details.currency',
            invoiceDate: 'invoice_details.invoice_date',
            dueDate: 'invoice_details.due_date',
            techName: 'invoice_details.tech_name',
            trackingNo: 'invoice_details.tracking_no',
            additionalField3: 'invoice_details.additional_field3',
            additionalField4: 'invoice_details.additional_field4',
            remark: 'invoice_details.remark',
            clientNumber: 'invoice_details.client_number',
            createdAt: 'invoice_details.created_at',
            updatedAt: 'invoice_details.updated_at',
            isactived: 'invoice_details.isactived',
            islocked: 'invoice_details.islocked',
            createUid: 'invoice_details.create_uid',
            updatedUid: 'invoice_details.updated_uid',
            tax: 'invoice_details.tax',
            overDate: 'invoice_details.over_date',
            isAlert: 'invoice_details.is_alert',
            totalAmount: 'invoice_details.total_amount',
            paidAmount: 'invoice_details.paid_amount',
            outstandingAmount: 'invoice_details.outstanding_amount',
            refNumber: 'invoice_details.ref_number',
            clientPoNumber: 'invoice_details.client_po_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_details', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getinvoiceDetailsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        qb.leftJoin(User_1.User, 'user', 'invoice_details.client_contact=user.id');
        qb.leftJoin(User_1.User, 'user2', 'invoice_details.sales_person=user2.id');
        const fields = {
            id: 'invoice_details.id',
            linkedUotation: 'invoice_details.linked_uotation',
            invoiceNumber: 'invoice_details.invoice_number',
            invoiceStatus: 'invoice_details.invoice_status',
            invoiceName: 'invoice_details.invoice_name',
            account: 'invoice_details.account',
            salesPerson: 'user2.userName',
            clientContact: 'user.userName',
            currency: 'invoice_details.currency',
            invoiceDate: 'invoice_details.invoice_date',
            dueDate: 'invoice_details.due_date',
            techName: 'invoice_details.tech_name',
            trackingNo: 'invoice_details.tracking_no',
            additionalField3: 'invoice_details.additional_field3',
            additionalField4: 'invoice_details.additional_field4',
            remark: 'invoice_details.remark',
            clientNumber: 'invoice_details.client_number',
            createdAt: 'invoice_details.created_at',
            updatedAt: 'invoice_details.updated_at',
            isactived: 'invoice_details.isactived',
            islocked: 'invoice_details.islocked',
            createUid: 'invoice_details.create_uid',
            updatedUid: 'invoice_details.updated_uid',
            tax: 'invoice_details.tax',
            overDate: 'invoice_details.over_date',
            isAlert: 'invoice_details.is_alert',
            totalAmount: 'invoice_details.total_amount',
            paidAmount: 'invoice_details.paid_amount',
            outstandingAmount: 'invoice_details.outstanding_amount',
            refNumber: 'invoice_details.ref_number',
            clientPoNumber: 'invoice_details.client_po_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("invoice_details.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['invoice_details.account', 'invoice_details.remark'], search.search);
        qb.orderBy('invoice_details.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getinvoiceDetailsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        const fields = {
            id: 'invoice_details.id',
            linkedUotation: 'invoice_details.linked_uotation',
            invoiceNumber: 'invoice_details.invoice_number',
            invoiceStatus: 'invoice_details.invoice_status',
            invoiceName: 'invoice_details.invoice_name',
            account: 'invoice_details.account',
            salesPerson: 'invoice_details.sales_person',
            clientContact: 'invoice_details.client_contact',
            currency: 'invoice_details.currency',
            invoiceDate: 'invoice_details.invoice_date',
            dueDate: 'invoice_details.due_date',
            techName: 'invoice_details.tech_name',
            trackingNo: 'invoice_details.tracking_no',
            additionalField3: 'invoice_details.additional_field3',
            additionalField4: 'invoice_details.additional_field4',
            remark: 'invoice_details.remark',
            clientNumber: 'invoice_details.client_number',
            createdAt: 'invoice_details.created_at',
            updatedAt: 'invoice_details.updated_at',
            isactived: 'invoice_details.isactived',
            islocked: 'invoice_details.islocked',
            createUid: 'invoice_details.create_uid',
            updatedUid: 'invoice_details.updated_uid',
            tax: 'invoice_details.tax',
            overDate: 'invoice_details.over_date',
            isAlert: 'invoice_details.is_alert',
            totalAmount: 'invoice_details.total_amount',
            paidAmount: 'invoice_details.paid_amount',
            outstandingAmount: 'invoice_details.outstanding_amount',
            refNumber: 'invoice_details.ref_number',
            clientPoNumber: 'invoice_details.client_po_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { "fhok": res };
    }
    async getinvoiceDetails(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceDetails).createQueryBuilder('invoice_details');
        const fields = {
            id: 'invoice_details.id',
            linkedUotation: 'invoice_details.linked_uotation',
            invoiceNumber: 'invoice_details.invoice_number',
            invoiceStatus: 'invoice_details.invoice_status',
            invoiceName: 'invoice_details.invoice_name',
            account: 'invoice_details.account',
            salesPerson: 'invoice_details.sales_person',
            clientContact: 'invoice_details.client_contact',
            currency: 'invoice_details.currency',
            invoiceDate: 'invoice_details.invoice_date',
            dueDate: 'invoice_details.due_date',
            techName: 'invoice_details.tech_name',
            trackingNo: 'invoice_details.tracking_no',
            additionalField3: 'invoice_details.additional_field3',
            additionalField4: 'invoice_details.additional_field4',
            remark: 'invoice_details.remark',
            clientNumber: 'invoice_details.client_number',
            createdAt: 'invoice_details.created_at',
            updatedAt: 'invoice_details.updated_at',
            isactived: 'invoice_details.isactived',
            islocked: 'invoice_details.islocked',
            createUid: 'invoice_details.create_uid',
            updatedUid: 'invoice_details.updated_uid',
            tax: 'invoice_details.tax',
            overDate: 'invoice_details.over_date',
            isAlert: 'invoice_details.is_alert',
            totalAmount: 'invoice_details.total_amount',
            paidAmount: 'invoice_details.paid_amount',
            outstandingAmount: 'invoice_details.outstanding_amount',
            refNumber: 'invoice_details.ref_number',
            clientPoNumber: 'invoice_details.client_po_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            if (search.mtable == 'client') {
                (0, my_utils_1.andWhereEqual)(qb, 'invoice_details', 'account', search.mid);
            }
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.InvoiceDetailsRepo = InvoiceDetailsRepo;
//# sourceMappingURL=InvoiceDetailsRepo.js.map