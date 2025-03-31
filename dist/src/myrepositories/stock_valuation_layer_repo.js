"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockValuationLayerRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const stock_valuation_layer_1 = require("../myentities/stock_valuation_layer");
class StockValuationLayerRepo {
    async create(stockValuationLayerVo) {
        return await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).insert(stockValuationLayerVo);
    }
    async update(Id, user_id, stockValuationLayerVo) {
        stockValuationLayerVo.updatedAt = new Date();
        stockValuationLayerVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).update(Id, stockValuationLayerVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStockValuationLayersById(id) {
        const qb = await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).createQueryBuilder('stock_valuation_layer');
        const fields = {
            id: 'stock_valuation_layer.id',
            name: 'stock_valuation_layer.name',
            fhdate: 'stock_valuation_layer.fhdate',
            product: 'stock_valuation_layer.product',
            number: 'stock_valuation_layer.number',
            unit: 'stock_valuation_layer.unit',
            totalValue: 'stock_valuation_layer.totalValue',
            company: 'stock_valuation_layer.company',
            description: 'stock_valuation_layer.description',
            createdAt: 'stock_valuation_layer.created_at',
            updatedAt: 'stock_valuation_layer.updated_at',
            isactived: 'stock_valuation_layer.isactived',
            islocked: 'stock_valuation_layer.islocked',
            createUid: 'stock_valuation_layer.create_uid',
            updatedUid: 'stock_valuation_layer.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'stock_valuation_layer', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStockValuationLayerAll() {
        const qb = (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).createQueryBuilder('stock_valuation_layer');
        const fields = {
            id: 'stock_valuation_layer.id',
            name: 'stock_valuation_layer.name',
            description: 'stock_valuation_layer.description',
            fhdate: 'stock_valuation_layer.fhdate',
            product: 'stock_valuation_layer.product',
            number: 'stock_valuation_layer.number',
            unit: 'stock_valuation_layer.unit',
            totalValue: 'stock_valuation_layer.totalValue',
            company: 'stock_valuation_layer.company',
            createdAt: 'stock_valuation_layer.created_at',
            updatedAt: 'stock_valuation_layer.updated_at',
            isactived: 'stock_valuation_layer.isactived',
            islocked: 'stock_valuation_layer.islocked',
            createUid: 'stock_valuation_layer.create_uid',
            updatedUid: 'stock_valuation_layer.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_valuation_layer.isactived='0'");
        qb.orderBy('stock_valuation_layer.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStockValuationLayerAllView() {
        const qb = await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).createQueryBuilder('stock_valuation_layer');
        const fields = {
            id: 'stock_valuation_layer.id',
            name: 'stock_valuation_layer.name',
            description: 'stock_valuation_layer.description',
            fhdate: 'stock_valuation_layer.fhdate',
            product: 'stock_valuation_layer.product',
            number: 'stock_valuation_layer.number',
            unit: 'stock_valuation_layer.unit',
            totalValue: 'stock_valuation_layer.totalValue',
            company: 'stock_valuation_layer.company',
            createdAt: 'stock_valuation_layer.created_at',
            updatedAt: 'stock_valuation_layer.updated_at',
            isactived: 'stock_valuation_layer.isactived',
            islocked: 'stock_valuation_layer.islocked',
            createUid: 'stock_valuation_layer.create_uid',
            updatedUid: 'stock_valuation_layer.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('stock_valuation_layer.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStockValuationLayerList(search) {
        const qb = await (0, typeorm_1.getRepository)(stock_valuation_layer_1.StockValuationLayer).createQueryBuilder('stock_valuation_layer');
        const fields = {
            id: 'stock_valuation_layer.id',
            name: 'stock_valuation_layer.name',
            description: 'stock_valuation_layer.description',
            fhdate: 'stock_valuation_layer.fhdate',
            product: 'stock_valuation_layer.product',
            number: 'stock_valuation_layer.number',
            unit: 'stock_valuation_layer.unit',
            totalValue: 'stock_valuation_layer.totalValue',
            company: 'stock_valuation_layer.company',
            createdAt: 'stock_valuation_layer.created_at',
            updatedAt: 'stock_valuation_layer.updated_at',
            isactived: 'stock_valuation_layer.isactived',
            islocked: 'stock_valuation_layer.islocked',
            createUid: 'stock_valuation_layer.create_uid',
            updatedUid: 'stock_valuation_layer.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_valuation_layer.isactived='0'");
        qb.orderBy('stock_valuation_layer.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StockValuationLayerRepo = StockValuationLayerRepo;
//# sourceMappingURL=stock_valuation_layer_repo.js.map