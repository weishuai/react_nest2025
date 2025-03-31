import { Column, Entity } from 'typeorm';

@Entity('warranty')
export class Warranty {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'product', nullable: true, length: 255 })
  product: string | null;

  @Column('timestamp', { name: 'start_date', nullable: true })
  startDate: Date | null;

  @Column('timestamp', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('varchar', { name: 'is_remind', nullable: true, length: 255 })
  isRemind: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

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
