import { Column, Entity } from 'typeorm';

@Entity('quotation_item')
export class QuotationItem {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'photo', nullable: true, length: 255 })
  photo: string | null;

  @Column('varchar', { name: 'percentage', nullable: true, length: 255 })
  percentage: string | null;

  @Column('varchar', { name: 'direct_price', nullable: true, length: 255 })
  directPrice: string | null;

  @Column('varchar', { name: 'reduction', nullable: true, length: 10 })
  reduction: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'qty', nullable: true, length: 255 })
  qty: string | null;

  @Column('varchar', { name: 'unit', nullable: true, length: 255 })
  unit: string | null;

  @Column('varchar', { name: 'unit_price', nullable: true, length: 255 })
  unitPrice: string | null;

  @Column('varchar', { name: 'unit_cost', nullable: true, length: 255 })
  unitCost: string | null;

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

  @Column('varchar', { name: 'discount', nullable: true, length: 255 })
  discount: string | null;

  @Column('varchar', { name: 'productname', nullable: true, length: 255 })
  productname: string | null;

  @Column('varchar', { name: 'discount_type', nullable: true, length: 255 })
  discountType: string | null;
}
