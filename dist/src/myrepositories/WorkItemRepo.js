"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class WorkItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.WorkItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.WorkItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.WorkItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateWorkItemVoByMid(mid, id) {
        const listItems = this.getWorkItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.WorkItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async updateToWorkItemsVoByMid(mid) {
        const listItems = this.getWorkItemsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.WorkItem).update(Item.id, { isactived: '1' });
        });
        return 'ok';
    }
    async WorkItemUpdateMid(mid, MID) {
        const listItems = this.getWorkItemsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.WorkItem).update(Item.id, { mid: MID });
        });
        return 'ok';
    }
    async getWorkItemsAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'work_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
            name: 'work_item.name',
            description: 'work_item.description',
            qty: 'work_item.qty',
            unit: 'work_item.unit',
            unitPrice: 'work_item.unit_price',
            discount: 'work_item.discount',
            total: 'work_item.total',
            createdAt: 'work_item.created_at',
            updatedAt: 'work_item.updated_at',
            isactived: 'work_item.isactived',
            islocked: 'work_item.islocked',
            createUid: 'work_item.create_uid',
            updatedUid: 'work_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'work_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getWorkItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
            name: 'work_item.name',
            description: 'work_item.description',
            qty: 'work_item.qty',
            unit: 'work_item.unit',
            unitPrice: 'work_item.unit_price',
            discount: 'work_item.discount',
            total: 'work_item.total',
            createdAt: 'work_item.created_at',
            updatedAt: 'work_item.updated_at',
            isactived: 'work_item.isactived',
            islocked: 'work_item.islocked',
            createUid: 'work_item.create_uid',
            updatedUid: 'work_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work_item.isactived='0' and work_item.mid='" + search.mid + "'");
        qb.orderBy('work_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getWorkItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
            name: 'work_item.name',
            description: 'work_item.description',
            qty: 'work_item.qty',
            unit: 'work_item.unit',
            unitPrice: 'work_item.unit_price',
            discount: 'work_item.discount',
            total: 'work_item.total',
            createdAt: 'work_item.created_at',
            updatedAt: 'work_item.updated_at',
            isactived: 'work_item.isactived',
            islocked: 'work_item.islocked',
            createUid: 'work_item.create_uid',
            updatedUid: 'work_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'work_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getWorkItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.WorkItem).createQueryBuilder('work_item');
        const fields = {
            id: 'work_item.id',
            name: 'work_item.name',
            description: 'work_item.description',
            qty: 'work_item.qty',
            unit: 'work_item.unit',
            unitPrice: 'work_item.unit_price',
            discount: 'work_item.discount',
            total: 'work_item.total',
            createdAt: 'work_item.created_at',
            updatedAt: 'work_item.updated_at',
            isactived: 'work_item.isactived',
            islocked: 'work_item.islocked',
            createUid: 'work_item.create_uid',
            updatedUid: 'work_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("work_item.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'work_item', 'satus', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'work_item', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['work_item.name', 'work_item.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.WorkItemRepo = WorkItemRepo;
//# sourceMappingURL=WorkItemRepo.js.map