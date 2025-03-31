import { AccountingVoucherListRepo } from '../myrepositories/accounting_voucher_list_repo';
import { AccountingVoucherListSearchVo, AccountingVoucherListVo } from '../myvo/accounting_voucher_list_vo';
export class AccountingVoucherListService {
  private accountingVoucherListRepo = new AccountingVoucherListRepo();
  async findOneAccountingVoucherList(Id: string) {
    return await this.accountingVoucherListRepo.getAccountingVoucherListsById(Id);
  }

  async createAccountingVoucherList(accountingVoucherListVo: AccountingVoucherListVo) {
    return await this.accountingVoucherListRepo.create(accountingVoucherListVo);
  }

  async updateaAccountingVoucherList(
    Id: string,
    user_id: string,
    accountingVoucherListVo: AccountingVoucherListVo,
  ) {
    return await this.accountingVoucherListRepo.update(Id, user_id, accountingVoucherListVo);
  }

  async removeAccountingVoucherList(Ids: string) {
    console.log(Ids);
    return await this.accountingVoucherListRepo.remove([Ids]);
  }

  async getAccountingVoucherListById(id: string) {
    return await this.accountingVoucherListRepo.getAccountingVoucherListsById(id);
  }

  async getAccountingVoucherListList(search: AccountingVoucherListSearchVo) {
    return await this.accountingVoucherListRepo.getAccountingVoucherListList(search);
  }

  async getAccountingVoucherListAll() {
    return await this.accountingVoucherListRepo.getAccountingVoucherListAll();
  }

  async getAccountingVoucherListAllView() {
    return await this.accountingVoucherListRepo.getAccountingVoucherListAllView();
  }
}
