import { Column, Entity } from 'typeorm';

@Entity('delivery_order')
export class DeliveryOrder {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;

  @Column('varchar', { name: 'linked_invoice', nullable: true, length: 255 })
  linkedInvoice: string | null;

  @Column('varchar', { name: 'delivery_name', nullable: true, length: 255 })
  deliveryName: string | null;

  @Column('varchar', { name: 'client_company', nullable: true, length: 255 })
  clientCompany: string | null;

  @Column('timestamp', { name: 'delivery_date', nullable: true })
  deliveryDate: Date | null;

  @Column('varchar', { name: 'client_contact', nullable: true, length: 255 })
  clientContact: string | null;

  @Column('varchar', { name: 'creator', nullable: true, length: 255 })
  creator: string | null;

  @Column('varchar', { name: 'post_code', nullable: true, length: 255 })
  postCode: string | null;

  @Column('varchar', { name: 'street', nullable: true, length: 255 })
  street: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 255 })
  city: string | null;

  @Column('varchar', { name: 'state', nullable: true, length: 255 })
  state: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 255 })
  country: string | null;

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
}
