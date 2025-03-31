import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class NoteService {
    private noteRepo;
    findOneNote(Id: string): Promise<any>;
    createNote(noteVo: NoteVo): Promise<import("typeorm").InsertResult>;
    updateaNote(Id: string, user_id: string, noteVo: NoteVo): Promise<import("typeorm").UpdateResult>;
    removeNote(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getNoteById(id: string): Promise<any>;
    getNote(search: NoteSearchVo): Promise<any[]>;
    getNoteAll(search: NoteSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
}
