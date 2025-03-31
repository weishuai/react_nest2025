import { Column, Entity } from 'typeorm';
@Entity('hr.contract')
export class HrContract {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('varchar', {name: 'staff', nullable: true, length: 255})
  staff: string | null;
  @Column('varchar', {name: 'department', nullable: true, length: 255})
  department: string | null;
  @Column('varchar', {name: 'job', nullable: true, length: 255})
  job: string | null;
  @Column('varchar', {name: 'company', nullable: true, length: 255})
  company: string | null;
  @Column('varchar', {name: 'payStructure', nullable: true})
  payStructure: string | null;
  @Column('date', {name: 'startDate', nullable: true})
  startDate: Date | null;
  @Column('date', {name: 'firstContractDate', nullable: true})
  firstContractDate: Date | null;
  @Column('date', {name: 'endDate', nullable: true})
  endDate: Date | null;
  @Column('varchar', {name: 'workArrangement', nullable: true, length: 255})
  workArrangement: string | null;
  @Column('varchar', {name: 'HRSupervisor', nullable: true, length: 255})
  HRSupervisor: string | null;
  @Column('decimal', {name: 'wages', nullable: true})
  wages: number | null;
  @Column('text', {name: 'fhtxt', nullable: true})
  fhtxt: string | null;


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
