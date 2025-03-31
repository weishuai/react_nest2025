import { Column, Entity } from 'typeorm';
@Entity('accounting_voucher')
export class AccountingVoucher {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'title', nullable: true, length: 255})
  title: string | null;
  @Column('varchar', {name: 'account_number', nullable: true, length: 255})
  accountNumber: string | null;
  @Column('varchar', {name: 'type', nullable: true, length: 255})
  type: string | null;
  @Column('varchar', {name: 'bill_reference', nullable: true, length: 255})
  billReference: string | null;
  @Column('date', {name: 'statement_date', nullable: true})
  statementDate: Date | null;
  @Column('date', {name: 'accounting_date', nullable: true})
  accountingDate: Date | null;
  @Column('varchar', {name: 'payment_reference', nullable: true})
  paymentReference: string | null;
  @Column('varchar', {name: 'payee_bank', nullable: true, length: 255})
  payeeBank: string | null;
  @Column('varchar', {name: 'payment_terms', nullable: true, length: 255})
  paymentTerms: string | null;
  @Column('varchar', {name: 'journal', nullable: true, length: 255})
  journal: string | null;


  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'isactived', nullable: true, length: 255 })
  isactived: string | null;

  @Column('varchar', { name: 'islocked', nullable: true, length: 255 })
  islocked: string | null;

  @Column('varchar', { name: 'create_uid', nullable: true, length: 255 })
  createUid: string | null;

  @Column('varchar', { name: 'updated_uid', nullable: true, length: 255 })
  updatedUid: string | null;
}
