import { Column, Entity } from 'typeorm';
@Entity('stock_warehouse_orderpoint')
export class StockWarehouseOrderpoint {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'position', nullable: true, length: 255})
  position: string | null;
  @Column('decimal', {name: 'inHand', nullable: true})
  inHand: number | null;
  @Column('decimal', {name: 'prediction', nullable: true})
  prediction: number | null;
  @Column('varchar', {name: 'route', nullable: true, length: 255})
  route: string | null;
  @Column('integer', {name: 'min', nullable: true})
  min: number | null;
  @Column('integer', {name: 'max', nullable: true})
  max: number | null;
  @Column('integer', {name: 'order', nullable: true})
  order: number | null;
  @Column('varchar', {name: 'unit', nullable: true, length: 255})
  unit: string | null;


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
