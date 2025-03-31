import { Column, Entity } from 'typeorm';
@Entity('tbpackag')
export class Tbpackag {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'mid', nullable: true, length: 255})
  mid: string | null;
  @Column('varchar', {name: 'project', nullable: true, length: 255})
  project: string | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'productCode', nullable: true, length: 255})
  productCode: string | null;
  @Column('varchar', {name: 'code', nullable: true, length: 255})
  code: string | null;
  @Column('decimal', {name: 'deliveryQuantity', nullable: true})
  deliveryQuantity: number | null;
  @Column('date', {name: 'deliveryDate', nullable: true})
  deliveryDate: Date | null;
  @Column('varchar', {name: 'factoryOrderNumber', nullable: true, length: 255})
  factoryOrderNumber: string | null;
  @Column('varchar', {name: 'trackingNumber', nullable: true, length: 255})
  trackingNumber: string | null;
  @Column('varchar', {name: 'expressCompany', nullable: true, length: 255})
  expressCompany: string | null;
  @Column('varchar', {name: 'recipient', nullable: true, length: 255})
  recipient: string | null;
  @Column('varchar', {name: 'shipper', nullable: true, length: 255})
  shipper: string | null;
  @Column('varchar', {name: 'photo', nullable: true, length: 255})
  photo: string | null;


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
