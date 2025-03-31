"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrContractRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const hr_contract_1 = require("../myentities/hr.contract");
class HrContractRepo {
    async create(hrContractVo) {
        return await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).insert(hrContractVo);
    }
    async update(Id, user_id, hrContractVo) {
        hrContractVo.updatedAt = new Date();
        hrContractVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).update(Id, hrContractVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).update(Ids[0], {
            isactived: '1',
        });
    }
    async getHrContractsById(id) {
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr.contract');
        const fields = {
            id: 'hr.contract.id',
            name: 'hr.contract.name',
            fhname: 'hr.contract.fhname',
            staff: 'hr.contract.staff',
            department: 'hr.contract.department',
            job: 'hr.contract.job',
            company: 'hr.contract.company',
            payStructure: 'hr.contract.payStructure',
            startDate: 'hr.contract.startDate',
            firstContractDate: 'hr.contract.firstContractDate',
            endDate: 'hr.contract.endDate',
            workArrangement: 'hr.contract.workArrangement',
            HRSupervisor: 'hr.contract.HRSupervisor',
            wages: 'hr.contract.wages',
            fhtxt: 'hr.contract.fhtxt',
            description: 'hr.contract.description',
            createdAt: 'hr.contract.created_at',
            updatedAt: 'hr.contract.updated_at',
            isactived: 'hr.contract.isactived',
            islocked: 'hr.contract.islocked',
            createUid: 'hr.contract.create_uid',
            updatedUid: 'hr.contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'hr.contract', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getHrContractAll() {
        const qb = (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr.contract');
        const fields = {
            id: 'hr.contract.id',
            name: 'hr.contract.name',
            description: 'hr.contract.description',
            fhname: 'hr.contract.fhname',
            staff: 'hr.contract.staff',
            department: 'hr.contract.department',
            job: 'hr.contract.job',
            company: 'hr.contract.company',
            payStructure: 'hr.contract.payStructure',
            startDate: 'hr.contract.startDate',
            firstContractDate: 'hr.contract.firstContractDate',
            endDate: 'hr.contract.endDate',
            workArrangement: 'hr.contract.workArrangement',
            HRSupervisor: 'hr.contract.HRSupervisor',
            wages: 'hr.contract.wages',
            fhtxt: 'hr.contract.fhtxt',
            createdAt: 'hr.contract.created_at',
            updatedAt: 'hr.contract.updated_at',
            isactived: 'hr.contract.isactived',
            islocked: 'hr.contract.islocked',
            createUid: 'hr.contract.create_uid',
            updatedUid: 'hr.contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("hr.contract.isactived='0'");
        qb.orderBy('hr.contract.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getHrContractAllView() {
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr.contract');
        const fields = {
            id: 'hr.contract.id',
            name: 'hr.contract.name',
            description: 'hr.contract.description',
            fhname: 'hr.contract.fhname',
            staff: 'hr.contract.staff',
            department: 'hr.contract.department',
            job: 'hr.contract.job',
            company: 'hr.contract.company',
            payStructure: 'hr.contract.payStructure',
            startDate: 'hr.contract.startDate',
            firstContractDate: 'hr.contract.firstContractDate',
            endDate: 'hr.contract.endDate',
            workArrangement: 'hr.contract.workArrangement',
            HRSupervisor: 'hr.contract.HRSupervisor',
            wages: 'hr.contract.wages',
            fhtxt: 'hr.contract.fhtxt',
            createdAt: 'hr.contract.created_at',
            updatedAt: 'hr.contract.updated_at',
            isactived: 'hr.contract.isactived',
            islocked: 'hr.contract.islocked',
            createUid: 'hr.contract.create_uid',
            updatedUid: 'hr.contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('hr.contract.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getHrContractList(search) {
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr.contract');
        const fields = {
            id: 'hr.contract.id',
            name: 'hr.contract.name',
            description: 'hr.contract.description',
            fhname: 'hr.contract.fhname',
            staff: 'hr.contract.staff',
            department: 'hr.contract.department',
            job: 'hr.contract.job',
            company: 'hr.contract.company',
            payStructure: 'hr.contract.payStructure',
            startDate: 'hr.contract.startDate',
            firstContractDate: 'hr.contract.firstContractDate',
            endDate: 'hr.contract.endDate',
            workArrangement: 'hr.contract.workArrangement',
            HRSupervisor: 'hr.contract.HRSupervisor',
            wages: 'hr.contract.wages',
            fhtxt: 'hr.contract.fhtxt',
            createdAt: 'hr.contract.created_at',
            updatedAt: 'hr.contract.updated_at',
            isactived: 'hr.contract.isactived',
            islocked: 'hr.contract.islocked',
            createUid: 'hr.contract.create_uid',
            updatedUid: 'hr.contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("hr.contract.isactived='0'");
        qb.orderBy('hr.contract.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.HrContractRepo = HrContractRepo;
//# sourceMappingURL=hr.contract_repo.js.map