import { Column, Entity } from 'typeorm';

@Entity('product')
export class Product {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'product_name', nullable: true, length: 255 })
  productName: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'manufacturer', nullable: true, length: 255 })
  manufacturer: string | null;

  @Column('varchar', { name: 'category', nullable: true, length: 255 })
  category: string | null;

  @Column('varchar', { name: 'unit', nullable: true, length: 255 })
  unit: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;

  @Column('varchar', { name: 'list_price', nullable: true, length: 10 })
  listPrice: string | null;

  @Column('varchar', { name: 'cost', nullable: true, length: 10 })
  cost: string | null;

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

  @Column('varchar', { name: 'photo', nullable: true, length: 255 })
  photo: string | null;
}
