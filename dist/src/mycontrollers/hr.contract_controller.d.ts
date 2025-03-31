import { HrContractVo } from '../myvo/hr.contract_vo';
export declare class HrContractController {
    private hrContractService;
    createHrContract(hrContractVo: HrContractVo): Promise<import("typeorm").InsertResult>;
    updateaHrContract(userToken: string, Id: string, hrContractVo: HrContractVo): Promise<import("typeorm").UpdateResult>;
    removeHrContract(Id: string): Promise<import("typeorm").UpdateResult>;
    getHrContractById(Id: string): Promise<any>;
    getHrContractList(query: any): Promise<any[]>;
    getHrContractAll(): Promise<any[]>;
    getHrContractAllView(): Promise<any[]>;
}
