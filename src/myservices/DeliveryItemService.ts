import { DeliveryItemRepo } from '../myrepositories';
import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class DeliveryItemService {
  private deliveryItemRepo = new DeliveryItemRepo();

  async findOneDeliveryItem(Id: string) {
    ///const issue = new Fhtest();
    return this.deliveryItemRepo.getdeliveryItemsById(Id);
  }

  async createDeliveryItem(deliveryItemVo: DeliveryItemVo) {
    return this.deliveryItemRepo.create(deliveryItemVo);
  }

  async updateaDeliveryItem(
    Id: string,
    user_id: string,
    deliveryItemVo: DeliveryItemVo,
  ) {
    deliveryItemVo.updatedAt = new Date();

    deliveryItemVo.updatedUid = user_id;
    return this.deliveryItemRepo.update(Id, user_id, deliveryItemVo);
  }

  async removeDeliveryItem(Ids: string[]) {
    return this.deliveryItemRepo.remove(Ids);
  }

  async getDeliveryItemById(id: string) {
    return this.deliveryItemRepo.getdeliveryItemsById(id);
  }

  async getDeliveryItem(search: DeliveryItemSearchVo) {
    return this.deliveryItemRepo.getdeliveryItem(search);
  }

  async getDeliveryItemAll(search: DeliveryItemSearchVo) {
    return this.deliveryItemRepo.getdeliveryItemAll(search);
  }

  async getDeliveryItemAllView() {
    return this.deliveryItemRepo.getdeliveryItemAllView();
  }
}
