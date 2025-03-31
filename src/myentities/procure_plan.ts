import { Column, Entity } from 'typeorm';
@Entity('procure_plan')
export class ProcurePlan {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('varchar', {name: 'purchaser', nullable: true, length: 255})
  purchaser: string | null;
  @Column('varchar', {name: 'applicationType', nullable: true, length: 255})
  applicationType: string | null;
  @Column('varchar', {name: 'supplier', nullable: true, length: 255})
  supplier: string | null;
  @Column('date', {name: 'deadline', nullable: true})
  deadline: Date | null;
  @Column('date', {name: 'subscriptionDate', nullable: true})
  subscriptionDate: Date | null;
  @Column('date', {name: 'deliveryDate', nullable: true})
  deliveryDate: Date | null;
  @Column('varchar', {name: 'sourceFile', nullable: true, length: 255})
  sourceFile: string | null;
  @Column('varchar', {name: 'jobType', nullable: true, length: 255})
  jobType: string | null;
  @Column('varchar', {name: 'company', nullable: true, length: 255})
  company: string | null;
  @Column('varchar', {name: 'term', nullable: true, length: 255})
  term: string | null;


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
