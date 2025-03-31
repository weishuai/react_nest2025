import { TemplateRepo } from '../myrepositories';
import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TemplateService {
  private templateRepo = new TemplateRepo();

  async findOneTemplate(Id: string) {
    ///const issue = new Fhtest();
    return this.templateRepo.gettemplatesById(Id);
  }

  async createTemplate(templateVo: TemplateVo) {
    //templateVo.id = id();
    return this.templateRepo.create(templateVo);
  }

  async updateaTemplate(Id: string, user_id: string, templateVo: TemplateVo) {
    templateVo.updatedAt = new Date();

    templateVo.updatedUid = user_id;
    return this.templateRepo.update(Id, user_id, templateVo);
  }

  async removeTemplate(Ids: string[]) {
    return this.templateRepo.remove(Ids);
  }

  async getTemplateById(id: string) {
    return this.templateRepo.gettemplatesById(id);
  }

  async getTemplate(search: TemplateSearchVo) {
    return this.templateRepo.gettemplate(search);
  }

  async getTemplateAll(search: TemplateSearchVo) {
    return this.templateRepo.gettemplateAll(search);
  }

  async getTemplateAllView() {
    return this.templateRepo.gettemplateAllView();
  }
}
