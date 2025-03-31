"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class StageRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Stage).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Stage).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Stage).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStagesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Stage).createQueryBuilder('stage');
        const fields = {
            id: 'stage.id',
            name: 'stage.name',
            description: 'stage.description',
            createdAt: 'stage.created_at',
            updatedAt: 'stage.updated_at',
            isactived: 'stage.isactived',
            islocked: 'stage.islocked',
            createUid: 'stage.create_uid',
            updatedUid: 'stage.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'stage', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStageAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Stage).createQueryBuilder('stage');
        const fields = {
            id: 'stage.id',
            name: 'stage.name',
            description: 'stage.description',
            createdAt: 'stage.created_at',
            updatedAt: 'stage.updated_at',
            isactived: 'stage.isactived',
            islocked: 'stage.islocked',
            createUid: 'stage.create_uid',
            updatedUid: 'stage.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stage.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['stage.name', 'stage.description'], search.search);
        qb.orderBy('stage.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getStageAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Stage).createQueryBuilder('stage');
        const fields = {
            id: 'stage.id',
            name: 'stage.name',
            description: 'stage.description',
            createdAt: 'stage.created_at',
            updatedAt: 'stage.updated_at',
            isactived: 'stage.isactived',
            islocked: 'stage.islocked',
            createUid: 'stage.create_uid',
            updatedUid: 'stage.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getStage(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Stage).createQueryBuilder('stage');
        const fields = {
            id: 'stage.id',
            name: 'stage.name',
            description: 'stage.description',
            createdAt: 'stage.created_at',
            updatedAt: 'stage.updated_at',
            isactived: 'stage.isactived',
            islocked: 'stage.islocked',
            createUid: 'stage.create_uid',
            updatedUid: 'stage.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("stage.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'stage', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['stage.name', 'stage.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.StageRepo = StageRepo;
//# sourceMappingURL=StageRepo.js.map