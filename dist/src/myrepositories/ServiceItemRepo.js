"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class ServiceItemRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceItem).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceItem).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateServiceItemByMid(mid, id) {
        const listItems = this.getServiceItemAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.ServiceItem).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getServiceItemAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceItem).createQueryBuilder('service_item');
        const fields = {
            id: 'service_item.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'service_item', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getServiceItemsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceItem).createQueryBuilder('service_item');
        const fields = {
            id: 'service_item.id',
            mid: 'service_item.mid',
            name: 'service_item.name',
            description: 'service_item.description',
            startDate: 'service_item.start_date',
            endDate: 'service_item.end_date',
            qty: 'service_item.qty',
            remarks: 'service_item.remarks',
            createdAt: 'service_item.created_at',
            updatedAt: 'service_item.updated_at',
            isactived: 'service_item.isactived',
            islocked: 'service_item.islocked',
            createUid: 'service_item.create_uid',
            updatedUid: 'service_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'service_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getServiceItemAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceItem).createQueryBuilder('service_item');
        const fields = {
            id: 'service_item.id',
            mid: 'service_item.mid',
            name: 'service_item.name',
            description: 'service_item.description',
            startDate: 'service_item.start_date',
            endDate: 'service_item.end_date',
            qty: 'service_item.qty',
            remarks: 'service_item.remarks',
            createdAt: 'service_item.created_at',
            updatedAt: 'service_item.updated_at',
            isactived: 'service_item.isactived',
            islocked: 'service_item.islocked',
            createUid: 'service_item.create_uid',
            updatedUid: 'service_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("service_item.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['service_item.name', 'service_item.description'], search.search);
        qb.orderBy('service_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getServiceItemAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceItem).createQueryBuilder('service_item');
        const fields = {
            id: 'service_item.id',
            mid: 'service_item.mid',
            name: 'service_item.name',
            description: 'service_item.description',
            startDate: 'service_item.start_date',
            endDate: 'service_item.end_date',
            qty: 'service_item.qty',
            remarks: 'service_item.remarks',
            createdAt: 'service_item.created_at',
            updatedAt: 'service_item.updated_at',
            isactived: 'service_item.isactived',
            islocked: 'service_item.islocked',
            createUid: 'service_item.create_uid',
            updatedUid: 'service_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getServiceItem(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceItem).createQueryBuilder('service_item');
        const fields = {
            id: 'service_item.id',
            mid: 'service_item.mid',
            name: 'service_item.name',
            description: 'service_item.description',
            startDate: 'service_item.start_date',
            endDate: 'service_item.end_date',
            qty: 'service_item.qty',
            remarks: 'service_item.remarks',
            createdAt: 'service_item.created_at',
            updatedAt: 'service_item.updated_at',
            isactived: 'service_item.isactived',
            islocked: 'service_item.islocked',
            createUid: 'service_item.create_uid',
            updatedUid: 'service_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("service_item.isactived='0'");
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'service_item', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['service_item.name', 'service_item.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ServiceItemRepo = ServiceItemRepo;
//# sourceMappingURL=ServiceItemRepo.js.map