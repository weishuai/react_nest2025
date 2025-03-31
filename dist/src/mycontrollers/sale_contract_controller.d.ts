import { SaleContractVo } from '../myvo/sale_contract_vo';
export declare class SaleContractController {
    private saleContractService;
    createSaleContract(saleContractVo: SaleContractVo): Promise<import("typeorm").InsertResult>;
    updateaSaleContract(userToken: string, Id: string, saleContractVo: SaleContractVo): Promise<import("typeorm").UpdateResult>;
    removeSaleContract(Id: string): Promise<import("typeorm").UpdateResult>;
    getSaleContractById(Id: string): Promise<any>;
    getSaleContractList(query: any): Promise<any[]>;
    getSaleContractAll(): Promise<any[]>;
    getSaleContractAllView(): Promise<any[]>;
}
