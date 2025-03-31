import { ProcurePriceSearchVo, ProcurePriceVo } from '../myvo/procure_price_vo';
export declare class ProcurePriceService {
    private procurePriceRepo;
    findOneProcurePrice(Id: string): Promise<any>;
    createProcurePrice(procurePriceVo: ProcurePriceVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePrice(Id: string, user_id: string, procurePriceVo: ProcurePriceVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePrice(Ids: string): Promise<import("typeorm").UpdateResult>;
    getProcurePriceById(id: string): Promise<any>;
    getProcurePriceList(search: ProcurePriceSearchVo): Promise<any[]>;
    getProcurePriceAll(): Promise<any[]>;
    getProcurePriceAllView(): Promise<any[]>;
}
