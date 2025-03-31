import { StoreMoveListRepo } from '../myrepositories/store_move_list_repo';
import { StoreMoveListSearchVo, StoreMoveListVo } from '../myvo/store_move_list_vo';
export class StoreMoveListService {
  private storeMoveListRepo = new StoreMoveListRepo();
  async findOneStoreMoveList(Id: string) {
    return await this.storeMoveListRepo.getStoreMoveListsById(Id);
  }

  async createStoreMoveList(storeMoveListVo: StoreMoveListVo) {
    return await this.storeMoveListRepo.create(storeMoveListVo);
  }

  async updateaStoreMoveList(
    Id: string,
    user_id: string,
    storeMoveListVo: StoreMoveListVo,
  ) {
    return await this.storeMoveListRepo.update(Id, user_id, storeMoveListVo);
  }

  async removeStoreMoveList(Ids: string) {
    console.log(Ids);
    return await this.storeMoveListRepo.remove([Ids]);
  }

  async getStoreMoveListById(id: string) {
    return await this.storeMoveListRepo.getStoreMoveListsById(id);
  }

  async getStoreMoveListList(search: StoreMoveListSearchVo) {
    return await this.storeMoveListRepo.getStoreMoveListList(search);
  }

  async getStoreMoveListAll() {
    return await this.storeMoveListRepo.getStoreMoveListAll();
  }

  async getStoreMoveListAllView() {
    return await this.storeMoveListRepo.getStoreMoveListAllView();
  }
  // async getStoreMoveListSearch(search: StoreMoveListSearchVo) {
  //   return await this.storeMoveListRepo.getStoreMoveListSearch(search);
  // }
}
