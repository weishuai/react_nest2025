import { StoreMoveRepo } from '../myrepositories/store_move_repo';
import { StoreMoveSearchVo, StoreMoveVo } from '../myvo/store_move_vo';
export class StoreMoveService {
  private storeMoveRepo = new StoreMoveRepo();
  async findOneStoreMove(Id: string) {
    return await this.storeMoveRepo.getStoreMovesById(Id);
  }

  async createStoreMove(storeMoveVo: StoreMoveVo) {
    return await this.storeMoveRepo.create(storeMoveVo);
  }

  async updateaStoreMove(
    Id: string,
    user_id: string,
    storeMoveVo: StoreMoveVo,
  ) {
    return await this.storeMoveRepo.update(Id, user_id, storeMoveVo);
  }

  async removeStoreMove(Ids: string) {
    console.log(Ids);
    return await this.storeMoveRepo.remove([Ids]);
  }

  async getStoreMoveById(id: string) {
    return await this.storeMoveRepo.getStoreMovesById(id);
  }

  async getStoreMoveList(search: StoreMoveSearchVo) {
    return await this.storeMoveRepo.getStoreMoveList(search);
  }

  async getStoreMoveAll() {
    return await this.storeMoveRepo.getStoreMoveAll();
  }

  async getStoreMoveAllView() {
    return await this.storeMoveRepo.getStoreMoveAllView();
  }
}
