import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class WorkNoteService {
    private workNoteRepo;
    findOneWorkNote(Id: string): Promise<any>;
    createWorkNote(workNoteVo: WorkNoteVo): Promise<import("typeorm").InsertResult>;
    updateaWorkNote(Id: string, user_id: string, workNoteVo: WorkNoteVo): Promise<import("typeorm").UpdateResult>;
    removeWorkNote(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWorkNoteById(id: string): Promise<any>;
    getWorkNote(search: WorkNoteSearchVo): Promise<any[]>;
    getWorkNoteAll(search: WorkNoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkNoteAllView(): Promise<any[]>;
}
