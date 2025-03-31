import { Column, Entity } from 'typeorm';

@Entity('attachment')
export class Attachment {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'owner_id', length: 10 })
  ownerId: string;

  @Column('int8', {
    name: 'owner_type',
    comment: '0: project, 1: vendor',
    default: () => "'0'",
  })
  ownerType: number;

  @Column('timestamp', {
    name: 'dateUploaded',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateUploaded: Date | null;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  name: string | null;

  @Column('varchar', {
    name: 'upload_user_id',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  uploadUserId: string | null;

  @Column('varchar', {
    name: 'when',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  when: string | null;

  @Column('int8', { name: 'is_del', default: () => "'0'" })
  isDel: number;

  @Column('text', { name: 'url', nullable: true })
  url: string | null;

  @Column('varchar', {
    name: 'mimetype',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  mimetype: string | null;

  @Column('int', { name: 'size', nullable: true, default: () => "'0'" })
  size: number | null;

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;
}
