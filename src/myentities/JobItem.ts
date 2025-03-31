import { Column, Entity } from 'typeorm';

@Entity('job_item')
export class JobItem {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'step', nullable: true, length: 255 })
  step: string | null;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', { name: 'template', nullable: true, length: 255 })
  template: string | null;

  @Column('int8', { name: 'require', nullable: true })
  require: number | null;

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

  @Column('varchar', { name: 'mid', nullable: true, length: 10 })
  mid: string | null;

  @Column('varchar', { name: 'photo', nullable: true, length: 500 })
  photo: string | null;
}
