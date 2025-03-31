import { WarrantyRepo } from '../myrepositories';
import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class WarrantyService {
  private warrantyRepo = new WarrantyRepo();
  async findOneWarranty(Id: string) {
    ///const issue = new Fhtest();
    return this.warrantyRepo.getWarrantysById(Id);
  }

  async createWarranty(warrantyVo: WarrantyVo) {
    //warrantyVo.id = id();
    return this.warrantyRepo.create(warrantyVo);
  }

  async updateaWarranty(Id: string, user_id: string, warrantyVo: WarrantyVo) {
    warrantyVo.updatedAt = new Date();

    warrantyVo.updatedUid = user_id;
    return this.warrantyRepo.update(Id, user_id, warrantyVo);
  }

  async removeWarranty(Ids: string[]) {
    return this.warrantyRepo.remove(Ids);
  }

  async getWarrantyById(id: string) {
    return this.warrantyRepo.getWarrantysById(id);
  }

  async getWarranty(search: WarrantySearchVo) {
    return this.warrantyRepo.getWarranty(search);
  }

  async getWarrantyAll(search: WarrantySearchVo) {
    return this.warrantyRepo.getWarrantyAll(search);
  }

  async getWarrantyAllView() {
    return this.warrantyRepo.getWarrantyAllView();
  }
}
