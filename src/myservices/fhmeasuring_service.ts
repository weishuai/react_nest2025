import { FhmeasuringRepo } from '../myrepositories/fhmeasuring_repo';
import { FhmeasuringSearchVo, FhmeasuringVo } from '../myvo/fhmeasuring_vo';
export class FhmeasuringService {
  private fhmeasuringRepo = new FhmeasuringRepo();
  async findOneFhmeasuring(Id: string) {
    return await this.fhmeasuringRepo.getFhmeasuringsById(Id);
  }

  async createFhmeasuring(fhmeasuringVo: FhmeasuringVo) {
    return await this.fhmeasuringRepo.create(fhmeasuringVo);
  }

  async updateaFhmeasuring(
    Id: string,
    user_id: string,
    fhmeasuringVo: FhmeasuringVo,
  ) {
    return await this.fhmeasuringRepo.update(Id, user_id, fhmeasuringVo);
  }

  async removeFhmeasuring(Ids: string) {
    console.log(Ids);
    return await this.fhmeasuringRepo.remove([Ids]);
  }

  async getFhmeasuringById(id: string) {
    return await this.fhmeasuringRepo.getFhmeasuringsById(id);
  }

  async getFhmeasuringList(search: FhmeasuringSearchVo) {
    return await this.fhmeasuringRepo.getFhmeasuringList(search);
  }

  async getFhmeasuringAll() {
    return await this.fhmeasuringRepo.getFhmeasuringAll();
  }

  async getFhmeasuringAllView() {
    return await this.fhmeasuringRepo.getFhmeasuringAllView();
  }
  // async getFhmeasuringSearch(search: FhmeasuringSearchVo) {
  //   return await this.fhmeasuringRepo.getFhmeasuringSearch(search);
  // }
}
