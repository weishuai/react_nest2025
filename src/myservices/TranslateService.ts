import { TranslateRepo } from '../myrepositories';
import { TranslateSearchVo, TranslateVo } from '../myvo/TranslateVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TranslateService {
  private translateRepo = new TranslateRepo();

  async findOneTranslate(Id: string) {
    ///const issue = new Fhtest();
    return this.translateRepo.getTranslatesById(Id);
  }

  async createTranslate(translateVo: TranslateVo) {
    ///translateVo.id = id();
    return this.translateRepo.create(translateVo);
  }

  async updateaTranslate(
    Id: string,
    user_id: string,
    translateVo: TranslateVo,
  ) {
    translateVo.updatedAt = new Date();

    translateVo.updatedUid = user_id;
    return this.translateRepo.update(Id, user_id, translateVo);
  }

  async removeTranslate(Ids: string[]) {
    return this.translateRepo.remove(Ids);
  }

  async getTranslateById(id: string) {
    return this.translateRepo.getTranslatesById(id);
  }

  async getTranslate(search: TranslateSearchVo) {
    return this.translateRepo.getTranslate(search);
  }

  async getTranslateAll(search: TranslateSearchVo) {
    return this.translateRepo.getTranslateAll(search);
  }

  async getTranslateAllView() {
    return this.translateRepo.getTranslateAllView();
  }
}
