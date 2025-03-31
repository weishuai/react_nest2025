"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragelocationRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const storage_location_1 = require("../myentities/storage_location");
class StoragelocationRepo {
    async create(storagelocationVo) {
        return await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).insert(storagelocationVo);
    }
    async update(Id, user_id, storagelocationVo) {
        storagelocationVo.updatedAt = new Date();
        storagelocationVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).update(Id, storagelocationVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStoragelocationsById(id) {
        const qb = await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).createQueryBuilder('storage_location');
        const fields = {
            id: 'storage_location.id',
            name: 'storage_location.name',
            myname: 'storage_location.myname',
            mid: 'storage_location.mid',
            type: 'storage_location.type',
            description: 'storage_location.description',
            createdAt: 'storage_location.created_at',
            updatedAt: 'storage_location.updated_at',
            isactived: 'storage_location.isactived',
            islocked: 'storage_location.islocked',
            createUid: 'storage_location.create_uid',
            updatedUid: 'storage_location.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'storage_location', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStoragelocationAll() {
        const qb = (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).createQueryBuilder('storage_location');
        const fields = {
            id: 'storage_location.id',
            name: 'storage_location.name',
            description: 'storage_location.description',
            myname: 'storage_location.myname',
            mid: 'storage_location.mid',
            type: 'storage_location.type',
            createdAt: 'storage_location.created_at',
            updatedAt: 'storage_location.updated_at',
            isactived: 'storage_location.isactived',
            islocked: 'storage_location.islocked',
            createUid: 'storage_location.create_uid',
            updatedUid: 'storage_location.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("storage_location.isactived='0'");
        qb.orderBy('storage_location.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getStoragelocationAllView() {
        const qb = await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).createQueryBuilder('storage_location');
        const fields = {
            id: 'storage_location.id',
            name: 'storage_location.name',
            description: 'storage_location.description',
            myname: 'storage_location.myname',
            mid: 'storage_location.mid',
            type: 'storage_location.type',
            createdAt: 'storage_location.created_at',
            updatedAt: 'storage_location.updated_at',
            isactived: 'storage_location.isactived',
            islocked: 'storage_location.islocked',
            createUid: 'storage_location.create_uid',
            updatedUid: 'storage_location.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('storage_location.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getStoragelocationList(search) {
        const qb = await (0, typeorm_1.getRepository)(storage_location_1.Storagelocation).createQueryBuilder('storage_location');
        const fields = {
            id: 'storage_location.id',
            name: 'storage_location.name',
            description: 'storage_location.description',
            myname: 'storage_location.myname',
            mid: 'storage_location.mid',
            type: 'storage_location.type',
            createdAt: 'storage_location.created_at',
            updatedAt: 'storage_location.updated_at',
            isactived: 'storage_location.isactived',
            islocked: 'storage_location.islocked',
            createUid: 'storage_location.create_uid',
            updatedUid: 'storage_location.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("storage_location.isactived='0'");
        qb.orderBy('storage_location.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.StoragelocationRepo = StoragelocationRepo;
//# sourceMappingURL=storage_location_repo.js.map