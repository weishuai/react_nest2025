import { Column, Entity } from 'typeorm';

@Entity('work_item')
export class WorkItem {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'qty', nullable: true, length: 255 })
  qty: string | null;

  @Column('varchar', { name: 'unit', nullable: true, length: 255 })
  unit: string | null;

  @Column('varchar', { name: 'unit_price', nullable: true, length: 255 })
  unitPrice: string | null;

  @Column('varchar', { name: 'discount', nullable: true, length: 255 })
  discount: string | null;

  @Column('varchar', { name: 'total', nullable: true, length: 255 })
  total: string | null;

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

  @Column('varchar', { name: 'mid', nullable: true, length: 10 })
  mid: string | null;
}
