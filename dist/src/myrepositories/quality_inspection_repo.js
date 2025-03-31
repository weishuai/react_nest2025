"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityInspectionRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const quality_inspection_1 = require("../myentities/quality_inspection");
class QualityInspectionRepo {
    async create(qualityInspectionVo) {
        return await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).insert(qualityInspectionVo);
    }
    async update(Id, user_id, qualityInspectionVo) {
        qualityInspectionVo.updatedAt = new Date();
        qualityInspectionVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).update(Id, qualityInspectionVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).update(Ids[0], {
            isactived: '1',
        });
    }
    async getQualityInspectionsById(id) {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).createQueryBuilder('quality_inspection');
        const fields = {
            id: 'quality_inspection.id',
            name: 'quality_inspection.name',
            fhname: 'quality_inspection.fhname',
            title: 'quality_inspection.title',
            team: 'quality_inspection.team',
            productTmlp: 'quality_inspection.productTmlp',
            head: 'quality_inspection.head',
            product: 'quality_inspection.product',
            label: 'quality_inspection.label',
            batch: 'quality_inspection.batch',
            rootCause: 'quality_inspection.rootCause',
            pick: 'quality_inspection.pick',
            priority: 'quality_inspection.priority',
            fhtxt: 'quality_inspection.fhtxt',
            inspectionItems: 'quality_inspection.inspectionItems',
            checkAddress: 'quality_inspection.checkAddress',
            correctiveAction: 'quality_inspection.correctiveAction',
            preventiveActions: 'quality_inspection.preventiveActions',
            sundry: 'quality_inspection.sundry',
            description: 'quality_inspection.description',
            createdAt: 'quality_inspection.created_at',
            updatedAt: 'quality_inspection.updated_at',
            isactived: 'quality_inspection.isactived',
            islocked: 'quality_inspection.islocked',
            createUid: 'quality_inspection.create_uid',
            updatedUid: 'quality_inspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'quality_inspection', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getQualityInspectionAll() {
        const qb = (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).createQueryBuilder('quality_inspection');
        const fields = {
            id: 'quality_inspection.id',
            name: 'quality_inspection.name',
            description: 'quality_inspection.description',
            fhname: 'quality_inspection.fhname',
            title: 'quality_inspection.title',
            team: 'quality_inspection.team',
            productTmlp: 'quality_inspection.productTmlp',
            head: 'quality_inspection.head',
            product: 'quality_inspection.product',
            label: 'quality_inspection.label',
            batch: 'quality_inspection.batch',
            rootCause: 'quality_inspection.rootCause',
            pick: 'quality_inspection.pick',
            priority: 'quality_inspection.priority',
            fhtxt: 'quality_inspection.fhtxt',
            inspectionItems: 'quality_inspection.inspectionItems',
            checkAddress: 'quality_inspection.checkAddress',
            correctiveAction: 'quality_inspection.correctiveAction',
            preventiveActions: 'quality_inspection.preventiveActions',
            sundry: 'quality_inspection.sundry',
            createdAt: 'quality_inspection.created_at',
            updatedAt: 'quality_inspection.updated_at',
            isactived: 'quality_inspection.isactived',
            islocked: 'quality_inspection.islocked',
            createUid: 'quality_inspection.create_uid',
            updatedUid: 'quality_inspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quality_inspection.isactived='0'");
        qb.orderBy('quality_inspection.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getQualityInspectionAllView() {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).createQueryBuilder('quality_inspection');
        const fields = {
            id: 'quality_inspection.id',
            name: 'quality_inspection.name',
            description: 'quality_inspection.description',
            fhname: 'quality_inspection.fhname',
            title: 'quality_inspection.title',
            team: 'quality_inspection.team',
            productTmlp: 'quality_inspection.productTmlp',
            head: 'quality_inspection.head',
            product: 'quality_inspection.product',
            label: 'quality_inspection.label',
            batch: 'quality_inspection.batch',
            rootCause: 'quality_inspection.rootCause',
            pick: 'quality_inspection.pick',
            priority: 'quality_inspection.priority',
            fhtxt: 'quality_inspection.fhtxt',
            inspectionItems: 'quality_inspection.inspectionItems',
            checkAddress: 'quality_inspection.checkAddress',
            correctiveAction: 'quality_inspection.correctiveAction',
            preventiveActions: 'quality_inspection.preventiveActions',
            sundry: 'quality_inspection.sundry',
            createdAt: 'quality_inspection.created_at',
            updatedAt: 'quality_inspection.updated_at',
            isactived: 'quality_inspection.isactived',
            islocked: 'quality_inspection.islocked',
            createUid: 'quality_inspection.create_uid',
            updatedUid: 'quality_inspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('quality_inspection.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getQualityInspectionList(search) {
        const qb = await (0, typeorm_1.getRepository)(quality_inspection_1.QualityInspection).createQueryBuilder('quality_inspection');
        const fields = {
            id: 'quality_inspection.id',
            name: 'quality_inspection.name',
            description: 'quality_inspection.description',
            fhname: 'quality_inspection.fhname',
            title: 'quality_inspection.title',
            team: 'quality_inspection.team',
            productTmlp: 'quality_inspection.productTmlp',
            head: 'quality_inspection.head',
            product: 'quality_inspection.product',
            label: 'quality_inspection.label',
            batch: 'quality_inspection.batch',
            rootCause: 'quality_inspection.rootCause',
            pick: 'quality_inspection.pick',
            priority: 'quality_inspection.priority',
            fhtxt: 'quality_inspection.fhtxt',
            inspectionItems: 'quality_inspection.inspectionItems',
            checkAddress: 'quality_inspection.checkAddress',
            correctiveAction: 'quality_inspection.correctiveAction',
            preventiveActions: 'quality_inspection.preventiveActions',
            sundry: 'quality_inspection.sundry',
            createdAt: 'quality_inspection.created_at',
            updatedAt: 'quality_inspection.updated_at',
            isactived: 'quality_inspection.isactived',
            islocked: 'quality_inspection.islocked',
            createUid: 'quality_inspection.create_uid',
            updatedUid: 'quality_inspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quality_inspection.isactived='0'");
        qb.orderBy('quality_inspection.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.QualityInspectionRepo = QualityInspectionRepo;
//# sourceMappingURL=quality_inspection_repo.js.map