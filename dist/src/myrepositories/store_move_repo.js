"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const store_move_1 = require("../myentities/store_move");
class StoreMoveRepo {
    async create(storeMoveVo) {
        return await (0, typeorm_1.getRepository)(store_move_1.StoreMove).insert(storeMoveVo);
    }
    async update(Id, user_id, storeMoveVo) {
        storeMoveVo.updatedAt = new Date();
        storeMoveVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(store_move_1.StoreMove).update(Id, storeMoveVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(store_move_1.StoreMove).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStoreMovesById(id) {
        const qb = await (0, typeorm_1.getRepository)(store_move_1.StoreMove).createQueryBuilder('store_move');
        const fields = {
            id: 'store_move.id',
            name: 'store_move.name',
            partners: 'store_move.partners',
            deliveryDate: 'store_move.delivery_date',
            sourceLocation: 'store_move.source_location',
            sourceDocument: 'store_move.source_document',
            type: 'store_move.type',
            owner: 'store_move.owner',
            fhtime: 'store_move.fhtime',
            notes: 'store_move.notes',
            description: 'store_move.description',
            createdAt: 'store_move.created_at',
            updatedAt: 'store_move.updated_at',
            isactived: 'store_move.isactived',
            islocked: 'store_move.islocked',
            createUid: 'store_move.create_uid',
            updatedUid: 'store_move.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'store_move', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStoreMoveAll() {
        const qb = (0, typeorm_1.getRepository)(store_move_1.StoreMove).createQueryBuilder('store_move');
        const fields = {
            id: 'store_move.id',
            name: 'store_move.name',
            description: 'store_move.description',
            partners: 'store_move.partners',
            deliveryDate: 'store_move.delivery_date',
            sourceLocation: 'store_move.source_location',
            sourceDocument: 'store_move.source_document',
            type: 'store_move.type',
            owner: 'store_move.owner',
            fhtime: 'store_move.fhtime',
            notes: 'store_move.notes',
            createdAt: 'store_move.created_at',
            updatedAt: 'store_move.updated_at',
            isactived: 'store_move.isactived',
            islocked: 'store_move.islocked',
            createUid: 'store_move.create_uid',
            updatedUid: 'store_move.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("store_move.isactived='0'");
        qb.orderBy('store_move.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStoreMoveAllView() {
        const qb = await (0, typeorm_1.getRepository)(store_move_1.StoreMove).createQueryBuilder('store_move');
        const fields = {
            id: 'store_move.id',
            name: 'store_move.name',
            description: 'store_move.description',
            partners: 'store_move.partners',
            deliveryDate: 'store_move.delivery_date',
            sourceLocation: 'store_move.source_location',
            sourceDocument: 'store_move.source_document',
            type: 'store_move.type',
            owner: 'store_move.owner',
            fhtime: 'store_move.fhtime',
            notes: 'store_move.notes',
            createdAt: 'store_move.created_at',
            updatedAt: 'store_move.updated_at',
            isactived: 'store_move.isactived',
            islocked: 'store_move.islocked',
            createUid: 'store_move.create_uid',
            updatedUid: 'store_move.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('store_move.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStoreMoveList(search) {
        const qb = await (0, typeorm_1.getRepository)(store_move_1.StoreMove).createQueryBuilder('store_move');
        const fields = {
            id: 'store_move.id',
            name: 'store_move.name',
            description: 'store_move.description',
            partners: 'store_move.partners',
            deliveryDate: 'store_move.delivery_date',
            sourceLocation: 'store_move.source_location',
            sourceDocument: 'store_move.source_document',
            type: 'store_move.type',
            owner: 'store_move.owner',
            fhtime: 'store_move.fhtime',
            notes: 'store_move.notes',
            createdAt: 'store_move.created_at',
            updatedAt: 'store_move.updated_at',
            isactived: 'store_move.isactived',
            islocked: 'store_move.islocked',
            createUid: 'store_move.create_uid',
            updatedUid: 'store_move.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("store_move.isactived='0'");
        qb.orderBy('store_move.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StoreMoveRepo = StoreMoveRepo;
//# sourceMappingURL=store_move_repo.js.map