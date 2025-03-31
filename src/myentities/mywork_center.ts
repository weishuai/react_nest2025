import { Column, Entity } from 'typeorm';
@Entity('mywork_center')
export class myWorkCenter {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'workcenter', nullable: true, length: 255})
  workcenter: string | null;
  @Column('varchar', {name: 'code', nullable: true, length: 255})
  code: string | null;
  @Column('varchar', {name: 'title', nullable: true, length: 255})
  title: string | null;
  @Column('decimal', {name: 'working_hours', nullable: true})
  workingHours: number | null;
  @Column('varchar', {name: 'fhreplace', nullable: true, length: 255})
  fhreplace: string | null;
  @Column('varchar', {name: 'time_efficiency', nullable: true, length: 255})
  timeEfficiency: string | null;
  @Column('varchar', {name: 'capacity', nullable: true, length: 255})
  capacity: string | null;
  @Column('varchar', {name: 'oee', nullable: true, length: 255})
  oee: string | null;
  @Column('decimal', {name: 'set_time', nullable: true})
  setTime: number | null;
  @Column('decimal', {name: 'cleaning_time', nullable: true})
  cleaningTime: number | null;
  @Column('decimal', {name: 'hourly_cost', nullable: true})
  hourlyCost: number | null;


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
