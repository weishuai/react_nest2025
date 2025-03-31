import { StoreMoveListSearchVo, StoreMoveListVo } from '../myvo/store_move_list_vo';
export declare class StoreMoveListRepo {
    create(storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStoreMoveListsById(id: string): Promise<any>;
    getStoreMoveListAll(): Promise<any[]>;
    getStoreMoveListAllView(): Promise<any[]>;
    getStoreMoveListList(search: StoreMoveListSearchVo): Promise<any[]>;
}
