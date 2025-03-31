import { Column, Entity } from 'typeorm';
@Entity('store_move_list')
export class StoreMoveList {
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
  @Column('integer', {name: 'demand', nullable: true})
  demand: number | null;
  @Column('integer', {name: 'reserve', nullable: true})
  reserve: number | null;
  @Column('integer', {name: 'complete', nullable: true})
  complete: number | null;
  @Column('varchar', {name: 'unit', nullable: true, length: 255})
  unit: string | null;
  @Column('decimal', {name: 'selling_price', nullable: true})
  sellingPrice: number | null;
  @Column('decimal', {name: 'cost_price', nullable: true})
  costPprice: number | null;


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
