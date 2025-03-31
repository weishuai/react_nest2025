"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkCenterRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const mywork_center_1 = require("../myentities/mywork_center");
class myWorkCenterRepo {
    async create(myworkCenterVo) {
        return await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).insert(myworkCenterVo);
    }
    async update(Id, user_id, myworkCenterVo) {
        myworkCenterVo.updatedAt = new Date();
        myworkCenterVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).update(Id, myworkCenterVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).update(Ids[0], {
            isactived: '1',
        });
    }
    async getmyWorkCentersById(id) {
        const qb = await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).createQueryBuilder('mywork_center');
        const fields = {
            id: 'mywork_center.id',
            name: 'mywork_center.name',
            workcenter: 'mywork_center.workcenter',
            code: 'mywork_center.code',
            title: 'mywork_center.title',
            workingHours: 'mywork_center.working_hours',
            fhreplace: 'mywork_center.fhreplace',
            timeEfficiency: 'mywork_center.time_efficiency',
            capacity: 'mywork_center.capacity',
            oee: 'mywork_center.oee',
            setTime: 'mywork_center.set_time',
            cleaningTime: 'mywork_center.cleaning_time',
            hourlyCost: 'mywork_center.hourly_cost',
            description: 'mywork_center.description',
            createdAt: 'mywork_center.created_at',
            updatedAt: 'mywork_center.updated_at',
            isactived: 'mywork_center.isactived',
            islocked: 'mywork_center.islocked',
            createUid: 'mywork_center.create_uid',
            updatedUid: 'mywork_center.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'mywork_center', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getmyWorkCenterAll() {
        const qb = (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).createQueryBuilder('mywork_center');
        const fields = {
            id: 'mywork_center.id',
            name: 'mywork_center.name',
            description: 'mywork_center.description',
            workcenter: 'mywork_center.workcenter',
            code: 'mywork_center.code',
            title: 'mywork_center.title',
            workingHours: 'mywork_center.working_hours',
            fhreplace: 'mywork_center.fhreplace',
            timeEfficiency: 'mywork_center.time_efficiency',
            capacity: 'mywork_center.capacity',
            oee: 'mywork_center.oee',
            setTime: 'mywork_center.set_time',
            cleaningTime: 'mywork_center.cleaning_time',
            hourlyCost: 'mywork_center.hourly_cost',
            createdAt: 'mywork_center.created_at',
            updatedAt: 'mywork_center.updated_at',
            isactived: 'mywork_center.isactived',
            islocked: 'mywork_center.islocked',
            createUid: 'mywork_center.create_uid',
            updatedUid: 'mywork_center.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mywork_center.isactived='0'");
        qb.orderBy('mywork_center.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getmyWorkCenterAllView() {
        const qb = await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).createQueryBuilder('mywork_center');
        const fields = {
            id: 'mywork_center.id',
            name: 'mywork_center.name',
            description: 'mywork_center.description',
            workcenter: 'mywork_center.workcenter',
            code: 'mywork_center.code',
            title: 'mywork_center.title',
            workingHours: 'mywork_center.working_hours',
            fhreplace: 'mywork_center.fhreplace',
            timeEfficiency: 'mywork_center.time_efficiency',
            capacity: 'mywork_center.capacity',
            oee: 'mywork_center.oee',
            setTime: 'mywork_center.set_time',
            cleaningTime: 'mywork_center.cleaning_time',
            hourlyCost: 'mywork_center.hourly_cost',
            createdAt: 'mywork_center.created_at',
            updatedAt: 'mywork_center.updated_at',
            isactived: 'mywork_center.isactived',
            islocked: 'mywork_center.islocked',
            createUid: 'mywork_center.create_uid',
            updatedUid: 'mywork_center.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('mywork_center.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getmyWorkCenterList(search) {
        const qb = await (0, typeorm_1.getRepository)(mywork_center_1.myWorkCenter).createQueryBuilder('mywork_center');
        const fields = {
            id: 'mywork_center.id',
            name: 'mywork_center.name',
            description: 'mywork_center.description',
            workcenter: 'mywork_center.workcenter',
            code: 'mywork_center.code',
            title: 'mywork_center.title',
            workingHours: 'mywork_center.working_hours',
            fhreplace: 'mywork_center.fhreplace',
            timeEfficiency: 'mywork_center.time_efficiency',
            capacity: 'mywork_center.capacity',
            oee: 'mywork_center.oee',
            setTime: 'mywork_center.set_time',
            cleaningTime: 'mywork_center.cleaning_time',
            hourlyCost: 'mywork_center.hourly_cost',
            createdAt: 'mywork_center.created_at',
            updatedAt: 'mywork_center.updated_at',
            isactived: 'mywork_center.isactived',
            islocked: 'mywork_center.islocked',
            createUid: 'mywork_center.create_uid',
            updatedUid: 'mywork_center.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("mywork_center.isactived='0'");
        qb.orderBy('mywork_center.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.myWorkCenterRepo = myWorkCenterRepo;
//# sourceMappingURL=mywork_center_repo.js.map