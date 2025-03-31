import { Column, Entity } from 'typeorm';
@Entity('fhmeasuring')
export class Fhmeasuring {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('character varying', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('date', {name: 'fhF1', nullable: true})
  fhF1: Date | null;
  @Column('decimal', {name: 'fhF2', nullable: true})
  fhF2: number | null;
  @Column('character varying', {name: 'fhF3', nullable: true, length: 255})
  fhF3: string | null;
  @Column('integer', {name: 'fhF4', nullable: true})
  fhF4: number | null;
  @Column('integer', {name: 'fhF5', nullable: true})
  fhF5: number | null;
  @Column('integer', {name: 'fhF6', nullable: true})
  fhF6: number | null;
  @Column('character varying', {name: 'fhF7', nullable: true, length: 255})
  fhF7: string | null;
  @Column('integer', {name: 'fhF8', nullable: true})
  fhF8: number | null;
  @Column('text', {name: 'fhF9', nullable: true})
  fhF9: string | null;


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
