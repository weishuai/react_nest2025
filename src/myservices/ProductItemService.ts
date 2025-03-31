import { ProductItemRepo } from '../myrepositories';
import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ProductItemService {
  private ProductItemRepo = new ProductItemRepo();

  async findOneProductItem(Id: string) {
    ///const issue = new Fhtest();
    return this.ProductItemRepo.getproductItemsById(Id);
  }

  async createProductItem(productItemVo: ProductItemVo) {
    ///productItemVo.id = id();
    return this.ProductItemRepo.create(productItemVo);
  }

  async updateaProductItem(
    Id: string,
    user_id: string,
    productItemVo: ProductItemVo,
  ) {
    productItemVo.updatedAt = new Date();

    productItemVo.updatedUid = user_id;
    return this.ProductItemRepo.update(Id, user_id, productItemVo);
  }

  async removeProductItem(Ids: string[]) {
    return this.ProductItemRepo.remove(Ids);
  }

  async getProductItemById(id: string) {
    return this.ProductItemRepo.getproductItemsById(id);
  }

  async getProductItem(search: ProductItemSearchVo) {
    return this.ProductItemRepo.getproductItem(search);
  }

  async getProductItemAll(search: ProductItemSearchVo) {
    return this.ProductItemRepo.getproductItemAll(search);
  }

  async getProductItemAllView() {
    return this.ProductItemRepo.getproductItemAllView();
  }
}
