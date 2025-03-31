import {
  CustomizationRepo,
  PurchaseItemRepo,
  PurchaseOrderRepo,
} from '../myrepositories';
import {
  PurchaseOrderSearchVo,
  PurchaseOrderVo,
} from '../myvo/PurchaseOrderVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class PurchaseOrderService {
  private purchaseOrderRepo = new PurchaseOrderRepo();
  private purchaseOrdertemRepo = new PurchaseItemRepo();
  private customizationRepo = new CustomizationRepo();
  async findOnePurchaseOrder(Id: string) {
    ///const issue = new Fhtest();
    return this.purchaseOrderRepo.getpurchaseOrdersById(Id);
  }

  async createPurchaseOrder(purchaseOrderVo: PurchaseOrderVo) {
    //purchaseOrderVo.id = id();

    const mid = purchaseOrderVo.id;
    ///purchaseOrderVo.id = id();

    const refNumber = 'PO-';

    ///purchaseOrderVo.refNumber = String((await this.customizationRepo.nextGetNo(refNumber)).No);
    this.purchaseOrdertemRepo.updatepurchaseItemVoByMid(
      mid,
      purchaseOrderVo.id,
    );
    return this.purchaseOrderRepo.create(purchaseOrderVo);
  }

  async updateaPurchaseOrder(
    Id: string,
    user_id: string,
    purchaseOrderVo: PurchaseOrderVo,
  ) {
    purchaseOrderVo.updatedAt = new Date();

    purchaseOrderVo.updatedUid = user_id;
    return this.purchaseOrderRepo.update(Id, user_id, purchaseOrderVo);
  }

  async removePurchaseOrder(Ids: string[]) {
    return this.purchaseOrderRepo.remove(Ids);
  }

  async getPurchaseOrderById(id: string) {
    return this.purchaseOrderRepo.getpurchaseOrdersById(id);
  }

  async getPurchaseOrder(userId: string, search: PurchaseOrderSearchVo) {
    return this.purchaseOrderRepo.getpurchaseOrder(userId, search);
  }

  async getPurchaseOrderAll(search: PurchaseOrderSearchVo) {
    return this.purchaseOrderRepo.getpurchaseOrderAll(search);
  }

  async getPurchaseOrderAllView() {
    return this.purchaseOrderRepo.getpurchaseOrderAllView();
  }
}
