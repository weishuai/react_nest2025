import { Column, Entity } from 'typeorm';

@Entity('invoice_payment')
export class InvoicePayment {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;
  @Column('varchar', {  name: 'name',nullable: true, length: 10 })
  name: string | null;
  @Column('varchar', { name: 'invoice_id', nullable: true, length: 255 })
  invoiceId: string | null;

  @Column('timestamp', { name: 'date', nullable: true })
  date: Date | null;

  @Column('varchar', { name: 'method', nullable: true, length: 255 })
  method: string | null;

  @Column('varchar', { name: 'ref_no', nullable: true, length: 255 })
  refNo: string | null;

  @Column('varchar', { name: 'payment_amount', nullable: true, length: 255 })
  paymentAmount: string | null;

  @Column('varchar', { name: 'remark', nullable: true, length: 255 })
  remark: string | null;

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

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;

  @Column('varchar', { name: 'photo', nullable: true, length: 255 })
  photo: string | null;
}
