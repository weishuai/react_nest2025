import { Column, Entity } from 'typeorm';
@Entity('quality_inspection_item')
export class QualitylnspectionItem {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'mid', nullable: true, length: 255})
  mid: string | null;
  @Column('varchar', {name: 'fhitem', nullable: true, length: 255})
  fhitem: string | null;
  @Column('varchar', {name: 'fhtxt', nullable: true, length: 255})
  fhtxt: string | null;
  @Column('varchar', {name: 'fhnotes', nullable: true, length: 255})
  fhnotes: string | null;


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
