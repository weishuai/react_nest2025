"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrContractRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const hr_contract_1 = require("../myentities/hr_contract");
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
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr_contract');
        const fields = {
            id: 'hr_contract.id',
            name: 'hr_contract.name',
            fhname: 'hr_contract.fhname',
            staff: 'hr_contract.staff',
            department: 'hr_contract.department',
            job: 'hr_contract.job',
            company: 'hr_contract.company',
            payStructure: 'hr_contract.payStructure',
            startDate: 'hr_contract.startDate',
            firstContractDate: 'hr_contract.firstContractDate',
            endDate: 'hr_contract.endDate',
            workArrangement: 'hr_contract.workArrangement',
            HRSupervisor: 'hr_contract.HRSupervisor',
            wages: 'hr_contract.wages',
            fhtxt: 'hr_contract.fhtxt',
            description: 'hr_contract.description',
            createdAt: 'hr_contract.created_at',
            updatedAt: 'hr_contract.updated_at',
            isactived: 'hr_contract.isactived',
            islocked: 'hr_contract.islocked',
            createUid: 'hr_contract.create_uid',
            updatedUid: 'hr_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'hr_contract', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getHrContractAll() {
        const qb = (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr_contract');
        const fields = {
            id: 'hr_contract.id',
            name: 'hr_contract.name',
            description: 'hr_contract.description',
            fhname: 'hr_contract.fhname',
            staff: 'hr_contract.staff',
            department: 'hr_contract.department',
            job: 'hr_contract.job',
            company: 'hr_contract.company',
            payStructure: 'hr_contract.payStructure',
            startDate: 'hr_contract.startDate',
            firstContractDate: 'hr_contract.firstContractDate',
            endDate: 'hr_contract.endDate',
            workArrangement: 'hr_contract.workArrangement',
            HRSupervisor: 'hr_contract.HRSupervisor',
            wages: 'hr_contract.wages',
            fhtxt: 'hr_contract.fhtxt',
            createdAt: 'hr_contract.created_at',
            updatedAt: 'hr_contract.updated_at',
            isactived: 'hr_contract.isactived',
            islocked: 'hr_contract.islocked',
            createUid: 'hr_contract.create_uid',
            updatedUid: 'hr_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("hr_contract.isactived='0'");
        qb.orderBy('hr_contract.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getHrContractAllView() {
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr_contract');
        const fields = {
            id: 'hr_contract.id',
            name: 'hr_contract.name',
            description: 'hr_contract.description',
            fhname: 'hr_contract.fhname',
            staff: 'hr_contract.staff',
            department: 'hr_contract.department',
            job: 'hr_contract.job',
            company: 'hr_contract.company',
            payStructure: 'hr_contract.payStructure',
            startDate: 'hr_contract.startDate',
            firstContractDate: 'hr_contract.firstContractDate',
            endDate: 'hr_contract.endDate',
            workArrangement: 'hr_contract.workArrangement',
            HRSupervisor: 'hr_contract.HRSupervisor',
            wages: 'hr_contract.wages',
            fhtxt: 'hr_contract.fhtxt',
            createdAt: 'hr_contract.created_at',
            updatedAt: 'hr_contract.updated_at',
            isactived: 'hr_contract.isactived',
            islocked: 'hr_contract.islocked',
            createUid: 'hr_contract.create_uid',
            updatedUid: 'hr_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('hr_contract.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getHrContractList(search) {
        const qb = await (0, typeorm_1.getRepository)(hr_contract_1.HrContract).createQueryBuilder('hr_contract');
        const fields = {
            id: 'hr_contract.id',
            name: 'hr_contract.name',
            description: 'hr_contract.description',
            fhname: 'hr_contract.fhname',
            staff: 'hr_contract.staff',
            department: 'hr_contract.department',
            job: 'hr_contract.job',
            company: 'hr_contract.company',
            payStructure: 'hr_contract.payStructure',
            startDate: 'hr_contract.startDate',
            firstContractDate: 'hr_contract.firstContractDate',
            endDate: 'hr_contract.endDate',
            workArrangement: 'hr_contract.workArrangement',
            HRSupervisor: 'hr_contract.HRSupervisor',
            wages: 'hr_contract.wages',
            fhtxt: 'hr_contract.fhtxt',
            createdAt: 'hr_contract.created_at',
            updatedAt: 'hr_contract.updated_at',
            isactived: 'hr_contract.isactived',
            islocked: 'hr_contract.islocked',
            createUid: 'hr_contract.create_uid',
            updatedUid: 'hr_contract.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("hr_contract.isactived='0'");
        qb.orderBy('hr_contract.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.HrContractRepo = HrContractRepo;
//# sourceMappingURL=hr_contract_repo.js.map