import { ServiceContractSearchVo, ServiceContractVo } from '../myvo/ServiceContractVo';
export declare class ServiceContractController {
    private serviceContractService;
    createServiceContract(ServiceContractVo: ServiceContractVo): Promise<import("typeorm").InsertResult>;
    updateaServiceContract(userToken: string, Id: string, ServiceContractVo: ServiceContractVo): Promise<import("typeorm").UpdateResult>;
    removeServiceContract(Id: string): Promise<import("typeorm").UpdateResult>;
    getServiceContractById(Id: string): Promise<any>;
    getServiceContract(userToken: string, search: ServiceContractSearchVo): Promise<any[]>;
    getServiceContractAll(search: ServiceContractSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getServiceContractAllView(): Promise<any[]>;
}
