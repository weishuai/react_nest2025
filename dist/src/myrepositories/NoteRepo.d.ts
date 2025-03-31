import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';
export declare class NoteRepo {
    create(accountTagVo: NoteVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: NoteVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getnotesById(id: string): Promise<any>;
    getnoteAll(search: NoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getnote(search: NoteSearchVo): Promise<any[]>;
}
