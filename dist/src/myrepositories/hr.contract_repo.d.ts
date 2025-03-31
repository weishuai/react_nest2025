import { HrContractSearchVo, HrContractVo } from '../myvo/hr.contract_vo';
export declare class HrContractRepo {
    create(hrContractVo: HrContractVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, hrContractVo: HrContractVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getHrContractsById(id: string): Promise<any>;
    getHrContractAll(): Promise<any[]>;
    getHrContractAllView(): Promise<any[]>;
    getHrContractList(search: HrContractSearchVo): Promise<any[]>;
}
