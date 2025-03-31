"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockWarehouseOrderpointRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const stock_warehouse_orderpoint_1 = require("../myentities/stock_warehouse_orderpoint");
class StockWarehouseOrderpointRepo {
    async create(stockWarehouseOrderpointVo) {
        return await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).insert(stockWarehouseOrderpointVo);
    }
    async update(Id, user_id, stockWarehouseOrderpointVo) {
        stockWarehouseOrderpointVo.updatedAt = new Date();
        stockWarehouseOrderpointVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).update(Id, stockWarehouseOrderpointVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStockWarehouseOrderpointsById(id) {
        const qb = await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).createQueryBuilder('stock_warehouse_orderpoint');
        const fields = {
            id: 'stock_warehouse_orderpoint.id',
            name: 'stock_warehouse_orderpoint.name',
            product: 'stock_warehouse_orderpoint.product',
            position: 'stock_warehouse_orderpoint.position',
            inHand: 'stock_warehouse_orderpoint.inHand',
            prediction: 'stock_warehouse_orderpoint.prediction',
            route: 'stock_warehouse_orderpoint.route',
            min: 'stock_warehouse_orderpoint.min',
            max: 'stock_warehouse_orderpoint.max',
            order: 'stock_warehouse_orderpoint.order',
            unit: 'stock_warehouse_orderpoint.unit',
            description: 'stock_warehouse_orderpoint.description',
            createdAt: 'stock_warehouse_orderpoint.created_at',
            updatedAt: 'stock_warehouse_orderpoint.updated_at',
            isactived: 'stock_warehouse_orderpoint.isactived',
            islocked: 'stock_warehouse_orderpoint.islocked',
            createUid: 'stock_warehouse_orderpoint.create_uid',
            updatedUid: 'stock_warehouse_orderpoint.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'stock_warehouse_orderpoint', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStockWarehouseOrderpointAll() {
        const qb = (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).createQueryBuilder('stock_warehouse_orderpoint');
        const fields = {
            id: 'stock_warehouse_orderpoint.id',
            name: 'stock_warehouse_orderpoint.name',
            description: 'stock_warehouse_orderpoint.description',
            product: 'stock_warehouse_orderpoint.product',
            position: 'stock_warehouse_orderpoint.position',
            inHand: 'stock_warehouse_orderpoint.inHand',
            prediction: 'stock_warehouse_orderpoint.prediction',
            route: 'stock_warehouse_orderpoint.route',
            min: 'stock_warehouse_orderpoint.min',
            max: 'stock_warehouse_orderpoint.max',
            order: 'stock_warehouse_orderpoint.order',
            unit: 'stock_warehouse_orderpoint.unit',
            createdAt: 'stock_warehouse_orderpoint.created_at',
            updatedAt: 'stock_warehouse_orderpoint.updated_at',
            isactived: 'stock_warehouse_orderpoint.isactived',
            islocked: 'stock_warehouse_orderpoint.islocked',
            createUid: 'stock_warehouse_orderpoint.create_uid',
            updatedUid: 'stock_warehouse_orderpoint.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_warehouse_orderpoint.isactived='0'");
        qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStockWarehouseOrderpointAllView() {
        const qb = await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).createQueryBuilder('stock_warehouse_orderpoint');
        const fields = {
            id: 'stock_warehouse_orderpoint.id',
            name: 'stock_warehouse_orderpoint.name',
            description: 'stock_warehouse_orderpoint.description',
            product: 'stock_warehouse_orderpoint.product',
            position: 'stock_warehouse_orderpoint.position',
            inHand: 'stock_warehouse_orderpoint.inHand',
            prediction: 'stock_warehouse_orderpoint.prediction',
            route: 'stock_warehouse_orderpoint.route',
            min: 'stock_warehouse_orderpoint.min',
            max: 'stock_warehouse_orderpoint.max',
            order: 'stock_warehouse_orderpoint.order',
            unit: 'stock_warehouse_orderpoint.unit',
            createdAt: 'stock_warehouse_orderpoint.created_at',
            updatedAt: 'stock_warehouse_orderpoint.updated_at',
            isactived: 'stock_warehouse_orderpoint.isactived',
            islocked: 'stock_warehouse_orderpoint.islocked',
            createUid: 'stock_warehouse_orderpoint.create_uid',
            updatedUid: 'stock_warehouse_orderpoint.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStockWarehouseOrderpointList(search) {
        const qb = await (0, typeorm_1.getRepository)(stock_warehouse_orderpoint_1.StockWarehouseOrderpoint).createQueryBuilder('stock_warehouse_orderpoint');
        const fields = {
            id: 'stock_warehouse_orderpoint.id',
            name: 'stock_warehouse_orderpoint.name',
            description: 'stock_warehouse_orderpoint.description',
            product: 'stock_warehouse_orderpoint.product',
            position: 'stock_warehouse_orderpoint.position',
            inHand: 'stock_warehouse_orderpoint.inHand',
            prediction: 'stock_warehouse_orderpoint.prediction',
            route: 'stock_warehouse_orderpoint.route',
            min: 'stock_warehouse_orderpoint.min',
            max: 'stock_warehouse_orderpoint.max',
            order: 'stock_warehouse_orderpoint.order',
            unit: 'stock_warehouse_orderpoint.unit',
            createdAt: 'stock_warehouse_orderpoint.created_at',
            updatedAt: 'stock_warehouse_orderpoint.updated_at',
            isactived: 'stock_warehouse_orderpoint.isactived',
            islocked: 'stock_warehouse_orderpoint.islocked',
            createUid: 'stock_warehouse_orderpoint.create_uid',
            updatedUid: 'stock_warehouse_orderpoint.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_warehouse_orderpoint.isactived='0'");
        qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StockWarehouseOrderpointRepo = StockWarehouseOrderpointRepo;
//# sourceMappingURL=stock_warehouse_orderpoint_repo.js.map