import { Column, Entity } from 'typeorm';

@Entity('task')
export class Task {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'subject', nullable: true, length: 255 })
  subject: string | null;

  @Column('timestamp', { name: 'due_date', nullable: true })
  dueDate: Date | null;

  @Column('varchar', { name: 'collaborate1', nullable: true, length: 255 })
  collaborate1: string | null;

  @Column('varchar', { name: 'collaborate2', nullable: true, length: 255 })
  collaborate2: string | null;

  @Column('varchar', { name: 'related_to', nullable: true, length: 255 })
  relatedTo: string | null;

  @Column('varchar', { name: 'priority', nullable: true, length: 255 })
  priority: string | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('varchar', { name: 'comments', nullable: true, length: 255 })
  comments: string | null;

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

  @Column('varchar', { name: 'related_type', nullable: true, length: 255 })
  relatedType: string | null;

  @Column('text', { name: 'feedback', nullable: true })
  feedback: string | null;
}
