import { Column, Entity } from 'typeorm';
@Entity('tbmatching')
export class Tbmatching {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'fhname', nullable: true, length: 255})
  fhname: string | null;
  @Column('date', {name: 'fhdate', nullable: true})
  fhdate: Date | null;
  @Column('date', {name: 'sampleDate', nullable: true})
  sampleDate: Date | null;
  @Column('varchar', {name: 'documentNumber', nullable: true, length: 255})
  documentNumber: string | null;
  @Column('varchar', {name: 'customerCode', nullable: true, length: 255})
  customerCode: string | null;
  @Column('integer', {name: 'customerName', nullable: true})
  customerName: number | null;
  @Column('varchar', {name: 'sampleName', nullable: true, length: 255})
  sampleName: string | null;
  @Column('integer', {name: 'numbe', nullable: true})
  numbe: number | null;
  @Column('varchar', {name: 'component', nullable: true, length: 255})
  component: string | null;
  @Column('varchar', {name: 'appearanceStyle', nullable: true, length: 255})
  appearanceStyle: string | null;
  @Column('varchar', {name: 'requirements', nullable: true, length: 255})
  requirements: string | null;
  @Column('varchar', {name: 'technology', nullable: true, length: 255})
  technology: string | null;
  @Column('integer', {name: 'cmyheck', nullable: true})
  mycheck: number | null;
  @Column('integer', {name: 'registration', nullable: true})
  registration: number | null;
  @Column('integer', {name: 'quotation', nullable: true})
  quotation: number | null;
  @Column('integer', {name: 'manufacturingOrders', nullable: true})
  manufacturingOrders: number | null;


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
