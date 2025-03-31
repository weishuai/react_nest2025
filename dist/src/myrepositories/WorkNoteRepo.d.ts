import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';
export declare class WorkNoteRepo {
    create(accountTagVo: WorkNoteVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: WorkNoteVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateWorkNoteVoByMid(mid: string, id: string): Promise<string>;
    getWorkNotesById(id: string): Promise<any>;
    getWorkNoteAll(search: WorkNoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkNoteAllView(): Promise<any[]>;
    getWorkNoteAllByMid(mid: string): Promise<any[]>;
    getWorkNote(search: WorkNoteSearchVo): Promise<any[]>;
}
