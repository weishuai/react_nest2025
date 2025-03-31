import { TbpackagRepo } from '../myrepositories/tbpackag_repo';
import { TbpackagSearchVo, TbpackagVo } from '../myvo/tbpackag_vo';
export class TbpackagService {
  private tbpackagRepo = new TbpackagRepo();
  async findOneTbpackag(Id: string) {
    return await this.tbpackagRepo.getTbpackagsById(Id);
  }

  async createTbpackag(tbpackagVo: TbpackagVo) {
    return await this.tbpackagRepo.create(tbpackagVo);
  }

  async updateaTbpackag(
    Id: string,
    user_id: string,
    tbpackagVo: TbpackagVo,
  ) {
    return await this.tbpackagRepo.update(Id, user_id, tbpackagVo);
  }

  async removeTbpackag(Ids: string) {
    console.log(Ids);
    return await this.tbpackagRepo.remove([Ids]);
  }

  async getTbpackagById(id: string) {
    return await this.tbpackagRepo.getTbpackagsById(id);
  }

  async getTbpackagList(search: TbpackagSearchVo) {
    return await this.tbpackagRepo.getTbpackagList(search);
  }

  async getTbpackagAll() {
    return await this.tbpackagRepo.getTbpackagAll();
  }

  async getTbpackagAllView() {
    return await this.tbpackagRepo.getTbpackagAllView();
  }
  // async getTbpackagSearch(search: TbpackagSearchVo) {
  //   return await this.tbpackagRepo.getTbpackagSearch(search);
  // }
}
