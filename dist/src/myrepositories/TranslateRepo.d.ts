import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';
export declare class TranslateRepo {
    create(accountTagVo: TranslateVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TranslateVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTranslatesById(id: string): Promise<any>;
    getTranslateAll(search: TranslateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTranslateAllView(): Promise<any[]>;
    getTranslate(search: TranslateSearchVo): Promise<any[]>;
}
