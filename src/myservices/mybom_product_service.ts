import { myBomProductRepo } from '../myrepositories/mybom_product_repo';
import { myBomProductSearchVo, myBomProductVo } from '../myvo/mybom_product_vo';
export class myBomProductService {
  private mybomProductRepo = new myBomProductRepo();
  async findOnemyBomProduct(Id: string) {
    return await this.mybomProductRepo.getmyBomProductsById(Id);
  }

  async createmyBomProduct(mybomProductVo: myBomProductVo) {
    return await this.mybomProductRepo.create(mybomProductVo);
  }

  async updateamyBomProduct(
    Id: string,
    user_id: string,
    mybomProductVo: myBomProductVo,
  ) {
    return await this.mybomProductRepo.update(Id, user_id, mybomProductVo);
  }

  async removemyBomProduct(Ids: string) {
    console.log(Ids);
    return await this.mybomProductRepo.remove([Ids]);
  }

  async getmyBomProductById(id: string) {
    return await this.mybomProductRepo.getmyBomProductsById(id);
  }

  async getmyBomProductList(search: myBomProductSearchVo) {
    return await this.mybomProductRepo.getmyBomProductList(search);
  }

  async getmyBomProductAll() {
    return await this.mybomProductRepo.getmyBomProductAll();
  }

  async getmyBomProductAllView() {
    return await this.mybomProductRepo.getmyBomProductAllView();
  }
}
