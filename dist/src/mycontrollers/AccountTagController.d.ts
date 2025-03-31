import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
export declare class AccountTagController {
    private accountTagService;
    createAccountTag(AccountTagVo: AccountTagVo): Promise<import("typeorm").InsertResult>;
    updateaAccountTag(userToken: string, Id: string, AccountTagVo: AccountTagVo): Promise<import("typeorm").UpdateResult>;
    removeAccountTag(Id: string): Promise<import("typeorm").UpdateResult>;
    getAccountTagById(Id: string): Promise<any>;
    getAccountTag(search: AccountTagSearchVo): Promise<any[]>;
    getAccountTagAll(search: AccountTagSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getAccountTagAllViewOK(): Promise<any[]>;
}
