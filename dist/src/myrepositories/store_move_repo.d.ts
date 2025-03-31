import { StoreMoveSearchVo, StoreMoveVo } from '../myvo/store_move_vo';
export declare class StoreMoveRepo {
    create(storeMoveVo: StoreMoveVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, storeMoveVo: StoreMoveVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStoreMovesById(id: string): Promise<any>;
    getStoreMoveAll(): Promise<any[]>;
    getStoreMoveAllView(): Promise<any[]>;
    getStoreMoveList(search: StoreMoveSearchVo): Promise<any[]>;
}
