import { QualitylnspectionItemRepo } from '../myrepositories/quality_inspection_item_repo';
import { QualitylnspectionItemSearchVo, QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
export class QualitylnspectionItemService {
  private qualitylnspectionItemRepo = new QualitylnspectionItemRepo();
  async findOneQualitylnspectionItem(Id: string) {
    return await this.qualitylnspectionItemRepo.getQualitylnspectionItemsById(Id);
  }

  async createQualitylnspectionItem(qualitylnspectionItemVo: QualitylnspectionItemVo) {
    return await this.qualitylnspectionItemRepo.create(qualitylnspectionItemVo);
  }

  async updateaQualitylnspectionItem(
    Id: string,
    user_id: string,
    qualitylnspectionItemVo: QualitylnspectionItemVo,
  ) {
    return await this.qualitylnspectionItemRepo.update(Id, user_id, qualitylnspectionItemVo);
  }

  async removeQualitylnspectionItem(Ids: string) {
    console.log(Ids);
    return await this.qualitylnspectionItemRepo.remove([Ids]);
  }

  async getQualitylnspectionItemById(id: string) {
    return await this.qualitylnspectionItemRepo.getQualitylnspectionItemsById(id);
  }

  async getQualitylnspectionItemList(search: QualitylnspectionItemSearchVo) {
    return await this.qualitylnspectionItemRepo.getQualitylnspectionItemList(search);
  }

  async getQualitylnspectionItemAll() {
    return await this.qualitylnspectionItemRepo.getQualitylnspectionItemAll();
  }

  async getQualitylnspectionItemAllView() {
    return await this.qualitylnspectionItemRepo.getQualitylnspectionItemAllView();
  }
  // async getQualitylnspectionItemSearch(search: QualitylnspectionItemSearchVo) {
  //   return await this.qualitylnspectionItemRepo.getQualitylnspectionItemSearch(search);
  // }
}
