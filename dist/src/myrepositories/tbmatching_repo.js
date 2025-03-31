"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbmatchingRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const tbmatching_1 = require("../myentities/tbmatching");
class TbmatchingRepo {
    async create(tbmatchingVo) {
        return await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).insert(tbmatchingVo);
    }
    async update(Id, user_id, tbmatchingVo) {
        tbmatchingVo.updatedAt = new Date();
        tbmatchingVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).update(Id, tbmatchingVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTbmatchingsById(id) {
        const qb = await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).createQueryBuilder('tbmatching');
        const fields = {
            id: 'tbmatching.id',
            name: 'tbmatching.name',
            fhname: 'tbmatching.fhname',
            fhdate: 'tbmatching.fhdate',
            sampleDate: 'tbmatching.sampleDate',
            documentNumber: 'tbmatching.documentNumber',
            customerCode: 'tbmatching.customerCode',
            customerName: 'tbmatching.customerName',
            sampleName: 'tbmatching.sampleName',
            numbe: 'tbmatching.numbe',
            component: 'tbmatching.component',
            appearanceStyle: 'tbmatching.appearanceStyle',
            requirements: 'tbmatching.requirements',
            technology: 'tbmatching.technology',
            mycheck: 'tbmatching.cmyheck',
            registration: 'tbmatching.registration',
            quotation: 'tbmatching.quotation',
            manufacturingOrders: 'tbmatching.manufacturingOrders',
            description: 'tbmatching.description',
            createdAt: 'tbmatching.created_at',
            updatedAt: 'tbmatching.updated_at',
            isactived: 'tbmatching.isactived',
            islocked: 'tbmatching.islocked',
            createUid: 'tbmatching.create_uid',
            updatedUid: 'tbmatching.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'tbmatching', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTbmatchingAll() {
        const qb = (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).createQueryBuilder('tbmatching');
        const fields = {
            id: 'tbmatching.id',
            name: 'tbmatching.name',
            description: 'tbmatching.description',
            fhname: 'tbmatching.fhname',
            fhdate: 'tbmatching.fhdate',
            sampleDate: 'tbmatching.sampleDate',
            documentNumber: 'tbmatching.documentNumber',
            customerCode: 'tbmatching.customerCode',
            customerName: 'tbmatching.customerName',
            sampleName: 'tbmatching.sampleName',
            numbe: 'tbmatching.numbe',
            component: 'tbmatching.component',
            appearanceStyle: 'tbmatching.appearanceStyle',
            requirements: 'tbmatching.requirements',
            technology: 'tbmatching.technology',
            mycheck: 'tbmatching.cmyheck',
            registration: 'tbmatching.registration',
            quotation: 'tbmatching.quotation',
            manufacturingOrders: 'tbmatching.manufacturingOrders',
            createdAt: 'tbmatching.created_at',
            updatedAt: 'tbmatching.updated_at',
            isactived: 'tbmatching.isactived',
            islocked: 'tbmatching.islocked',
            createUid: 'tbmatching.create_uid',
            updatedUid: 'tbmatching.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbmatching.isactived='0'");
        qb.orderBy('tbmatching.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getTbmatchingAllView() {
        const qb = await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).createQueryBuilder('tbmatching');
        const fields = {
            id: 'tbmatching.id',
            name: 'tbmatching.name',
            description: 'tbmatching.description',
            fhname: 'tbmatching.fhname',
            fhdate: 'tbmatching.fhdate',
            sampleDate: 'tbmatching.sampleDate',
            documentNumber: 'tbmatching.documentNumber',
            customerCode: 'tbmatching.customerCode',
            customerName: 'tbmatching.customerName',
            sampleName: 'tbmatching.sampleName',
            numbe: 'tbmatching.numbe',
            component: 'tbmatching.component',
            appearanceStyle: 'tbmatching.appearanceStyle',
            requirements: 'tbmatching.requirements',
            technology: 'tbmatching.technology',
            mycheck: 'tbmatching.cmyheck',
            registration: 'tbmatching.registration',
            quotation: 'tbmatching.quotation',
            manufacturingOrders: 'tbmatching.manufacturingOrders',
            createdAt: 'tbmatching.created_at',
            updatedAt: 'tbmatching.updated_at',
            isactived: 'tbmatching.isactived',
            islocked: 'tbmatching.islocked',
            createUid: 'tbmatching.create_uid',
            updatedUid: 'tbmatching.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('tbmatching.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getTbmatchingList(search) {
        const qb = await (0, typeorm_1.getRepository)(tbmatching_1.Tbmatching).createQueryBuilder('tbmatching');
        const fields = {
            id: 'tbmatching.id',
            name: 'tbmatching.name',
            description: 'tbmatching.description',
            fhname: 'tbmatching.fhname',
            fhdate: 'tbmatching.fhdate',
            sampleDate: 'tbmatching.sampleDate',
            documentNumber: 'tbmatching.documentNumber',
            customerCode: 'tbmatching.customerCode',
            customerName: 'tbmatching.customerName',
            sampleName: 'tbmatching.sampleName',
            numbe: 'tbmatching.numbe',
            component: 'tbmatching.component',
            appearanceStyle: 'tbmatching.appearanceStyle',
            requirements: 'tbmatching.requirements',
            technology: 'tbmatching.technology',
            mycheck: 'tbmatching.cmyheck',
            registration: 'tbmatching.registration',
            quotation: 'tbmatching.quotation',
            manufacturingOrders: 'tbmatching.manufacturingOrders',
            createdAt: 'tbmatching.created_at',
            updatedAt: 'tbmatching.updated_at',
            isactived: 'tbmatching.isactived',
            islocked: 'tbmatching.islocked',
            createUid: 'tbmatching.create_uid',
            updatedUid: 'tbmatching.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbmatching.isactived='0'");
        qb.orderBy('tbmatching.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.TbmatchingRepo = TbmatchingRepo;
//# sourceMappingURL=tbmatching_repo.js.map