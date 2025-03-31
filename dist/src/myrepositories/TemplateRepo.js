"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TemplateRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Template).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Template).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Template).update(Ids[0], {
            isactived: '1',
        });
    }
    async gettemplatesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Template).createQueryBuilder('template');
        const fields = {
            id: 'template.id',
            templateName: 'template.template_name',
            photo: 'template.photo',
            templateType: 'template.template_type',
            createdAt: 'template.created_at',
            updatedAt: 'template.updated_at',
            isactived: 'template.isactived',
            islocked: 'template.islocked',
            createUid: 'template.create_uid',
            updatedUid: 'template.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'template', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async gettemplateAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Template).createQueryBuilder('template');
        const fields = {
            id: 'template.id',
            templateName: 'template.template_name',
            photo: 'template.photo',
            templateType: 'template.template_type',
            createdAt: 'template.created_at',
            updatedAt: 'template.updated_at',
            isactived: 'template.isactived',
            islocked: 'template.islocked',
            createUid: 'template.create_uid',
            updatedUid: 'template.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("template.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['template.name', 'template.remark'], search.search);
        qb.orderBy('template.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async gettemplateAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Template).createQueryBuilder('template');
        const fields = {
            id: 'template.id',
            templateName: 'template.template_name',
            photo: 'template.photo',
            templateType: 'template.template_type',
            createdAt: 'template.created_at',
            updatedAt: 'template.updated_at',
            isactived: 'template.isactived',
            islocked: 'template.islocked',
            createUid: 'template.create_uid',
            updatedUid: 'template.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async gettemplate(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Template).createQueryBuilder('template');
        const fields = {
            id: 'template.id',
            templateName: 'template.template_name',
            photo: 'template.photo',
            templateType: 'template.template_type',
            createdAt: 'template.created_at',
            updatedAt: 'template.updated_at',
            isactived: 'template.isactived',
            islocked: 'template.islocked',
            createUid: 'template.create_uid',
            updatedUid: 'template.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("template.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'template', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['template.name', 'template.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TemplateRepo = TemplateRepo;
//# sourceMappingURL=TemplateRepo.js.map