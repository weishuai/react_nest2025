import { StoreMoveSearchVo, StoreMoveVo } from '../myvo/store_move_vo';
export declare class StoreMoveService {
    private storeMoveRepo;
    findOneStoreMove(Id: string): Promise<any>;
    createStoreMove(storeMoveVo: StoreMoveVo): Promise<import("typeorm").InsertResult>;
    updateaStoreMove(Id: string, user_id: string, storeMoveVo: StoreMoveVo): Promise<import("typeorm").UpdateResult>;
    removeStoreMove(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStoreMoveById(id: string): Promise<any>;
    getStoreMoveList(search: StoreMoveSearchVo): Promise<any[]>;
    getStoreMoveAll(): Promise<any[]>;
    getStoreMoveAllView(): Promise<any[]>;
}
