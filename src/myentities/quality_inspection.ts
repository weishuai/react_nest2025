import { Column, Entity } from 'typeorm';
@Entity('quality_inspection')
export class QualityInspection {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('varchar', {name: 'title', nullable: true, length: 255})
  title: string | null;
  @Column('varchar', {name: 'team', nullable: true, length: 255})
  team: string | null;
  @Column('varchar', {name: 'productTmlp', nullable: true, length: 255})
  productTmlp: string | null;
  @Column('varchar', {name: 'head', nullable: true, length: 255})
  head: string | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'label', nullable: true, length: 255})
  label: string | null;
  @Column('varchar', {name: 'batch', nullable: true, length: 255})
  batch: string | null;
  @Column('text', {name: 'rootCause', nullable: true})
  rootCause: string | null;
  @Column('varchar', {name: 'pick', nullable: true, length: 255})
  pick: string | null;
  @Column('varchar', {name: 'priority', nullable: true, length: 255})
  priority: string | null;
  @Column('text', {name: 'fhtxt', nullable: true})
  fhtxt: string | null;
  @Column('varchar', {name: 'inspectionItems', nullable: true, length: 255})
  inspectionItems: string | null;
  @Column('varchar', {name: 'checkAddress', nullable: true, length: 255})
  checkAddress: string | null;
  @Column('text', {name: 'correctiveAction', nullable: true})
  correctiveAction: string | null;
  @Column('text', {name: 'preventiveActions', nullable: true})
  preventiveActions: string | null;
  @Column('text', {name: 'sundry', nullable: true})
  sundry: string | null;


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
