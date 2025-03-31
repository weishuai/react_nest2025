import { QualityInspectionRepo } from '../myrepositories/quality_inspection_repo';
import { QualityInspectionSearchVo, QualityInspectionVo } from '../myvo/quality_inspection_vo';
export class QualityInspectionService {
  private qualityInspectionRepo = new QualityInspectionRepo();
  async findOneQualityInspection(Id: string) {
    return await this.qualityInspectionRepo.getQualityInspectionsById(Id);
  }

  async createQualityInspection(qualityInspectionVo: QualityInspectionVo) {
    return await this.qualityInspectionRepo.create(qualityInspectionVo);
  }

  async updateaQualityInspection(
    Id: string,
    user_id: string,
    qualityInspectionVo: QualityInspectionVo,
  ) {
    return await this.qualityInspectionRepo.update(Id, user_id, qualityInspectionVo);
  }

  async removeQualityInspection(Ids: string) {
    console.log(Ids);
    return await this.qualityInspectionRepo.remove([Ids]);
  }

  async getQualityInspectionById(id: string) {
    return await this.qualityInspectionRepo.getQualityInspectionsById(id);
  }

  async getQualityInspectionList(search: QualityInspectionSearchVo) {
    return await this.qualityInspectionRepo.getQualityInspectionList(search);
  }

  async getQualityInspectionAll() {
    return await this.qualityInspectionRepo.getQualityInspectionAll();
  }

  async getQualityInspectionAllView() {
    return await this.qualityInspectionRepo.getQualityInspectionAllView();
  }
  // async getQualityInspectionSearch(search: QualityInspectionSearchVo) {
  //   return await this.qualityInspectionRepo.getQualityInspectionSearch(search);
  // }
}
