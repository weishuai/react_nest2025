"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const mywork_1 = require("../myentities/mywork");
class myWorkRepo {
    async create(myworkVo) {
        return await (0, typeorm_1.getRepository)(mywork_1.myWork).insert(myworkVo);
    }
    async update(Id, user_id, myworkVo) {
        myworkVo.updatedAt = new Date();
        myworkVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(mywork_1.myWork).update(Id, myworkVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(mywork_1.myWork).update(Ids[0], {
            isactived: '1',
        });
    }
    async getmyWorksById(id) {
        const qb = await (0, typeorm_1.getRepository)(mywork_1.myWork).createQueryBuilder('mywork');
        const fields = {
            id: 'mywork.id',
            name: 'mywork.name',
            operationName: 'mywork.operationName',
            duration: 'mywork.duration',
            workCenter: 'mywork.workCenter',
            defaultDuration: 'mywork.defaultDuration',
            serialNumber: 'mywork.serialNumber',
            company: 'mywork.company',
            bom: 'mywork.bom',
            worksheet: 'mywork.worksheet',
            fhtext: 'mywork.fhtext',
            description: 'mywork.description',
            createdAt: 'mywork.created_at',
            updatedAt: 'mywork.updated_at',
            isactived: 'mywork.isactived',
            islocked: 'mywork.islocked',
            createUid: 'mywork.create_uid',
            updatedUid: 'mywork.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'mywork', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getmyWorkAll() {
        const qb = (0, typeorm_1.getRepository)(mywork_1.myWork).createQueryBuilder('mywork');
        const fields = {
            id: 'mywork.id',
            name: 'mywork.name',
            description: 'mywork.description',
            operationName: 'mywork.operationName',
            duration: 'mywork.duration',
            workCenter: 'mywork.workCenter',
            defaultDuration: 'mywork.defaultDuration',
            serialNumber: 'mywork.serialNumber',
            company: 'mywork.company',
            bom: 'mywork.bom',
            worksheet: 'mywork.worksheet',
            fhtext: 'mywork.fhtext',
            createdAt: 'mywork.created_at',
            updatedAt: 'mywork.updated_at',
            isactived: 'mywork.isactived',
            islocked: 'mywork.islocked',
            createUid: 'mywork.create_uid',
            updatedUid: 'mywork.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mywork.isactived='0'");
        qb.orderBy('mywork.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getmyWorkAllView() {
        const qb = await (0, typeorm_1.getRepository)(mywork_1.myWork).createQueryBuilder('mywork');
        const fields = {
            id: 'mywork.id',
            name: 'mywork.name',
            description: 'mywork.description',
            operationName: 'mywork.operationName',
            duration: 'mywork.duration',
            workCenter: 'mywork.workCenter',
            defaultDuration: 'mywork.defaultDuration',
            serialNumber: 'mywork.serialNumber',
            company: 'mywork.company',
            bom: 'mywork.bom',
            worksheet: 'mywork.worksheet',
            fhtext: 'mywork.fhtext',
            createdAt: 'mywork.created_at',
            updatedAt: 'mywork.updated_at',
            isactived: 'mywork.isactived',
            islocked: 'mywork.islocked',
            createUid: 'mywork.create_uid',
            updatedUid: 'mywork.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('mywork.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getmyWorkList(search) {
        const qb = await (0, typeorm_1.getRepository)(mywork_1.myWork).createQueryBuilder('mywork');
        const fields = {
            id: 'mywork.id',
            name: 'mywork.name',
            description: 'mywork.description',
            operationName: 'mywork.operationName',
            duration: 'mywork.duration',
            workCenter: 'mywork.workCenter',
            defaultDuration: 'mywork.defaultDuration',
            serialNumber: 'mywork.serialNumber',
            company: 'mywork.company',
            bom: 'mywork.bom',
            worksheet: 'mywork.worksheet',
            fhtext: 'mywork.fhtext',
            createdAt: 'mywork.created_at',
            updatedAt: 'mywork.updated_at',
            isactived: 'mywork.isactived',
            islocked: 'mywork.islocked',
            createUid: 'mywork.create_uid',
            updatedUid: 'mywork.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mywork.isactived='0'");
        qb.orderBy('mywork.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.myWorkRepo = myWorkRepo;
//# sourceMappingURL=mywork_repo.js.map