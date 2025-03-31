import { StoragelocationRepo } from '../myrepositories/storage_location_repo';
import { StoragelocationSearchVo, StoragelocationVo } from '../myvo/storage_location_vo';
export class StoragelocationService {
  private storagelocationRepo = new StoragelocationRepo();
  async findOneStoragelocation(Id: string) {
    return await this.storagelocationRepo.getStoragelocationsById(Id);
  }

  async createStoragelocation(storagelocationVo: StoragelocationVo) {
    return await this.storagelocationRepo.create(storagelocationVo);
  }

  async updateaStoragelocation(
    Id: string,
    user_id: string,
    storagelocationVo: StoragelocationVo,
  ) {
    return await this.storagelocationRepo.update(Id, user_id, storagelocationVo);
  }

  async removeStoragelocation(Ids: string) {
    console.log(Ids);
    return await this.storagelocationRepo.remove([Ids]);
  }

  async getStoragelocationById(id: string) {
    return await this.storagelocationRepo.getStoragelocationsById(id);
  }

  async getStoragelocationList(search: StoragelocationSearchVo) {
    return await this.storagelocationRepo.getStoragelocationList(search);
  }

  async getStoragelocationAll() {
    return await this.storagelocationRepo.getStoragelocationAll();
  }

  async getStoragelocationAllView() {
    return await this.storagelocationRepo.getStoragelocationAllView();
  }
}
