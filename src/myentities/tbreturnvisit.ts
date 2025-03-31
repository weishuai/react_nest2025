import { Column, Entity } from 'typeorm';
@Entity('tbreturnvisit')
export class Tbreturnvisit {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'mid', nullable: true, length: 255})
  mid: string | null;
  @Column('varchar', {name: 'project', nullable: true, length: 255})
  project: string | null;
  @Column('date', {name: 'fhdate', nullable: true})
  fhdate: Date | null;
  @Column('varchar', {name: 'location', nullable: true, length: 255})
  location: string | null;
  @Column('varchar', {name: 'contacts', nullable: true, length: 255})
  contacts: string | null;
  @Column('varchar', {name: 'contactInformation', nullable: true, length: 255})
  contactInformation: string | null;
  @Column('varchar', {name: 'returnVisitDescription', nullable: true, length: 255})
  rreturnVisitDescription: string | null;
  @Column('varchar', {name: 'annex', nullable: true, length: 255})
  annex: string | null;


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
