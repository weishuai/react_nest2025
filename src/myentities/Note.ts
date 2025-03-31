import { Column, Entity } from 'typeorm';

@Entity('note')
export class Note {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'subject', nullable: true, length: 255 })
  subject: string | null;

  @Column('varchar', { name: 'related_to', nullable: true, length: 255 })
  relatedTo: string | null;

  @Column('varchar', { name: 'note', nullable: true, length: 255 })
  note: string | null;

  @Column('varchar', { name: 'attachment', nullable: true, length: 255 })
  attachment: string | null;

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
}
