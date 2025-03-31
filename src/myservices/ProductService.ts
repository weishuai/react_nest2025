import { ProductRepo } from '../myrepositories';
import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ProductService {
  private productRepo = new ProductRepo();

  async findOneProduct(Id: string) {
    ///const issue = new Fhtest();
    return this.productRepo.getproductsById(Id);
  }

  async createProduct(productVo: ProductVo) {
    ///productVo.id = id();
    return this.productRepo.create(productVo);
  }

  async updateaProduct(Id: string, user_id: string, productVo: ProductVo) {
    productVo.updatedAt = new Date();

    productVo.updatedUid = user_id;
    return this.productRepo.update(Id, user_id, productVo);
  }

  async removeProduct(Ids: string[]) {
    return this.productRepo.remove(Ids);
  }

  async getProductById(id: string) {
    return this.productRepo.getproductsById(id);
  }

  async getProduct(search: ProductSearchVo) {
    return this.productRepo.getproduct(search);
  }

  async getProductAll(search: ProductSearchVo) {
    return this.productRepo.getproductAll(search);
  }

  async getProductAllView() {
    return this.productRepo.getproductAllView();
  }
}
