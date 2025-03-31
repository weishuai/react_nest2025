import { Column, Entity } from 'typeorm';

@Entity('service_item')
export class ServiceItem {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('timestamp', { name: 'start_date', nullable: true })
  startDate: Date | null;

  @Column('timestamp', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('varchar', { name: 'qty', nullable: true, length: 255 })
  qty: string | null;

  @Column('varchar', { name: 'remarks', nullable: true, length: 255 })
  remarks: string | null;

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
