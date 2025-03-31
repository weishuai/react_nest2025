import { Column, Entity } from 'typeorm';
@Entity('procure_price')
export class ProcurePrice {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', {name: 'supplier', nullable: true, length: 255})
  supplier: string | null;
  @Column('varchar', {name: 'product', nullable: true, length: 255})
  product: string | null;
  @Column('varchar', {name: 'productCode', nullable: true, length: 255})
  productCode: string | null;
  @Column('date', {name: 'deliveryLeadTime', nullable: true})
  deliveryLeadTime: Date | null;
  @Column('varchar', {name: 'product2', nullable: true, length: 255})
  product2: string | null;
  @Column('varchar', {name: 'productTemlp', nullable: true, length: 255})
  productTemlp: string | null;
  @Column('varchar', {name: 'number', nullable: true, length: 255})
  number: string | null;
  @Column('decimal', {name: 'unitPrice', nullable: true})
  unitPrice: number | null;
  @Column('varchar', {name: 'ative', nullable: true, length: 255})
  ative: string | null;
  @Column('varchar', {name: 'company', nullable: true, length: 255})
  company: string | null;


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
