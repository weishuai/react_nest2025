import { HrContractSearchVo, HrContractVo } from '../myvo/hr_contract_vo';
export declare class HrContractService {
    private hrContractRepo;
    findOneHrContract(Id: string): Promise<any>;
    createHrContract(hrContractVo: HrContractVo): Promise<import("typeorm").InsertResult>;
    updateaHrContract(Id: string, user_id: string, hrContractVo: HrContractVo): Promise<import("typeorm").UpdateResult>;
    removeHrContract(Ids: string): Promise<import("typeorm").UpdateResult>;
    getHrContractById(id: string): Promise<any>;
    getHrContractList(search: HrContractSearchVo): Promise<any[]>;
    getHrContractAll(): Promise<any[]>;
    getHrContractAllView(): Promise<any[]>;
}
