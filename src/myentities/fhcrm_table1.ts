import { Column, Entity } from 'typeorm';
@Entity('fhcrm_table1')
export class FHcrmTable1 {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fh_f1', nullable: true, length: 255})
  fhF1: string | null;
  @Column('text', {name: 'fh_f2', nullable: true})
  fhF2: string | null;
  @Column('boolean', {name: 'fh_f3', nullable: true})
  fhF3: boolean | null;
  @Column('integer', {name: 'fh_f4', nullable: true})
  fhF4: number | null;
  @Column('timestamp', {name: 'fh_f5', nullable: true})
  fhF5: Date | null;
  @Column('date', {name: 'fh_f6', nullable: true})
  fhF6: Date | null;
  @Column('timestamp', {name: 'fh_f7', nullable: true})
  fhF7: Date | null;
  @Column('integer', {name: 'fh_f8', nullable: true})
  fhF8: number | null;
  @Column('decimal', {name: 'fh_f9', nullable: true})
  fhF9: number | null;
  @Column('decimal', {name: 'fh_f10', nullable: true})
  fhF10: number | null;


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
