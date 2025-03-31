"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualitylnspectionItemRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const quality_inspection_item_1 = require("../myentities/quality_inspection_item");
class QualitylnspectionItemRepo {
    async create(qualitylnspectionItemVo) {
        return await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).insert(qualitylnspectionItemVo);
    }
    async update(Id, user_id, qualitylnspectionItemVo) {
        qualitylnspectionItemVo.updatedAt = new Date();
        qualitylnspectionItemVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).update(Id, qualitylnspectionItemVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).update(Ids[0], {
            isactived: '1',
        });
    }
    async getQualitylnspectionItemsById(id) {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
        const fields = {
            id: 'quality_inspection_item.id',
            name: 'quality_inspection_item.name',
            mid: 'quality_inspection_item.mid',
            fhitem: 'quality_inspection_item.fhitem',
            fhtxt: 'quality_inspection_item.fhtxt',
            fhnotes: 'quality_inspection_item.fhnotes',
            description: 'quality_inspection_item.description',
            createdAt: 'quality_inspection_item.created_at',
            updatedAt: 'quality_inspection_item.updated_at',
            isactived: 'quality_inspection_item.isactived',
            islocked: 'quality_inspection_item.islocked',
            createUid: 'quality_inspection_item.create_uid',
            updatedUid: 'quality_inspection_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'quality_inspection_item', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getQualitylnspectionItemAll() {
        const qb = (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
        const fields = {
            id: 'quality_inspection_item.id',
            name: 'quality_inspection_item.name',
            description: 'quality_inspection_item.description',
            mid: 'quality_inspection_item.mid',
            fhitem: 'quality_inspection_item.fhitem',
            fhtxt: 'quality_inspection_item.fhtxt',
            fhnotes: 'quality_inspection_item.fhnotes',
            createdAt: 'quality_inspection_item.created_at',
            updatedAt: 'quality_inspection_item.updated_at',
            isactived: 'quality_inspection_item.isactived',
            islocked: 'quality_inspection_item.islocked',
            createUid: 'quality_inspection_item.create_uid',
            updatedUid: 'quality_inspection_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quality_inspection_item.isactived='0'");
        qb.orderBy('quality_inspection_item.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getQualitylnspectionItemAllView() {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
        const fields = {
            id: 'quality_inspection_item.id',
            name: 'quality_inspection_item.name',
            description: 'quality_inspection_item.description',
            mid: 'quality_inspection_item.mid',
            fhitem: 'quality_inspection_item.fhitem',
            fhtxt: 'quality_inspection_item.fhtxt',
            fhnotes: 'quality_inspection_item.fhnotes',
            createdAt: 'quality_inspection_item.created_at',
            updatedAt: 'quality_inspection_item.updated_at',
            isactived: 'quality_inspection_item.isactived',
            islocked: 'quality_inspection_item.islocked',
            createUid: 'quality_inspection_item.create_uid',
            updatedUid: 'quality_inspection_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('quality_inspection_item.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getQualitylnspectionItemList(search) {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_item_1.QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
        const fields = {
            id: 'quality_inspection_item.id',
            name: 'quality_inspection_item.name',
            description: 'quality_inspection_item.description',
            mid: 'quality_inspection_item.mid',
            fhitem: 'quality_inspection_item.fhitem',
            fhtxt: 'quality_inspection_item.fhtxt',
            fhnotes: 'quality_inspection_item.fhnotes',
            createdAt: 'quality_inspection_item.created_at',
            updatedAt: 'quality_inspection_item.updated_at',
            isactived: 'quality_inspection_item.isactived',
            islocked: 'quality_inspection_item.islocked',
            createUid: 'quality_inspection_item.create_uid',
            updatedUid: 'quality_inspection_item.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quality_inspection_item.isactived='0'");
        qb.orderBy('quality_inspection_item.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.QualitylnspectionItemRepo = QualitylnspectionItemRepo;
//# sourceMappingURL=quality_inspection_item_repo.js.map