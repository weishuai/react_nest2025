import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';
export declare class NoteController {
    private noteService;
    createNote(NoteVo: NoteVo): Promise<import("typeorm").InsertResult>;
    updateaNote(userToken: string, Id: string, NoteVo: NoteVo): Promise<import("typeorm").UpdateResult>;
    removeNote(Id: string): Promise<import("typeorm").UpdateResult>;
    getNoteById(Id: string): Promise<any>;
    getNote(search: NoteSearchVo): Promise<any[]>;
    getNoteAll(search: NoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
