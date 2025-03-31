import { Column, Entity } from 'typeorm';

@Entity('purchase_order')
export class PurchaseOrder {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;

  @Column('varchar', { name: 'contact', nullable: true, length: 255 })
  contact: string | null;

  @Column('varchar', { name: 'payment_terms', nullable: true, length: 255 })
  paymentTerms: string | null;

  @Column('varchar', { name: 'taxes', nullable: true, length: 255 })
  taxes: string | null;

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
}
