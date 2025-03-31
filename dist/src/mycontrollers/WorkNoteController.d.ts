import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';
export declare class WorkNoteController {
    private workNoteService;
    createWorkNote(WorkNoteVo: WorkNoteVo): Promise<import("typeorm").InsertResult>;
    updateaWorkNote(userToken: string, Id: string, WorkNoteVo: WorkNoteVo): Promise<import("typeorm").UpdateResult>;
    removeWorkNote(Id: string): Promise<import("typeorm").UpdateResult>;
    getWorkNoteById(Id: string): Promise<any>;
    getWorkNote(search: WorkNoteSearchVo): Promise<any[]>;
    getWorkNoteAll(search: WorkNoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkNoteAllView(): Promise<any[]>;
}
