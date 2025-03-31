import { SaleContractSearchVo, SaleContractVo } from '../myvo/sale_contract_vo';
export declare class SaleContractRepo {
    create(saleContractVo: SaleContractVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, saleContractVo: SaleContractVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getSaleContractsById(id: string): Promise<any>;
    getSaleContractAll(): Promise<any[]>;
    getSaleContractAllView(): Promise<any[]>;
    getSaleContractList(search: SaleContractSearchVo): Promise<any[]>;
}
