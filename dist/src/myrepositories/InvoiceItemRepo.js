"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class InvoiceItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateInvoiceItemVoByMid(mid, id) {
        const listItems = this.getInvoiceItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async updateToInvoiceItemVoByMid(mid) {
        const listItems = this.getInvoiceItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).update(Item.id, { isactived: '1' });
        });
        return 'ok';
    }
    async getInvoiceItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).createQueryBuilder('invoice_item');
        const fields = {
            id: 'invoice_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getinvoiceItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).createQueryBuilder('invoice_item');
        const fields = {
            id: 'invoice_item.id',
            mid: 'invoice_item.mid',
            name: 'invoice_item.name',
            description: 'invoice_item.description',
            qty: 'invoice_item.qty',
            unit: 'invoice_item.unit',
            unitPrice: 'invoice_item.unit_price',
            remark: 'invoice_item.remark',
            createdAt: 'invoice_item.created_at',
            updatedAt: 'invoice_item.updated_at',
            isactived: 'invoice_item.isactived',
            islocked: 'invoice_item.islocked',
            createUid: 'invoice_item.create_uid',
            updatedUid: 'invoice_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'invoice_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getinvoiceItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).createQueryBuilder('invoice_item');
        const fields = {
            id: 'invoice_item.id',
            mid: 'invoice_item.mid',
            name: 'invoice_item.name',
            description: 'invoice_item.description',
            qty: 'invoice_item.qty',
            unit: 'invoice_item.unit',
            unitPrice: 'invoice_item.unit_price',
            remark: 'invoice_item.remark',
            createdAt: 'invoice_item.created_at',
            updatedAt: 'invoice_item.updated_at',
            isactived: 'invoice_item.isactived',
            islocked: 'invoice_item.islocked',
            createUid: 'invoice_item.create_uid',
            updatedUid: 'invoice_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        console.info('search.mid:' + search.mid);
        qb.where("invoice_item.isactived='0' and invoice_item.mid='" + search.mid + "'");
        if (search.search != "") {
            (0, my_utils_1.multiSearch)(qb, ['invoice_item.name'], search.search);
        }
        qb.orderBy('invoice_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getinvoiceItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).createQueryBuilder('invoice_item');
        const fields = {
            id: 'invoice_item.id',
            mid: 'invoice_item.mid',
            name: 'invoice_item.name',
            description: 'invoice_item.description',
            qty: 'invoice_item.qty',
            unit: 'invoice_item.unit',
            unitPrice: 'invoice_item.unit_price',
            remark: 'invoice_item.remark',
            createdAt: 'invoice_item.created_at',
            updatedAt: 'invoice_item.updated_at',
            isactived: 'invoice_item.isactived',
            islocked: 'invoice_item.islocked',
            createUid: 'invoice_item.create_uid',
            updatedUid: 'invoice_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getinvoiceItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.InvoiceItem).createQueryBuilder('invoice_item');
        const fields = {
            id: 'invoice_item.id',
            mid: 'invoice_item.mid',
            name: 'invoice_item.name',
            description: 'invoice_item.description',
            qty: 'invoice_item.qty',
            unit: 'invoice_item.unit',
            unitPrice: 'invoice_item.unit_price',
            remark: 'invoice_item.remark',
            createdAt: 'invoice_item.created_at',
            updatedAt: 'invoice_item.updated_at',
            isactived: 'invoice_item.isactived',
            islocked: 'invoice_item.islocked',
            createUid: 'invoice_item.create_uid',
            updatedUid: 'invoice_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("invoice_item.isactived='0'");
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'invoice_item', 'mid', search.mid);
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.InvoiceItemRepo = InvoiceItemRepo;
//# sourceMappingURL=InvoiceItemRepo.js.map