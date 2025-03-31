import { PurchaseItemRepo } from '../myrepositories';
import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class PurchaseItemService {
  private purchaseItemRepo = new PurchaseItemRepo();
  async findOnePurchaseItem(Id: string) {
    ///const issue = new Fhtest();
    return this.purchaseItemRepo.getpurchaseItemsById(Id);
  }

  async createPurchaseItem(purchaseItemVo: PurchaseItemVo) {
    ///purchaseItemVo.id = id();
    return this.purchaseItemRepo.create(purchaseItemVo);
  }

  async updateaPurchaseItem(
    Id: string,
    user_id: string,
    purchaseItemVo: PurchaseItemVo,
  ) {
    purchaseItemVo.updatedAt = new Date();

    purchaseItemVo.updatedUid = user_id;
    return this.purchaseItemRepo.update(Id, user_id, purchaseItemVo);
  }

  async removePurchaseItem(Ids: string[]) {
    return this.purchaseItemRepo.remove(Ids);
  }

  async getPurchaseItemById(id: string) {
    return this.purchaseItemRepo.getpurchaseItemsById(id);
  }

  async getPurchaseItem(search: PurchaseItemSearchVo) {
    return this.purchaseItemRepo.getpurchaseItem(search);
  }

  async getPurchaseItemAll(search: PurchaseItemSearchVo) {
    return this.purchaseItemRepo.getpurchaseItemAll(search);
  }

  async getPurchaseItemAllView() {
    return this.purchaseItemRepo.getpurchaseItemAllView();
  }
}
