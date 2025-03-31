import { AccountingVoucherRepo } from '../myrepositories/accounting_voucher_repo';
import { AccountingVoucherSearchVo, AccountingVoucherVo } from '../myvo/accounting_voucher_vo';
export class AccountingVoucherService {
  private accountingVoucherRepo = new AccountingVoucherRepo();
  async findOneAccountingVoucher(Id: string) {
    return await this.accountingVoucherRepo.getAccountingVouchersById(Id);
  }

  async createAccountingVoucher(accountingVoucherVo: AccountingVoucherVo) {
    return await this.accountingVoucherRepo.create(accountingVoucherVo);
  }

  async updateaAccountingVoucher(
    Id: string,
    user_id: string,
    accountingVoucherVo: AccountingVoucherVo,
  ) {
    return await this.accountingVoucherRepo.update(Id, user_id, accountingVoucherVo);
  }

  async removeAccountingVoucher(Ids: string) {
    console.log(Ids);
    return await this.accountingVoucherRepo.remove([Ids]);
  }

  async getAccountingVoucherById(id: string) {
    return await this.accountingVoucherRepo.getAccountingVouchersById(id);
  }

  async getAccountingVoucherList(search: AccountingVoucherSearchVo) {
    return await this.accountingVoucherRepo.getAccountingVoucherList(search);
  }

  async getAccountingVoucherAll() {
    return await this.accountingVoucherRepo.getAccountingVoucherAll();
  }

  async getAccountingVoucherAllView() {
    return await this.accountingVoucherRepo.getAccountingVoucherAllView();
  }
}
