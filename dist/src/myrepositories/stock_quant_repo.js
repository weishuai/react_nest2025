"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockQuantRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const stock_quant_1 = require("../myentities/stock_quant");
class StockQuantRepo {
    async create(stockQuantVo) {
        return await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).insert(stockQuantVo);
    }
    async update(Id, user_id, stockQuantVo) {
        stockQuantVo.updatedAt = new Date();
        stockQuantVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).update(Id, stockQuantVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStockQuantsById(id) {
        const qb = await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).createQueryBuilder('stock_quant');
        const fields = {
            id: 'stock_quant.id',
            name: 'stock_quant.name',
            product: 'stock_quant.product',
            position: 'stock_quant.position',
            batch: 'stock_quant.batch',
            package: 'stock_quant.package',
            inHand: 'stock_quant.inHand',
            available: 'stock_quant.available',
            unit: 'stock_quant.unit',
            price: 'stock_quant.price',
            company: 'stock_quant.company',
            description: 'stock_quant.description',
            createdAt: 'stock_quant.created_at',
            updatedAt: 'stock_quant.updated_at',
            isactived: 'stock_quant.isactived',
            islocked: 'stock_quant.islocked',
            createUid: 'stock_quant.create_uid',
            updatedUid: 'stock_quant.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'stock_quant', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStockQuantAll() {
        const qb = (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).createQueryBuilder('stock_quant');
        const fields = {
            id: 'stock_quant.id',
            name: 'stock_quant.name',
            description: 'stock_quant.description',
            product: 'stock_quant.product',
            position: 'stock_quant.position',
            batch: 'stock_quant.batch',
            package: 'stock_quant.package',
            inHand: 'stock_quant.inHand',
            available: 'stock_quant.available',
            unit: 'stock_quant.unit',
            price: 'stock_quant.price',
            company: 'stock_quant.company',
            createdAt: 'stock_quant.created_at',
            updatedAt: 'stock_quant.updated_at',
            isactived: 'stock_quant.isactived',
            islocked: 'stock_quant.islocked',
            createUid: 'stock_quant.create_uid',
            updatedUid: 'stock_quant.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_quant.isactived='0'");
        qb.orderBy('stock_quant.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStockQuantAllView() {
        const qb = await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).createQueryBuilder('stock_quant');
        const fields = {
            id: 'stock_quant.id',
            name: 'stock_quant.name',
            description: 'stock_quant.description',
            product: 'stock_quant.product',
            position: 'stock_quant.position',
            batch: 'stock_quant.batch',
            package: 'stock_quant.package',
            inHand: 'stock_quant.inHand',
            available: 'stock_quant.available',
            unit: 'stock_quant.unit',
            price: 'stock_quant.price',
            company: 'stock_quant.company',
            createdAt: 'stock_quant.created_at',
            updatedAt: 'stock_quant.updated_at',
            isactived: 'stock_quant.isactived',
            islocked: 'stock_quant.islocked',
            createUid: 'stock_quant.create_uid',
            updatedUid: 'stock_quant.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('stock_quant.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStockQuantList(search) {
        const qb = await (0, typeorm_1.getRepository)(stock_quant_1.StockQuant).createQueryBuilder('stock_quant');
        const fields = {
            id: 'stock_quant.id',
            name: 'stock_quant.name',
            description: 'stock_quant.description',
            product: 'stock_quant.product',
            position: 'stock_quant.position',
            batch: 'stock_quant.batch',
            package: 'stock_quant.package',
            inHand: 'stock_quant.inHand',
            available: 'stock_quant.available',
            unit: 'stock_quant.unit',
            price: 'stock_quant.price',
            company: 'stock_quant.company',
            createdAt: 'stock_quant.created_at',
            updatedAt: 'stock_quant.updated_at',
            isactived: 'stock_quant.isactived',
            islocked: 'stock_quant.islocked',
            createUid: 'stock_quant.create_uid',
            updatedUid: 'stock_quant.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stock_quant.isactived='0'");
        qb.orderBy('stock_quant.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StockQuantRepo = StockQuantRepo;
//# sourceMappingURL=stock_quant_repo.js.map