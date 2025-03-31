"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class SkillRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Skill).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Skill).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Skill).update(Ids[0], {
            isactived: '1',
        });
    }
    async getSkillsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Skill).createQueryBuilder('skill');
        const fields = {
            id: 'skill.id',
            name: 'skill.name',
            description: 'skill.description',
            createdAt: 'skill.created_at',
            updatedAt: 'skill.updated_at',
            isactived: 'skill.isactived',
            islocked: 'skill.islocked',
            createUid: 'skill.create_uid',
            updatedUid: 'skill.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'skill', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getSkillAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Skill).createQueryBuilder('skill');
        const fields = {
            id: 'skill.id',
            name: 'skill.name',
            description: 'skill.description',
            createdAt: 'skill.created_at',
            updatedAt: 'skill.updated_at',
            isactived: 'skill.isactived',
            islocked: 'skill.islocked',
            createUid: 'skill.create_uid',
            updatedUid: 'skill.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("skill.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['skill.name', 'skill.description'], search.search);
        qb.orderBy('skill.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getSkillAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Skill).createQueryBuilder('skill');
        const fields = {
            id: 'skill.id',
            name: 'skill.name',
            description: 'skill.description',
            createdAt: 'skill.created_at',
            updatedAt: 'skill.updated_at',
            isactived: 'skill.isactived',
            islocked: 'skill.islocked',
            createUid: 'skill.create_uid',
            updatedUid: 'skill.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getSkill(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Skill).createQueryBuilder('skill');
        const fields = {
            id: 'skill.id',
            name: 'skill.name',
            description: 'skill.description',
            createdAt: 'skill.created_at',
            updatedAt: 'skill.updated_at',
            isactived: 'skill.isactived',
            islocked: 'skill.islocked',
            createUid: 'skill.create_uid',
            updatedUid: 'skill.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("skill.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['skill.name', 'skill.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.SkillRepo = SkillRepo;
//# sourceMappingURL=SkillRepo.js.map