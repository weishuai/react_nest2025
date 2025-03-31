import {
  CustomizationRepo,
  DeliveryItemRepo,
  DeliveryOrderRepo,
} from '../myrepositories';
import {
  DeliveryOrderSearchVo,
  DeliveryOrderVo,
} from '../myvo/DeliveryOrderVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class DeliveryOrderService {
  private deliveryOrderRepo = new DeliveryOrderRepo();

  private DeliveryItemRepo = new DeliveryItemRepo();

  private customizationRepo = new CustomizationRepo();

  async findOneDeliveryOrder(Id: string) {
    ///const issue = new Fhtest();
    return this.deliveryOrderRepo.getdeliveryOrdersById(Id);
  }

  async createDeliveryOrder(deliveryOrderVo: DeliveryOrderVo) {
    /*
    const mid = deliveryOrderVo.id;

    const refNumber = 'DO-';
    deliveryOrderVo.refNumber = String(
      (await this.customizationRepo.nextGetNo(refNumber)).No,
    );

    this.DeliveryItemRepo.updatedeliveryItemVoByMid(mid, deliveryOrderVo.id);
   */
    return this.deliveryOrderRepo.create(deliveryOrderVo);
  }

  async updateaDeliveryOrder(
    Id: string,
    user_id: string,
    deliveryOrderVo: DeliveryOrderVo,
  ) {
    deliveryOrderVo.updatedAt = new Date();

    deliveryOrderVo.updatedUid = user_id;
    return this.deliveryOrderRepo.update(Id, user_id, deliveryOrderVo);
  }

  async removeDeliveryOrder(Ids: string[]) {
    return this.deliveryOrderRepo.remove(Ids);
  }

  async getDeliveryOrderById(id: string) {
    return this.deliveryOrderRepo.getdeliveryOrdersById(id);
  }

  async getDeliveryOrder(userId: string, search: DeliveryOrderSearchVo) {
    return this.deliveryOrderRepo.getdeliveryOrder(userId, search);
  }

  async getDeliveryOrderAll(search: DeliveryOrderSearchVo) {
    return this.deliveryOrderRepo.getdeliveryOrderAll(search);
  }

  async getDeliveryOrderAllView() {
    return this.deliveryOrderRepo.getdeliveryOrderAllView();
  }
}
