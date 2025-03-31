import { Column, Entity } from 'typeorm';
@Entity('fhinspection')
export class Fhinspection {
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
  @Column('character varying', {name: 'fhF2', nullable: true, length: 255})
  fhF2: string | null;
  @Column('character varying', {name: 'fhF3', nullable: true, length: 255})
  fhF3: string | null;
  @Column('character varying', {name: 'fhF4', nullable: true, length: 255})
  fhF4: string | null;
  @Column('character varying', {name: 'fhF5', nullable: true, length: 255})
  fhF5: string | null;
  @Column('character varying', {name: 'fhF6', nullable: true, length: 255})
  fhF6: string | null;


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
