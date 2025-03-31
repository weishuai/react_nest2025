import { BankCashRepo } from '../myrepositories/bank_cash_repo';
import { BankCashSearchVo, BankCashVo } from '../myvo/bank_cash_vo';
export class BankCashService {
  private bankCashRepo = new BankCashRepo();
  async findOneBankCash(Id: string) {
    return await this.bankCashRepo.getBankCashsById(Id);
  }

  async createBankCash(bankCashVo: BankCashVo) {
    return await this.bankCashRepo.create(bankCashVo);
  }

  async updateaBankCash(
    Id: string,
    user_id: string,
    bankCashVo: BankCashVo,
  ) {
    return await this.bankCashRepo.update(Id, user_id, bankCashVo);
  }

  async removeBankCash(Ids: string) {
    console.log(Ids);
    return await this.bankCashRepo.remove([Ids]);
  }

  async getBankCashById(id: string) {
    return await this.bankCashRepo.getBankCashsById(id);
  }

  async getBankCashList(search: BankCashSearchVo) {
    return await this.bankCashRepo.getBankCashList(search);
  }

  async getBankCashAll() {
    return await this.bankCashRepo.getBankCashAll();
  }

  async getBankCashAllView() {
    return await this.bankCashRepo.getBankCashAllView();
  }
}
