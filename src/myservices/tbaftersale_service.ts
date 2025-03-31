import { TbaftersaleRepo } from '../myrepositories/tbaftersale_repo';
import { TbaftersaleSearchVo, TbaftersaleVo } from '../myvo/tbaftersale_vo';
export class TbaftersaleService {
  private tbaftersaleRepo = new TbaftersaleRepo();
  async findOneTbaftersale(Id: string) {
    return await this.tbaftersaleRepo.getTbaftersalesById(Id);
  }

  async createTbaftersale(tbaftersaleVo: TbaftersaleVo) {
    return await this.tbaftersaleRepo.create(tbaftersaleVo);
  }

  async updateaTbaftersale(
    Id: string,
    user_id: string,
    tbaftersaleVo: TbaftersaleVo,
  ) {
    return await this.tbaftersaleRepo.update(Id, user_id, tbaftersaleVo);
  }

  async removeTbaftersale(Ids: string) {
    console.log(Ids);
    return await this.tbaftersaleRepo.remove([Ids]);
  }

  async getTbaftersaleById(id: string) {
    return await this.tbaftersaleRepo.getTbaftersalesById(id);
  }

  async getTbaftersaleList(search: TbaftersaleSearchVo) {
    return await this.tbaftersaleRepo.getTbaftersaleList(search);
  }

  async getTbaftersaleAll() {
    return await this.tbaftersaleRepo.getTbaftersaleAll();
  }

  async getTbaftersaleAllView() {
    return await this.tbaftersaleRepo.getTbaftersaleAllView();
  }
  // async getTbaftersaleSearch(search: TbaftersaleSearchVo) {
  //   return await this.tbaftersaleRepo.getTbaftersaleSearch(search);
  // }
}
