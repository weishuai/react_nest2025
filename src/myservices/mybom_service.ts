import { mybomRepo } from '../myrepositories/mybom_repo';
import { mybomSearchVo, mybomVo } from '../myvo/mybom_vo';
export class mybomService {
  private mybomRepo = new mybomRepo();
  async findOnemybom(Id: string) {
    return await this.mybomRepo.getmybomsById(Id);
  }

  async createmybom(mybomVo: mybomVo) {
    return await this.mybomRepo.create(mybomVo);
  }

  async updateamybom(
    Id: string,
    user_id: string,
    mybomVo: mybomVo,
  ) {
    return await this.mybomRepo.update(Id, user_id, mybomVo);
  }

  async removemybom(Ids: string) {
    console.log(Ids);
    return await this.mybomRepo.remove([Ids]);
  }

  async getmybomById(id: string) {
    return await this.mybomRepo.getmybomsById(id);
  }

  async getmybomList(search: mybomSearchVo) {
    return await this.mybomRepo.getmybomList(search);
  }

  async getmybomAll() {
    return await this.mybomRepo.getmybomAll();
  }

  async getmybomAllView() {
    return await this.mybomRepo.getmybomAllView();
  }
}
