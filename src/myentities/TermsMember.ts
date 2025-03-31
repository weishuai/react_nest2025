import { Column, Entity } from 'typeorm';

@Entity('terms_member')
export class TermsMember {
  @Column('varchar', { name: 'terms_id', nullable: true, length: 255 })
  termsId: string | null;

  @Column('varchar', { name: 'member_id', nullable: true, length: 255 })
  memberId: string | null;

  @Column('varchar', { primary: true, name: 'id', length: 255 })
  id: string;

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
