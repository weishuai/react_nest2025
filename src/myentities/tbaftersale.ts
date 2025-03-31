import { Column, Entity } from 'typeorm';
@Entity('tbaftersale')
export class Tbaftersale {
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
  @Column('varchar', {name: 'fhdate', nullable: true, length: 255})
  fhdate: string | null;
  @Column('varchar', {name: 'location', nullable: true, length: 255})
  location: string | null;
  @Column('varchar', {name: 'contacts', nullable: true, length: 255})
  contacts: string | null;
  @Column('varchar', {name: 'contactInformation', nullable: true, length: 255})
  contactInformation: string | null;
  @Column('varchar', {name: 'VisitDescription', nullable: true, length: 255})
  VisitDescription: string | null;
  @Column('varchar', {name: 'problemHandling', nullable: true, length: 255})
  problemHandling: string | null;
  @Column('varchar', {name: 'remainingProblems', nullable: true, length: 255})
  remainingProblems: string | null;
  @Column('varchar', {name: 'afterSalesType', nullable: true, length: 255})
  afterSalesType: string | null;
  @Column('varchar', {name: 'annex', nullable: true, length: 255})
  annex: string | null;
  @Column('varchar', {name: 'processedBy', nullable: true, length: 255})
  processedBy: string | null;


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
