import { BatchRepo } from '../myrepositories/batch_repo';
import { BatchSearchVo, BatchVo } from '../myvo/batch_vo';
export class BatchService {
  private batchRepo = new BatchRepo();
  async findOneBatch(Id: string) {
    return await this.batchRepo.getBatchsById(Id);
  }

  async createBatch(batchVo: BatchVo) {
    return await this.batchRepo.create(batchVo);
  }

  async updateaBatch(
    Id: string,
    user_id: string,
    batchVo: BatchVo,
  ) {
    return await this.batchRepo.update(Id, user_id, batchVo);
  }

  async removeBatch(Ids: string) {
    console.log(Ids);
    return await this.batchRepo.remove([Ids]);
  }

  async getBatchById(id: string) {
    return await this.batchRepo.getBatchsById(id);
  }

  async getBatchList(search: BatchSearchVo) {
    return await this.batchRepo.getBatchList(search);
  }

  async getBatchAll() {
    return await this.batchRepo.getBatchAll();
  }

  async getBatchAllView() {
    return await this.batchRepo.getBatchAllView();
  }
}
