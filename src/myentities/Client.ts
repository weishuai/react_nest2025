import { Column, Entity } from 'typeorm';

@Entity('client')
export class Client {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

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

  @Column('varchar', { name: 'type', nullable: true, length: 255 })
  type: string | null;

  @Column('varchar', { name: 'account_owner', nullable: true, length: 255 })
  accountOwner: string | null;

  @Column('varchar', { name: 'reg_number', nullable: true, length: 255 })
  regNumber: string | null;

  @Column('varchar', { name: 'industry', nullable: true, length: 255 })
  industry: string | null;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 255 })
  phoneNumber: string | null;

  @Column('varchar', { name: 'website', nullable: true, length: 255 })
  website: string | null;

  @Column('varchar', { name: 'fax_number', nullable: true, length: 255 })
  faxNumber: string | null;

  @Column('varchar', { name: 'street', nullable: true, length: 255 })
  street: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 255 })
  city: string | null;

  @Column('varchar', { name: 'state', nullable: true, length: 255 })
  state: string | null;

  @Column('varchar', { name: 'post_code', nullable: true, length: 255 })
  postCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 255 })
  country: string | null;

  @Column('varchar', { name: 'don', nullable: true, length: 255 })
  don: string | null;

  @Column('varchar', { name: 'ref', nullable: true, length: 255 })
  ref: string | null;

  @Column('varchar', { name: 'additional_field4', nullable: true, length: 255 })
  additionalField4: string | null;

  @Column('varchar', { name: 'additional_field5', nullable: true, length: 255 })
  additionalField5: string | null;

  @Column('varchar', { name: 'gender', nullable: true, length: 255 })
  gender: string | null;

  @Column('timestamp', { name: 'date_birth', nullable: true })
  dateBirth: Date | null;

  @Column('varchar', { name: 'language', nullable: true, length: 255 })
  language: string | null;

  @Column('varchar', { name: 'income', nullable: true, length: 255 })
  income: string | null;

  @Column('varchar', { name: 'marital', nullable: true, length: 255 })
  marital: string | null;

  @Column('varchar', { name: 'children', nullable: true, length: 255 })
  children: string | null;

  @Column('varchar', { name: 'accounts_type', nullable: true, length: 255 })
  accountsType: string | null;

  @Column('varchar', { name: 'account_tag', nullable: true, length: 255 })
  accountTag: string | null;

  @Column('varchar', { name: 'client_state', nullable: true, length: 255 })
  clientState: string | null;
}
