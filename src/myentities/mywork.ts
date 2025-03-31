import { Column, Entity } from 'typeorm';
@Entity('mywork')
export class myWork {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'operationName', nullable: true, length: 255})
  operationName: string | null;
  @Column('varchar', {name: 'duration', nullable: true, length: 255})
  duration: string | null;
  @Column('varchar', {name: 'workCenter', nullable: true, length: 255})
  workCenter: string | null;
  @Column('decimal', {name: 'defaultDuration', nullable: true})
  defaultDuration: number | null;
  @Column('varchar', {name: 'serialNumber', nullable: true, length: 255})
  serialNumber: string | null;
  @Column('varchar', {name: 'company', nullable: true, length: 255})
  company: string | null;
  @Column('varchar', {name: 'bom', nullable: true, length: 255})
  bom: string | null;
  @Column('varchar', {name: 'worksheet', nullable: true, length: 255})
  worksheet: string | null;
  @Column('varchar', {name: 'fhtext', nullable: true})
  fhtext: string | null;


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
