import { Column, Entity } from 'typeorm';
@Entity('sale_contract')
export class SaleContract {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('varchar', {name: 'releaseTime', nullable: true, length: 255})
  releaseTime: string | null;
  @Column('varchar', {name: 'project', nullable: true, length: 255})
  project: string | null;
  @Column('varchar', {name: 'version', nullable: true, length: 255})
  version: string | null;
  @Column('varchar', {name: 'custom', nullable: true, length: 255})
  custom: string | null;
  @Column('date', {name: 'expectedCompletion', nullable: true})
  expectedCompletion: Date | null;
  @Column('date', {name: 'productionCompleted', nullable: true})
  productionCompleted: Date | null;
  @Column('date', {name: 'deliveryCompleted', nullable: true})
  deliveryCompleted: Date | null;
  @Column('date', {name: 'estimatedTime', nullable: true})
  estimatedTime: Date | null;
  @Column('decimal', {name: 'contractAmount', nullable: true})
  contractAmount: number | null;
  @Column('decimal', {name: 'invoicingAmount', nullable: true})
  invoicingAmount: number | null;
  @Column('decimal', {name: 'collectionAmount', nullable: true})
  collectionAmount: number | null;
  @Column('varchar', {name: 'completionProgress', nullable: true, length: 255})
  completionProgress: string | null;
  @Column('text', {name: 'specialRequirements', nullable: true})
  specialRequirements: string | null;


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
