import { NoteRepo } from '../myrepositories';
import { NoteSearchVo, NoteVo } from '../myvo/NoteVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class NoteService {
  private noteRepo = new NoteRepo();

  async findOneNote(Id: string) {
    ///const issue = new Fhtest();
    return this.noteRepo.getnotesById(Id);
  }

  async createNote(noteVo: NoteVo) {
    ///noteVo.id = id();
    return this.noteRepo.create(noteVo);
  }

  async updateaNote(Id: string, user_id: string, noteVo: NoteVo) {
    noteVo.updatedAt = new Date();

    noteVo.updatedUid = user_id;
    return this.noteRepo.update(Id, user_id, noteVo);
  }

  async removeNote(Ids: string[]) {
    return this.noteRepo.remove(Ids);
  }

  async getNoteById(id: string) {
    return this.noteRepo.getnotesById(id);
  }

  async getNote(search: NoteSearchVo) {
    return this.noteRepo.getnote(search);
  }

  async getNoteAll(search: NoteSearchVo) {
    return this.noteRepo.getnoteAll(search);
  }
}
