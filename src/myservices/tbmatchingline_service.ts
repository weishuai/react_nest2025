import { TbmatchinglineRepo } from '../myrepositories/tbmatchingline_repo';
import { TbmatchinglineSearchVo, TbmatchinglineVo } from '../myvo/tbmatchingline_vo';
export class TbmatchinglineService {
  private tbmatchinglineRepo = new TbmatchinglineRepo();
  async findOneTbmatchingline(Id: string) {
    return await this.tbmatchinglineRepo.getTbmatchinglinesById(Id);
  }

  async createTbmatchingline(tbmatchinglineVo: TbmatchinglineVo) {
    return await this.tbmatchinglineRepo.create(tbmatchinglineVo);
  }

  async updateaTbmatchingline(
    Id: string,
    user_id: string,
    tbmatchinglineVo: TbmatchinglineVo,
  ) {
    return await this.tbmatchinglineRepo.update(Id, user_id, tbmatchinglineVo);
  }

  async removeTbmatchingline(Ids: string) {
    console.log(Ids);
    return await this.tbmatchinglineRepo.remove([Ids]);
  }

  async getTbmatchinglineById(id: string) {
    return await this.tbmatchinglineRepo.getTbmatchinglinesById(id);
  }

  async getTbmatchinglineList(search: TbmatchinglineSearchVo) {
    return await this.tbmatchinglineRepo.getTbmatchinglineList(search);
  }

  async getTbmatchinglineAll() {
    return await this.tbmatchinglineRepo.getTbmatchinglineAll();
  }

  async getTbmatchinglineAllView() {
    return await this.tbmatchinglineRepo.getTbmatchinglineAllView();
  }
  // async getTbmatchinglineSearch(search: TbmatchinglineSearchVo) {
  //   return await this.tbmatchinglineRepo.getTbmatchinglineSearch(search);
  // }
}
