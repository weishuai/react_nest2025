import { Column, Entity } from 'typeorm';
@Entity('selling_price_list')
export class SellingPriceList {
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
  @Column('varchar', {name: 'variant', nullable: true, length: 255})
  variant: string | null;
  @Column('decimal', {name: 'miniMumQuantity', nullable: true})
  miniMumQuantity: number | null;
  @Column('decimal', {name: 'price', nullable: true})
  price: number | null;
  @Column('date', {name: 'startDate', nullable: true})
  startDate: Date | null;
  @Column('date', {name: 'endDate', nullable: true})
  endDate: Date | null;


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
