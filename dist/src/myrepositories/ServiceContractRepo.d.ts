import { ServiceContractSearchVo, ServiceContractVo } from '../myvo/ServiceContractVo';
export declare class ServiceContractRepo {
    create(accountTagVo: ServiceContractVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ServiceContractVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getserviceContractsById(id: string): Promise<any>;
    getserviceContractAll(search: ServiceContractSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getserviceContractAllView(): Promise<any[]>;
    getserviceContract(userId: string, search: ServiceContractSearchVo): Promise<any[]>;
}
