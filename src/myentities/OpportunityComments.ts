import { Column, Entity } from 'typeorm';

@Entity('opportunity_comments')
export class OpportunityComments {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'subject', nullable: true, length: 255 })
  subject: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'assign_to', nullable: true, length: 255 })
  assignTo: string | null;

  @Column('varchar', { name: 'note', nullable: true, length: 255 })
  note: string | null;

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
