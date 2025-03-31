import { ProcurePriceSearchVo, ProcurePriceVo } from '../myvo/procure_price_vo';
export declare class ProcurePriceRepo {
    create(procurePriceVo: ProcurePriceVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, procurePriceVo: ProcurePriceVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProcurePricesById(id: string): Promise<any>;
    getProcurePriceAll(): Promise<any[]>;
    getProcurePriceAllView(): Promise<any[]>;
    getProcurePriceList(search: ProcurePriceSearchVo): Promise<any[]>;
}
