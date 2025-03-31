import { StoreMoveListSearchVo, StoreMoveListVo } from '../myvo/store_move_list_vo';
export declare class StoreMoveListService {
    private storeMoveListRepo;
    findOneStoreMoveList(Id: string): Promise<any>;
    createStoreMoveList(storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").InsertResult>;
    updateaStoreMoveList(Id: string, user_id: string, storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").UpdateResult>;
    removeStoreMoveList(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStoreMoveListById(id: string): Promise<any>;
    getStoreMoveListList(search: StoreMoveListSearchVo): Promise<any[]>;
    getStoreMoveListAll(): Promise<any[]>;
    getStoreMoveListAllView(): Promise<any[]>;
}
