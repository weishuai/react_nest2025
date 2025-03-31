import { Column, Entity } from 'typeorm';
@Entity('returnorder')
export class Returnorder {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'project', nullable: true, length: 255})
  project: string | null;
  @Column('varchar', {name: 'custom', nullable: true, length: 255})
  custom: string | null;
  @Column('varchar', {name: 'Invoice', nullable: true, length: 255})
  Invoice: string | null;
  @Column('varchar', {name: 'contractNumber', nullable: true, length: 255})
  contractNumber: string | null;
  @Column('decimal', {name: 'contractQuantity', nullable: true})
  contractQuantity: number | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'shipper', nullable: true, length: 255})
  shipper: string | null;
  @Column('decimal', {name: 'deliveryQuantity', nullable: true})
  deliveryQuantity: number | null;
  @Column('decimal', {name: 'outageQuantity', nullable: true})
  outageQuantity: number | null;
  @Column('varchar', {name: 'deliveryType', nullable: true, length: 255})
  deliveryType: string | null;
  @Column('varchar', {name: 'trackingNumber', nullable: true, length: 255})
  trackingNumber: string | null;
  @Column('varchar', {name: 'recipient', nullable: true, length: 255})
  recipient: string | null;


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
