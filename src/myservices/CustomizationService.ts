import { CustomizationRepo } from '../myrepositories';
import {
  CustomizationSearchVo,
  CustomizationVo,
} from '../myvo/CustomizationVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class CustomizationService {
  private customizationRepo = new CustomizationRepo();

  async findOneCustomization(Id: string) {
    ///const issue = new Fhtest();
    return this.customizationRepo.getCustomizationsById(Id);
  }

  async createCustomization(customizationVo: CustomizationVo) {
    //return this.customizationRepo.insert(customizationVo);
  }

  async updateaCustomization(
    Id: string,
    user_id: string,
    customizationVo: CustomizationVo,
  ) {
    customizationVo.updatedAt = new Date();

    customizationVo.updatedUid = user_id;
    ///return this.customizationRepo.update(Id, user_id, customizationVo);
  }

  async removeCustomization(Ids: string[]) {
    /*
    return this.customizationRepo.update(Ids[0], {
      isactived: '1',
    });
    */
  }

  async getCustomizationById(id: string) {
    return this.customizationRepo.getCustomizationsById(id);
  }

  async getCustomization(search: CustomizationSearchVo) {
    return this.customizationRepo.getCustomization(search);
  }

  async getCustomizationAll(search: CustomizationSearchVo) {
    return this.customizationRepo.getCustomizationAll(search);
  }

  async getCustomizationAllView() {
    return this.customizationRepo.getCustomizationAllView();
  }
}
