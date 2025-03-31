import { StoreMoveListVo } from '../myvo/store_move_list_vo';
export declare class StoreMoveListController {
    private storeMoveListService;
    createStoreMoveList(storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").InsertResult>;
    updateaStoreMoveList(userToken: string, Id: string, storeMoveListVo: StoreMoveListVo): Promise<import("typeorm").UpdateResult>;
    removeStoreMoveList(Id: string): Promise<import("typeorm").UpdateResult>;
    getStoreMoveListById(Id: string): Promise<any>;
    getStoreMoveListList(query: any): Promise<any[]>;
    getStoreMoveListAll(): Promise<any[]>;
    getStoreMoveListAllView(): Promise<any[]>;
}
