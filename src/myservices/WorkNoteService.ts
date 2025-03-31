import { WorkNoteRepo } from '../myrepositories';
import { WorkNoteSearchVo, WorkNoteVo } from '../myvo/WorkNoteVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class WorkNoteService {
  private workNoteRepo = new WorkNoteRepo();
  async findOneWorkNote(Id: string) {
    ///const issue = new Fhtest();
    return this.workNoteRepo.getWorkNotesById(Id);
  }

  async createWorkNote(workNoteVo: WorkNoteVo) {
    ///workNoteVo.id = id();
    return this.workNoteRepo.create(workNoteVo);
  }

  async updateaWorkNote(Id: string, user_id: string, workNoteVo: WorkNoteVo) {
    workNoteVo.updatedAt = new Date();

    workNoteVo.updatedUid = user_id;
    return this.workNoteRepo.update(Id, user_id, workNoteVo);
  }

  async removeWorkNote(Ids: string[]) {
    return this.workNoteRepo.remove(Ids);
  }

  async getWorkNoteById(id: string) {
    return this.workNoteRepo.getWorkNotesById(id);
  }

  async getWorkNote(search: WorkNoteSearchVo) {
    return this.workNoteRepo.getWorkNote(search);
  }

  async getWorkNoteAll(search: WorkNoteSearchVo) {
    return this.workNoteRepo.getWorkNoteAll(search);
  }

  async getWorkNoteAllView() {
    return this.workNoteRepo.getWorkNoteAllView();
  }
}
