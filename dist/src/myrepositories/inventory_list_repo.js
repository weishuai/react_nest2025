"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const inventory_list_1 = require("../myentities/inventory_list");
class InventoryListRepo {
    async create(inventoryListVo) {
        return await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).insert(inventoryListVo);
    }
    async update(Id, user_id, inventoryListVo) {
        inventoryListVo.updatedAt = new Date();
        inventoryListVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).update(Id, inventoryListVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getInventoryListsById(id) {
        const qb = await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).createQueryBuilder('inventory_list');
        const fields = {
            id: 'inventory_list.id',
            name: 'inventory_list.name',
            mid: 'inventory_list.mid',
            product: 'inventory_list.product',
            unit: 'inventory_list.unit',
            position: 'inventory_list.position',
            batch: 'inventory_list.batch',
            package: 'inventory_list.package',
            owner: 'inventory_list.owner',
            theoretical: 'inventory_list.theoretical',
            actualQuantity: 'inventory_list.actual_quantity',
            description: 'inventory_list.description',
            createdAt: 'inventory_list.created_at',
            updatedAt: 'inventory_list.updated_at',
            isactived: 'inventory_list.isactived',
            islocked: 'inventory_list.islocked',
            createUid: 'inventory_list.create_uid',
            updatedUid: 'inventory_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'inventory_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getInventoryListAll() {
        const qb = (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).createQueryBuilder('inventory_list');
        const fields = {
            id: 'inventory_list.id',
            name: 'inventory_list.name',
            description: 'inventory_list.description',
            mid: 'inventory_list.mid',
            product: 'inventory_list.product',
            unit: 'inventory_list.unit',
            position: 'inventory_list.position',
            batch: 'inventory_list.batch',
            package: 'inventory_list.package',
            owner: 'inventory_list.owner',
            theoretical: 'inventory_list.theoretical',
            actualQuantity: 'inventory_list.actual_quantity',
            createdAt: 'inventory_list.created_at',
            updatedAt: 'inventory_list.updated_at',
            isactived: 'inventory_list.isactived',
            islocked: 'inventory_list.islocked',
            createUid: 'inventory_list.create_uid',
            updatedUid: 'inventory_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("inventory_list.isactived='0'");
        qb.orderBy('inventory_list.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getInventoryListAllView() {
        const qb = await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).createQueryBuilder('inventory_list');
        const fields = {
            id: 'inventory_list.id',
            name: 'inventory_list.name',
            description: 'inventory_list.description',
            mid: 'inventory_list.mid',
            product: 'inventory_list.product',
            unit: 'inventory_list.unit',
            position: 'inventory_list.position',
            batch: 'inventory_list.batch',
            package: 'inventory_list.package',
            owner: 'inventory_list.owner',
            theoretical: 'inventory_list.theoretical',
            actualQuantity: 'inventory_list.actual_quantity',
            createdAt: 'inventory_list.created_at',
            updatedAt: 'inventory_list.updated_at',
            isactived: 'inventory_list.isactived',
            islocked: 'inventory_list.islocked',
            createUid: 'inventory_list.create_uid',
            updatedUid: 'inventory_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('inventory_list.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getInventoryListList(search) {
        const qb = await (0, typeorm_1.getRepository)(inventory_list_1.InventoryList).createQueryBuilder('inventory_list');
        const fields = {
            id: 'inventory_list.id',
            name: 'inventory_list.name',
            description: 'inventory_list.description',
            mid: 'inventory_list.mid',
            product: 'inventory_list.product',
            unit: 'inventory_list.unit',
            position: 'inventory_list.position',
            batch: 'inventory_list.batch',
            package: 'inventory_list.package',
            owner: 'inventory_list.owner',
            theoretical: 'inventory_list.theoretical',
            actualQuantity: 'inventory_list.actual_quantity',
            createdAt: 'inventory_list.created_at',
            updatedAt: 'inventory_list.updated_at',
            isactived: 'inventory_list.isactived',
            islocked: 'inventory_list.islocked',
            createUid: 'inventory_list.create_uid',
            updatedUid: 'inventory_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("inventory_list.isactived='0'");
        qb.orderBy('inventory_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.InventoryListRepo = InventoryListRepo;
//# sourceMappingURL=inventory_list_repo.js.map