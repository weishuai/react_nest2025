"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
const myentities_2 = require("../myentities");
const myentities_3 = require("../myentities");
class DeliveryOrderRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).update(Ids[0], {
            isactived: '1',
        });
    }
    async getdeliveryOrdersById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).createQueryBuilder('delivery_order');
        const fields = {
            id: 'delivery_order.id',
            linkedInvoice: 'delivery_order.linked_invoice',
            deliveryName: 'delivery_order.delivery_name',
            clientCompany: 'delivery_order.client_company',
            deliveryDate: 'delivery_order.delivery_date',
            clientContact: 'delivery_order.client_contact',
            creator: 'delivery_order.creator',
            postCode: 'delivery_order.post_code',
            street: 'delivery_order.street',
            city: 'delivery_order.city',
            state: 'delivery_order.state',
            country: 'delivery_order.country',
            termsConditions: 'delivery_order.terms_conditions',
            remark: 'delivery_order.remark',
            createdAt: 'delivery_order.created_at',
            updatedAt: 'delivery_order.updated_at',
            isactived: 'delivery_order.isactived',
            islocked: 'delivery_order.islocked',
            createUid: 'delivery_order.create_uid',
            updatedUid: 'delivery_order.updated_uid',
            refNumber: 'delivery_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'delivery_order', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getdeliveryOrderAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).createQueryBuilder('delivery_order');
        qb.leftJoin(myentities_2.Client, 'client', 'client.id = delivery_order.client_company');
        qb.leftJoin(myentities_3.InvoiceDetails, 'invoice_details', 'invoice_details.id = delivery_order.linked_invoice');
        const fields = {
            id: 'delivery_order.id',
            linkedInvoice: 'client.name',
            deliveryName: 'delivery_order.delivery_name',
            clientCompany: 'invoice_details.invoice_name',
            deliveryDate: 'delivery_order.delivery_date',
            clientContact: 'delivery_order.client_contact',
            creator: 'delivery_order.creator',
            postCode: 'delivery_order.post_code',
            street: 'delivery_order.street',
            city: 'delivery_order.city',
            state: 'delivery_order.state',
            country: 'delivery_order.country',
            termsConditions: 'delivery_order.terms_conditions',
            remark: 'delivery_order.remark',
            createdAt: 'delivery_order.created_at',
            updatedAt: 'delivery_order.updated_at',
            isactived: 'delivery_order.isactived',
            islocked: 'delivery_order.islocked',
            createUid: 'delivery_order.create_uid',
            updatedUid: 'delivery_order.updated_uid',
            refNumber: 'delivery_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("delivery_order.isactived='0'");
        qb.distinct(true);
        (0, my_utils_1.multiSearch)(qb, ['delivery_order.delivery_name', 'delivery_order.remark'], search.search);
        qb.orderBy('delivery_order.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getdeliveryOrderAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).createQueryBuilder('delivery_order');
        const fields = {
            id: 'delivery_order.id',
            linkedInvoice: 'delivery_order.linked_invoice',
            deliveryName: 'delivery_order.delivery_name',
            clientCompany: 'delivery_order.client_company',
            deliveryDate: 'delivery_order.delivery_date',
            clientContact: 'delivery_order.client_contact',
            creator: 'delivery_order.creator',
            postCode: 'delivery_order.post_code',
            street: 'delivery_order.street',
            city: 'delivery_order.city',
            state: 'delivery_order.state',
            country: 'delivery_order.country',
            termsConditions: 'delivery_order.terms_conditions',
            remark: 'delivery_order.remark',
            createdAt: 'delivery_order.created_at',
            updatedAt: 'delivery_order.updated_at',
            isactived: 'delivery_order.isactived',
            islocked: 'delivery_order.islocked',
            createUid: 'delivery_order.create_uid',
            updatedUid: 'delivery_order.updated_uid',
            refNumber: 'delivery_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getdeliveryOrder(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.DeliveryOrder).createQueryBuilder('delivery_order');
        const fields = {
            id: 'delivery_order.id',
            linkedInvoice: 'delivery_order.linked_invoice',
            deliveryName: 'delivery_order.delivery_name',
            clientCompany: 'delivery_order.client_company',
            deliveryDate: 'delivery_order.delivery_date',
            clientContact: 'delivery_order.client_contact',
            creator: 'delivery_order.creator',
            postCode: 'delivery_order.post_code',
            street: 'delivery_order.street',
            city: 'delivery_order.city',
            state: 'delivery_order.state',
            country: 'delivery_order.country',
            termsConditions: 'delivery_order.terms_conditions',
            remark: 'delivery_order.remark',
            createdAt: 'delivery_order.created_at',
            updatedAt: 'delivery_order.updated_at',
            isactived: 'delivery_order.isactived',
            islocked: 'delivery_order.islocked',
            createUid: 'delivery_order.create_uid',
            updatedUid: 'delivery_order.updated_uid',
            refNumber: 'delivery_order.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("delivery_order.isactived='0' and (delivery_order.create_uid = '" +
            userIds +
            "' or delivery_order.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'delivery_order', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['delivery_order.delivery_name', 'delivery_order.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.DeliveryOrderRepo = DeliveryOrderRepo;
//# sourceMappingURL=DeliveryOrderRepo.js.map