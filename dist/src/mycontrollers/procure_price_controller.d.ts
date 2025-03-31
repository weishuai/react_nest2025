import { ProcurePriceVo } from '../myvo/procure_price_vo';
export declare class ProcurePriceController {
    private procurePriceService;
    createProcurePrice(procurePriceVo: ProcurePriceVo): Promise<import("typeorm").InsertResult>;
    updateaProcurePrice(userToken: string, Id: string, procurePriceVo: ProcurePriceVo): Promise<import("typeorm").UpdateResult>;
    removeProcurePrice(Id: string): Promise<import("typeorm").UpdateResult>;
    getProcurePriceById(Id: string): Promise<any>;
    getProcurePriceList(query: any): Promise<any[]>;
    getProcurePriceAll(): Promise<any[]>;
    getProcurePriceAllView(): Promise<any[]>;
}
