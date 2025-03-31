import { StoreMoveVo } from '../myvo/store_move_vo';
export declare class StoreMoveController {
    private storeMoveService;
    createStoreMove(storeMoveVo: StoreMoveVo): Promise<import("typeorm").InsertResult>;
    updateaStoreMove(userToken: string, Id: string, storeMoveVo: StoreMoveVo): Promise<import("typeorm").UpdateResult>;
    removeStoreMove(Id: string): Promise<import("typeorm").UpdateResult>;
    getStoreMoveById(Id: string): Promise<any>;
    getStoreMoveList(query: any): Promise<any[]>;
    getStoreMoveAll(): Promise<any[]>;
    getStoreMoveAllView(): Promise<any[]>;
}
