import { Column, Entity } from 'typeorm';

@Entity('campaign')
export class Campaign {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('timestamp', { name: 'starts', nullable: true })
  starts: Date | null;

  @Column('timestamp', { name: 'ends', nullable: true })
  ends: Date | null;

  @Column('varchar', { name: 'owner', nullable: true, length: 255 })
  owner: string | null;

  @Column('int', { name: 'budget', nullable: true })
  budget: number | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'isactived', nullable: true, length: 255 })
  isactived: string | null;

  @Column('varchar', { name: 'islocked', nullable: true, length: 255 })
  islocked: string | null;

  @Column('varchar', { name: 'create_uid', nullable: true, length: 11 })
  createUid: string | null;

  @Column('varchar', { name: 'updated_uid', nullable: true, length: 11 })
  updatedUid: string | null;
}
