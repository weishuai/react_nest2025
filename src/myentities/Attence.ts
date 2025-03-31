import { Column, Entity } from 'typeorm';

@Entity('attence')
export class Attence {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('timestamp', { name: 'date', nullable: true })
  date: Date | null;

  @Column('timestamp', { name: 'check_in_time', nullable: true })
  checkInTime: Date | null;

  @Column('varchar', {
    name: 'check_in_temperature',
    nullable: true,
    length: 255,
  })
  checkInTemperature: string | null;

  @Column('varchar', { name: 'check_in_place', nullable: true, length: 255 })
  checkInPlace: string | null;

  @Column('varchar', { name: 'check_in_address', nullable: true, length: 255 })
  checkInAddress: string | null;

  @Column('varchar', { name: 'check_in_notes', nullable: true, length: 255 })
  checkInNotes: string | null;

  @Column('timestamp', { name: 'check_out_time', nullable: true })
  checkOutTime: Date | null;

  @Column('varchar', {
    name: 'check_out_temperature',
    nullable: true,
    length: 255,
  })
  checkOutTemperature: string | null;

  @Column('varchar', { name: 'check_out_place', nullable: true, length: 255 })
  checkOutPlace: string | null;

  @Column('varchar', { name: 'check_out_address', nullable: true, length: 255 })
  checkOutAddress: string | null;

  @Column('varchar', { name: 'check_out_notes', nullable: true, length: 255 })
  checkOutNotes: string | null;

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
