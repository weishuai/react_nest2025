import { Column, Entity } from 'typeorm';

@Entity('staff_list')
export class StaffList {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;
  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'full_name', nullable: true, length: 255 })
  fullName: string | null;

  @Column('varchar', { name: 'contact_no', nullable: true, length: 255 })
  contactNo: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'role', nullable: true, length: 255 })
  role: string | null;

  @Column('text', { name: 'clients', nullable: true })
  clients: string | null;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;

  @Column('varchar', { name: 'login', nullable: true, length: 255 })
  login: string | null;

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
