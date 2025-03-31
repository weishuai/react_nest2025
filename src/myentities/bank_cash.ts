import { Column, Entity } from 'typeorm';
@Entity('bank_cash')
export class BankCash {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'report', nullable: true, length: 255})
  report: string | null;
  @Column('date', {name: 'fhdate', nullable: true})
  fhdate: Date | null;
  @Column('varchar', {name: 'lable', nullable: true, length: 255})
  lable: string | null;
  @Column('varchar', {name: 'refer', nullable: true, length: 255})
  refer: string | null;
  @Column('varchar', {name: 'partners', nullable: true, length: 255})
  partners: string | null;
  @Column('decimal', {name: 'amount_money', nullable: true})
  amountMoney: number | null;
  @Column('varchar', {name: 'serial_number', nullable: true, length: 255})
  serialNumber: string | null;
  @Column('text', {name: 'notes', nullable: true})
  notes: string | null;
  @Column('varchar', {name: 'type', nullable: true, length: 255})
  type: string | null;
  @Column('varchar', {name: 'accounting_voucher', nullable: true, length: 255})
  accountingVoucher: string | null;


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
