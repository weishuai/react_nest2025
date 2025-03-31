import { LanguageRepo } from '../myrepositories';
import { LanguageSearchVo, LanguageVo } from '../myvo/LanguageVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class LanguageService {
  private languageRepo = new LanguageRepo();

  async findOneLanguage(Id: string) {
    ///const issue = new Fhtest();
    return this.languageRepo.getLanguagesById(Id);
  }

  async createLanguage(languageVo: LanguageVo) {
    ///languageVo.id = id();
    return this.languageRepo.create(languageVo);
  }

  async updateaLanguage(Id: string, user_id: string, languageVo: LanguageVo) {
    languageVo.updatedAt = new Date();

    languageVo.updatedUid = user_id;
    return this.languageRepo.update(Id, user_id, languageVo);
  }

  async removeLanguage(Ids: string[]) {
    return this.languageRepo.remove(Ids);
  }
  async getLanguageById(id: string) {
    return this.languageRepo.getLanguagesById(id);
  }

  async getLanguage(search: LanguageSearchVo) {
    return this.languageRepo.getLanguage(search);
  }

  async getLanguageAll(search: LanguageSearchVo) {
    return this.languageRepo.getLanguageAll(search);
  }

  async getLanguageAllView() {
    return this.languageRepo.getLanguageAllView();
  }
}
