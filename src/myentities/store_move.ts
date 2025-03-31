import { Column, Entity } from 'typeorm';
@Entity('store_move')
export class StoreMove {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'partners', nullable: true, length: 255})
  partners: string | null;
  @Column('date', {name: 'delivery_date', nullable: true})
  deliveryDate: Date | null;
  @Column('varchar', {name: 'source_location', nullable: true, length: 255})
  sourceLocation: string | null;
  @Column('varchar', {name: 'source_document', nullable: true, length: 255})
  sourceDocument: string | null;
  @Column('varchar', {name: 'type', nullable: true, length: 255})
  type: string | null;
  @Column('varchar', {name: 'owner', nullable: true, length: 255})
  owner: string | null;
  @Column('timestamp', {name: 'fhtime', nullable: true})
  fhtime: Date | null;
  @Column('text', {name: 'notes', nullable: true})
  notes: string | null;


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
