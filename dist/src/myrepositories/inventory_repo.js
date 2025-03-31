"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const inventory_1 = require("../myentities/inventory");
class InventoryRepo {
    async create(inventoryVo) {
        return await (0, typeorm_1.getRepository)(inventory_1.Inventory).insert(inventoryVo);
    }
    async update(Id, user_id, inventoryVo) {
        inventoryVo.updatedAt = new Date();
        inventoryVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(inventory_1.Inventory).update(Id, inventoryVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(inventory_1.Inventory).update(Ids[0], {
            isactived: '1',
        });
    }
    async getInventorysById(id) {
        const qb = await (0, typeorm_1.getRepository)(inventory_1.Inventory).createQueryBuilder('inventory');
        const fields = {
            id: 'inventory.id',
            name: 'inventory.name',
            title: 'inventory.title',
            position: 'inventory.position',
            jobDate: 'inventory.job_date',
            warehouse: 'inventory.warehouse',
            description: 'inventory.description',
            createdAt: 'inventory.created_at',
            updatedAt: 'inventory.updated_at',
            isactived: 'inventory.isactived',
            islocked: 'inventory.islocked',
            createUid: 'inventory.create_uid',
            updatedUid: 'inventory.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'inventory', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getInventoryAll() {
        const qb = (0, typeorm_1.getRepository)(inventory_1.Inventory).createQueryBuilder('inventory');
        const fields = {
            id: 'inventory.id',
            name: 'inventory.name',
            description: 'inventory.description',
            title: 'inventory.title',
            position: 'inventory.position',
            jobDate: 'inventory.job_date',
            warehouse: 'inventory.warehouse',
            createdAt: 'inventory.created_at',
            updatedAt: 'inventory.updated_at',
            isactived: 'inventory.isactived',
            islocked: 'inventory.islocked',
            createUid: 'inventory.create_uid',
            updatedUid: 'inventory.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("inventory.isactived='0'");
        qb.orderBy('inventory.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getInventoryAllView() {
        const qb = await (0, typeorm_1.getRepository)(inventory_1.Inventory).createQueryBuilder('inventory');
        const fields = {
            id: 'inventory.id',
            name: 'inventory.name',
            description: 'inventory.description',
            title: 'inventory.title',
            position: 'inventory.position',
            jobDate: 'inventory.job_date',
            warehouse: 'inventory.warehouse',
            createdAt: 'inventory.created_at',
            updatedAt: 'inventory.updated_at',
            isactived: 'inventory.isactived',
            islocked: 'inventory.islocked',
            createUid: 'inventory.create_uid',
            updatedUid: 'inventory.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('inventory.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getInventoryList(search) {
        const qb = await (0, typeorm_1.getRepository)(inventory_1.Inventory).createQueryBuilder('inventory');
        const fields = {
            id: 'inventory.id',
            name: 'inventory.name',
            description: 'inventory.description',
            title: 'inventory.title',
            position: 'inventory.position',
            jobDate: 'inventory.job_date',
            warehouse: 'inventory.warehouse',
            createdAt: 'inventory.created_at',
            updatedAt: 'inventory.updated_at',
            isactived: 'inventory.isactived',
            islocked: 'inventory.islocked',
            createUid: 'inventory.create_uid',
            updatedUid: 'inventory.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("inventory.isactived='0'");
        qb.orderBy('inventory.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.InventoryRepo = InventoryRepo;
//# sourceMappingURL=inventory_repo.js.map