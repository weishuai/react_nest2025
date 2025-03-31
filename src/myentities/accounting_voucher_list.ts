import { Column, Entity } from 'typeorm';
@Entity('accounting_voucher_list')
export class AccountingVoucherList {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'mid', nullable: true, length: 255})
  mid: string | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'note', nullable: true, length: 255})
  note: string | null;
  @Column('varchar', {name: 'landed_cost', nullable: true, length: 255})
  landedCost: string | null;
  @Column('varchar', {name: 'type', nullable: true, length: 255})
  type: string | null;
  @Column('varchar', {name: 'subject', nullable: true, length: 255})
  subject: string | null;
  @Column('varchar', {name: 'analysis', nullable: true, length: 255})
  analysis: string | null;
  @Column('decimal', {name: 'number', nullable: true})
  number: number | null;
  @Column('varchar', {name: 'unit', nullable: true, length: 255})
  unit: string | null;
  @Column('decimal', {name: 'price', nullable: true})
  price: number | null;
  @Column('decimal', {name: 'tax', nullable: true})
  tax: number | null;
  @Column('decimal', {name: 'subtotal', nullable: true})
  subtotal: number | null;


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
