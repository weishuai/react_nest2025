import { Column, Entity } from 'typeorm';

@Entity('activity')
export class Activity {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'mid', nullable: true, length: 255 })
  mid: string | null;

  @Column('varchar', { name: 'types', nullable: true, length: 255 })
  types: string | null;

  @Column('varchar', { name: 'subject', nullable: true, length: 255 })
  subject: string | null;

  @Column('timestamp', { name: 'starts', nullable: true })
  starts: Date | null;

  @Column('timestamp', { name: 'ends', nullable: true })
  ends: Date | null;

  @Column('int8', { name: 'all_day_event', nullable: true })
  allDayEvent: number | null;

  @Column('text', { name: 'attendees1', nullable: true })
  attendees1: string | null;

  @Column('text', { name: 'attendees2', nullable: true })
  attendees2: string | null;

  @Column('varchar', { name: 'related_type', nullable: true, length: 255 })
  relatedType: string | null;

  @Column('varchar', { name: 'related_to', nullable: true, length: 255 })
  relatedTo: string | null;

  @Column('varchar', { name: 'event_type', nullable: true, length: 255 })
  eventType: string | null;

  @Column('varchar', { name: 'location', nullable: true, length: 255 })
  location: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('text', { name: 'collaborate1', nullable: true })
  collaborate1: string | null;

  @Column('varchar', { name: 'collaborate2', nullable: true, length: 255 })
  collaborate2: string | null;

  @Column('varchar', { name: 'priority', nullable: true, length: 255 })
  priority: string | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('varchar', { name: 'attachment', nullable: true, length: 255 })
  attachment: string | null;

  @Column('varchar', { name: 'email_to', nullable: true, length: 255 })
  emailTo: string | null;

  @Column('varchar', { name: 'cc', nullable: true, length: 255 })
  cc: string | null;

  @Column('varchar', { name: 'send_mine', nullable: true, length: 255 })
  sendMine: string | null;

  @Column('varchar', { name: 'contact', nullable: true, length: 255 })
  contact: string | null;

  @Column('varchar', { name: 'caller', nullable: true, length: 255 })
  caller: string | null;

  @Column('varchar', { name: 'sender_number', nullable: true, length: 255 })
  senderNumber: string | null;

  @Column('varchar', { name: 'receiver_number', nullable: true, length: 255 })
  receiverNumber: string | null;

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

  @Column('varchar', { name: 'mtable', nullable: true, length: 255 })
  mtable: string | null;
}
