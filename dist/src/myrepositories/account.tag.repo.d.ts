import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
export declare class AccountTagRepo {
    create(accountTagVo: AccountTagVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: AccountTagVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getAccountTagsById(id: string): Promise<any>;
    getAccountTagAll(search: AccountTagSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAccountTagAllView(): Promise<any[]>;
    getAccountTagList(search: AccountTagSearchVo): Promise<any[]>;
}
