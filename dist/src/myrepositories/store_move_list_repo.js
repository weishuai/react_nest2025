"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const store_move_list_1 = require("../myentities/store_move_list");
class StoreMoveListRepo {
    async create(storeMoveListVo) {
        return await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).insert(storeMoveListVo);
    }
    async update(Id, user_id, storeMoveListVo) {
        storeMoveListVo.updatedAt = new Date();
        storeMoveListVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).update(Id, storeMoveListVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStoreMoveListsById(id) {
        const qb = await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).createQueryBuilder('store_move_list');
        const fields = {
            id: 'store_move_list.id',
            name: 'store_move_list.name',
            mid: 'store_move_list.mid',
            product: 'store_move_list.product',
            demand: 'store_move_list.demand',
            reserve: 'store_move_list.reserve',
            complete: 'store_move_list.complete',
            unit: 'store_move_list.unit',
            sellingPrice: 'store_move_list.selling_price',
            costPprice: 'store_move_list.cost_price',
            description: 'store_move_list.description',
            createdAt: 'store_move_list.created_at',
            updatedAt: 'store_move_list.updated_at',
            isactived: 'store_move_list.isactived',
            islocked: 'store_move_list.islocked',
            createUid: 'store_move_list.create_uid',
            updatedUid: 'store_move_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'store_move_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStoreMoveListAll() {
        const qb = (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).createQueryBuilder('store_move_list');
        const fields = {
            id: 'store_move_list.id',
            name: 'store_move_list.name',
            description: 'store_move_list.description',
            mid: 'store_move_list.mid',
            product: 'store_move_list.product',
            demand: 'store_move_list.demand',
            reserve: 'store_move_list.reserve',
            complete: 'store_move_list.complete',
            unit: 'store_move_list.unit',
            sellingPrice: 'store_move_list.selling_price',
            costPprice: 'store_move_list.cost_price',
            createdAt: 'store_move_list.created_at',
            updatedAt: 'store_move_list.updated_at',
            isactived: 'store_move_list.isactived',
            islocked: 'store_move_list.islocked',
            createUid: 'store_move_list.create_uid',
            updatedUid: 'store_move_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("store_move_list.isactived='0'");
        qb.orderBy('store_move_list.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStoreMoveListAllView() {
        const qb = await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).createQueryBuilder('store_move_list');
        const fields = {
            id: 'store_move_list.id',
            name: 'store_move_list.name',
            description: 'store_move_list.description',
            mid: 'store_move_list.mid',
            product: 'store_move_list.product',
            demand: 'store_move_list.demand',
            reserve: 'store_move_list.reserve',
            complete: 'store_move_list.complete',
            unit: 'store_move_list.unit',
            sellingPrice: 'store_move_list.selling_price',
            costPprice: 'store_move_list.cost_price',
            createdAt: 'store_move_list.created_at',
            updatedAt: 'store_move_list.updated_at',
            isactived: 'store_move_list.isactived',
            islocked: 'store_move_list.islocked',
            createUid: 'store_move_list.create_uid',
            updatedUid: 'store_move_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('store_move_list.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStoreMoveListList(search) {
        const qb = await (0, typeorm_1.getRepository)(store_move_list_1.StoreMoveList).createQueryBuilder('store_move_list');
        const fields = {
            id: 'store_move_list.id',
            name: 'store_move_list.name',
            description: 'store_move_list.description',
            mid: 'store_move_list.mid',
            product: 'store_move_list.product',
            demand: 'store_move_list.demand',
            reserve: 'store_move_list.reserve',
            complete: 'store_move_list.complete',
            unit: 'store_move_list.unit',
            sellingPrice: 'store_move_list.selling_price',
            costPprice: 'store_move_list.cost_price',
            createdAt: 'store_move_list.created_at',
            updatedAt: 'store_move_list.updated_at',
            isactived: 'store_move_list.isactived',
            islocked: 'store_move_list.islocked',
            createUid: 'store_move_list.create_uid',
            updatedUid: 'store_move_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("store_move_list.isactived='0'");
        qb.orderBy('store_move_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StoreMoveListRepo = StoreMoveListRepo;
//# sourceMappingURL=store_move_list_repo.js.map