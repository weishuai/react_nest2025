import { ProductTypeRepo } from '../myrepositories';
import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ProductTypeService {
  private productTypeRepo = new ProductTypeRepo();
  async findOneProductType(Id: string) {
    ///const issue = new Fhtest();
    return this.productTypeRepo.getProductTypesById(Id);
  }

  async createProductType(productTypeVo: ProductTypeVo) {
    //productTypeVo.id = id();
    return this.productTypeRepo.create(productTypeVo);
  }

  async updateaProductType(
    Id: string,
    user_id: string,
    productTypeVo: ProductTypeVo,
  ) {
    productTypeVo.updatedAt = new Date();

    productTypeVo.updatedUid = user_id;
    return this.productTypeRepo.update(Id, user_id, productTypeVo);
  }

  async removeProductType(Ids: string[]) {
    return this.productTypeRepo.remove(Ids);
  }

  async getProductTypeById(id: string) {
    return this.productTypeRepo.getProductTypesById(id);
  }

  async getProductType(search: ProductTypeSearchVo) {
    return this.productTypeRepo.getProductType(search);
  }

  async getProductTypeAll(search: ProductTypeSearchVo) {
    return this.productTypeRepo.getProductTypeAll(search);
  }

  async getProductTypeAllView() {
    return this.productTypeRepo.getProductTypeAllView();
  }
}
