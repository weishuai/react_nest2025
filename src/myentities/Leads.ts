import { Column, Entity } from 'typeorm';

@Entity('leads')
export class Leads {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'job_title', nullable: true, length: 255 })
  jobTitle: string | null;

  @Column('varchar', { name: 'company', nullable: true, length: 255 })
  company: string | null;

  @Column('varchar', { name: 'industry', nullable: true, length: 255 })
  industry: string | null;

  @Column('varchar', { name: 'website', nullable: true, length: 255 })
  website: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 255 })
  phoneNumber: string | null;

  @Column('varchar', { name: 'mobile_number', nullable: true, length: 255 })
  mobileNumber: string | null;

  @Column('varchar', { name: 'fax_number', nullable: true, length: 255 })
  faxNumber: string | null;

  @Column('text', { name: 'remark', nullable: true })
  remark: string | null;

  @Column('varchar', { name: 'lead_owner', nullable: true, length: 255 })
  leadOwner: string | null;

  @Column('varchar', { name: 'lead_pool', nullable: true, length: 255 })
  leadPool: string | null;

  @Column('varchar', { name: 'campaign', nullable: true, length: 255 })
  campaign: string | null;

  @Column('varchar', { name: 'source', nullable: true, length: 255 })
  source: string | null;

  @Column('varchar', { name: 'street_road', nullable: true, length: 255 })
  streetRoad: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 255 })
  city: string | null;

  @Column('varchar', { name: 'ctate', nullable: true, length: 255 })
  ctate: string | null;

  @Column('varchar', { name: 'post_code', nullable: true, length: 255 })
  postCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 255 })
  country: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'isactived', nullable: true, length: 255 })
  isactived: string | null;

  @Column('varchar', { name: 'islocked', nullable: true, length: 255 })
  islocked: string | null;

  @Column('varchar', { name: 'satus', nullable: true, length: 255 })
  satus: string | null;

  @Column('varchar', { name: 'linked_in', nullable: true, length: 255 })
  linkedIn: string | null;

  @Column('varchar', { name: 'create_uid', nullable: true, length: 255 })
  createUid: string | null;

  @Column('varchar', { name: 'updated_uid', nullable: true, length: 255 })
  updatedUid: string | null;
}
