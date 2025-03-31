import { Column, Entity } from 'typeorm';
@Entity('inventory_list')
export class InventoryList {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'mid', nullable: true, length: 255})
  mid: string | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'unit', nullable: true, length: 255})
  unit: string | null;
  @Column('varchar', {name: 'position', nullable: true, length: 255})
  position: string | null;
  @Column('varchar', {name: 'batch', nullable: true, length: 255})
  batch: string | null;
  @Column('varchar', {name: 'package', nullable: true, length: 255})
  package: string | null;
  @Column('varchar', {name: 'owner', nullable: true, length: 255})
  owner: string | null;
  @Column('decimal', {name: 'theoretical', nullable: true})
  theoretical: number | null;
  @Column('decimal', {name: 'actual_quantity', nullable: true})
  actualQuantity: number | null;


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
