import { Column, Entity } from 'typeorm';

@Entity('quotation')
export class Quotation {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'quotation_name', nullable: true, length: 255 })
  quotationName: string | null;

  @Column('varchar', { name: 'sales_person', nullable: true, length: 255 })
  salesPerson: string | null;

  @Column('varchar', { name: 'opportunity', nullable: true, length: 255 })
  opportunity: string | null;

  @Column('varchar', { name: 'payment_terms', nullable: true, length: 255 })
  paymentTerms: string | null;

  @Column('varchar', { name: 'contact', nullable: true, length: 255 })
  contact: string | null;

  @Column('varchar', { name: 'taxes', nullable: true, length: 255 })
  taxes: string | null;

  @Column('timestamp', { name: 'expiration_date', nullable: true })
  expirationDate: Date | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;

  @Column('varchar', { name: 'cat', nullable: true, length: 255 })
  cat: string | null;

  @Column('varchar', { name: 'test2', nullable: true, length: 255 })
  test2: string | null;

  @Column('varchar', { name: 'additional_field3', nullable: true, length: 255 })
  additionalField3: string | null;

  @Column('varchar', { name: 'additional_field4', nullable: true, length: 255 })
  additionalField4: string | null;

  @Column('varchar', { name: 'terms_conditions', nullable: true, length: 255 })
  termsConditions: string | null;

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

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('varchar', { name: 'amount', nullable: true, length: 255 })
  amount: string | null;

  @Column('varchar', { name: 'percentage', nullable: true, length: 255 })
  percentage: string | null;

  @Column('varchar', { name: 'discount', nullable: true, length: 255 })
  discount: string | null;

  @Column('varchar', { name: 'total_discount', nullable: true, length: 255 })
  totalDiscount: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('text', { name: 'test1', nullable: true })
  test1: string | null;

  @Column('varchar', { name: 'client_id', nullable: true, length: 10 })
  clientId: string | null;

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;

  @Column('varchar', { name: 'discount_type', nullable: true, length: 255 })
  discountType: string | null;
}
