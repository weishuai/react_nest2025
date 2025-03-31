import { FhinspectionRepo } from '../myrepositories/fhinspection_repo';
import { FhinspectionSearchVo, FhinspectionVo } from '../myvo/fhinspection_vo';
export class FhinspectionService {
  private fhinspectionRepo = new FhinspectionRepo();
  async findOneFhinspection(Id: string) {
    return await this.fhinspectionRepo.getFhinspectionsById(Id);
  }

  async createFhinspection(fhinspectionVo: FhinspectionVo) {
    return await this.fhinspectionRepo.create(fhinspectionVo);
  }

  async updateaFhinspection(
    Id: string,
    user_id: string,
    fhinspectionVo: FhinspectionVo,
  ) {
    return await this.fhinspectionRepo.update(Id, user_id, fhinspectionVo);
  }

  async removeFhinspection(Ids: string) {
    console.log(Ids);
    return await this.fhinspectionRepo.remove([Ids]);
  }

  async getFhinspectionById(id: string) {
    return await this.fhinspectionRepo.getFhinspectionsById(id);
  }

  async getFhinspectionList(search: FhinspectionSearchVo) {
    return await this.fhinspectionRepo.getFhinspectionList(search);
  }

  async getFhinspectionAll() {
    return await this.fhinspectionRepo.getFhinspectionAll();
  }

  async getFhinspectionAllView() {
    return await this.fhinspectionRepo.getFhinspectionAllView();
  }
  // async getFhinspectionSearch(search: FhinspectionSearchVo) {
  //   return await this.fhinspectionRepo.getFhinspectionSearch(search);
  // }
}
