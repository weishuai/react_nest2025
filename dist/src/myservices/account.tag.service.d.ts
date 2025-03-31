import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
export declare class AccountTagService {
    private accountTagRepo;
    findOneAccountTag(Id: string): Promise<any>;
    createAccountTag(accountTagVo: AccountTagVo): Promise<import("typeorm").InsertResult>;
    updateaAccountTag(Id: string, user_id: string, accountTagVo: AccountTagVo): Promise<import("typeorm").UpdateResult>;
    removeAccountTag(Ids: string): Promise<import("typeorm").UpdateResult>;
    getAccountTagById(id: string): Promise<any>;
    getAccountTagList(search: AccountTagSearchVo): Promise<any[]>;
    getAccountTagAll(search: AccountTagSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAccountTagAllView(): Promise<any[]>;
}
