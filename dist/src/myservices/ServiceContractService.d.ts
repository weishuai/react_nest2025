import { ServiceContractSearchVo, ServiceContractVo } from '../myvo/ServiceContractVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ServiceContractService {
    private serviceContractRepo;
    private customizationRepo;
    private serviceItemRepo;
    findOneServiceContract(Id: string): Promise<any>;
    createServiceContract(serviceContractVo: ServiceContractVo): Promise<import("typeorm").InsertResult>;
    updateaServiceContract(Id: string, user_id: string, serviceContractVo: ServiceContractVo): Promise<import("typeorm").UpdateResult>;
    removeServiceContract(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getServiceContractById(id: string): Promise<any>;
    getServiceContract(userId: string, search: ServiceContractSearchVo): Promise<any[]>;
    getServiceContractAll(search: ServiceContractSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getServiceContractAllView(): Promise<any[]>;
}
