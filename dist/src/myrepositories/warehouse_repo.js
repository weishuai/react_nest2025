"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const warehouse_1 = require("../myentities/warehouse");
class WarehouseRepo {
    async create(warehouseVo) {
        return await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).insert(warehouseVo);
    }
    async update(Id, user_id, warehouseVo) {
        warehouseVo.updatedAt = new Date();
        warehouseVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).update(Id, warehouseVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).update(Ids[0], {
            isactived: '1',
        });
    }
    async getWarehousesById(id) {
        const qb = await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).createQueryBuilder('warehouse');
        const fields = {
            id: 'warehouse.id',
            name: 'warehouse.name',
            myname: 'warehouse.myname',
            fhname: 'warehouse.fhname',
            address: 'warehouse.address',
            description: 'warehouse.description',
            createdAt: 'warehouse.created_at',
            updatedAt: 'warehouse.updated_at',
            isactived: 'warehouse.isactived',
            islocked: 'warehouse.islocked',
            createUid: 'warehouse.create_uid',
            updatedUid: 'warehouse.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'warehouse', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getWarehouseAll() {
        const qb = (0, typeorm_1.getRepository)(warehouse_1.Warehouse).createQueryBuilder('warehouse');
        const fields = {
            id: 'warehouse.id',
            name: 'warehouse.name',
            description: 'warehouse.description',
            myname: 'warehouse.myname',
            fhname: 'warehouse.fhname',
            address: 'warehouse.address',
            createdAt: 'warehouse.created_at',
            updatedAt: 'warehouse.updated_at',
            isactived: 'warehouse.isactived',
            islocked: 'warehouse.islocked',
            createUid: 'warehouse.create_uid',
            updatedUid: 'warehouse.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("warehouse.isactived='0'");
        qb.orderBy('warehouse.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getWarehouseAllView() {
        const qb = await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).createQueryBuilder('warehouse');
        const fields = {
            id: 'warehouse.id',
            name: 'warehouse.name',
            description: 'warehouse.description',
            myname: 'warehouse.myname',
            fhname: 'warehouse.fhname',
            address: 'warehouse.address',
            createdAt: 'warehouse.created_at',
            updatedAt: 'warehouse.updated_at',
            isactived: 'warehouse.isactived',
            islocked: 'warehouse.islocked',
            createUid: 'warehouse.create_uid',
            updatedUid: 'warehouse.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('warehouse.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getWarehouseList(search) {
        const qb = await (0, typeorm_1.getRepository)(warehouse_1.Warehouse).createQueryBuilder('warehouse');
        const fields = {
            id: 'warehouse.id',
            name: 'warehouse.name',
            description: 'warehouse.description',
            myname: 'warehouse.myname',
            fhname: 'warehouse.fhname',
            address: 'warehouse.address',
            createdAt: 'warehouse.created_at',
            updatedAt: 'warehouse.updated_at',
            isactived: 'warehouse.isactived',
            islocked: 'warehouse.islocked',
            createUid: 'warehouse.create_uid',
            updatedUid: 'warehouse.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("warehouse.isactived='0'");
        qb.orderBy('warehouse.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.WarehouseRepo = WarehouseRepo;
//# sourceMappingURL=warehouse_repo.js.map