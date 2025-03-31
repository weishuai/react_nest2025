import { SaleContractSearchVo, SaleContractVo } from '../myvo/sale_contract_vo';
export declare class SaleContractService {
    private saleContractRepo;
    findOneSaleContract(Id: string): Promise<any>;
    createSaleContract(saleContractVo: SaleContractVo): Promise<import("typeorm").InsertResult>;
    updateaSaleContract(Id: string, user_id: string, saleContractVo: SaleContractVo): Promise<import("typeorm").UpdateResult>;
    removeSaleContract(Ids: string): Promise<import("typeorm").UpdateResult>;
    getSaleContractById(id: string): Promise<any>;
    getSaleContractList(search: SaleContractSearchVo): Promise<any[]>;
    getSaleContractAll(): Promise<any[]>;
    getSaleContractAllView(): Promise<any[]>;
}
