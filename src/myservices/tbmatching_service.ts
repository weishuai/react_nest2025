import { TbmatchingRepo } from '../myrepositories/tbmatching_repo';
import { TbmatchingSearchVo, TbmatchingVo } from '../myvo/tbmatching_vo';
export class TbmatchingService {
  private tbmatchingRepo = new TbmatchingRepo();
  async findOneTbmatching(Id: string) {
    return await this.tbmatchingRepo.getTbmatchingsById(Id);
  }

  async createTbmatching(tbmatchingVo: TbmatchingVo) {
    return await this.tbmatchingRepo.create(tbmatchingVo);
  }

  async updateaTbmatching(
    Id: string,
    user_id: string,
    tbmatchingVo: TbmatchingVo,
  ) {
    return await this.tbmatchingRepo.update(Id, user_id, tbmatchingVo);
  }

  async removeTbmatching(Ids: string) {
    console.log(Ids);
    return await this.tbmatchingRepo.remove([Ids]);
  }

  async getTbmatchingById(id: string) {
    return await this.tbmatchingRepo.getTbmatchingsById(id);
  }

  async getTbmatchingList(search: TbmatchingSearchVo) {
    return await this.tbmatchingRepo.getTbmatchingList(search);
  }

  async getTbmatchingAll() {
    return await this.tbmatchingRepo.getTbmatchingAll();
  }

  async getTbmatchingAllView() {
    return await this.tbmatchingRepo.getTbmatchingAllView();
  }
  // async getTbmatchingSearch(search: TbmatchingSearchVo) {
  //   return await this.tbmatchingRepo.getTbmatchingSearch(search);
  // }
}
