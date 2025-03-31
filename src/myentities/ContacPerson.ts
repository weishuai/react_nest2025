import { Column, Entity } from 'typeorm';

@Entity('contac_person')
export class ContacPerson {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'client', nullable: true, length: 255 })
  client: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'no', nullable: true, length: 255 })
  no: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'islogin', nullable: true, length: 255 })
  islogin: string | null;

  @Column('varchar', { name: 'login', nullable: true, length: 255 })
  login: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  password: string | null;

  @Column('varchar', { name: 'isnotification', nullable: true, length: 255 })
  isnotification: string | null;

  @Column('varchar', { name: 'isemail', nullable: true, length: 255 })
  isemail: string | null;

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

  @Column('varchar', { name: 'job_title', nullable: true, length: 255 })
  jobTitle: string | null;

  @Column('varchar', { name: 'account', nullable: true, length: 255 })
  account: string | null;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 255 })
  phoneNumber: string | null;

  @Column('varchar', { name: 'mobile_number', nullable: true, length: 255 })
  mobileNumber: string | null;

  @Column('varchar', { name: 'fax_number', nullable: true, length: 255 })
  faxNumber: string | null;

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

  @Column('varchar', { name: 'emergency', nullable: true, length: 255 })
  emergency: string | null;

  @Column('varchar', { name: 'security_course', nullable: true, length: 255 })
  securityCourse: string | null;

  @Column('varchar', { name: 'additional_field3', nullable: true, length: 255 })
  additionalField3: string | null;

  @Column('varchar', { name: 'additional_field4', nullable: true, length: 255 })
  additionalField4: string | null;

  @Column('varchar', { name: 'additional_field5', nullable: true, length: 255 })
  additionalField5: string | null;

  @Column('varchar', { name: 'is_alert', nullable: true, length: 255 })
  isAlert: string | null;
}
