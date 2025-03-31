import { Column, Entity } from 'typeorm';

@Entity('service_contract')
export class ServiceContract {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'contract_ref', nullable: true, length: 255 })
  contractRef: string | null;

  @Column('varchar', { name: 'created_by', nullable: true, length: 255 })
  createdBy: string | null;

  @Column('varchar', { name: 'contract_name', nullable: true, length: 255 })
  contractName: string | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('varchar', { name: 'account', nullable: true, length: 255 })
  account: string | null;

  @Column('varchar', { name: 'contract_value', nullable: true, length: 255 })
  contractValue: string | null;

  @Column('timestamp', { name: 'start_date', nullable: true })
  startDate: Date | null;

  @Column('timestamp', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('varchar', { name: 'sla', nullable: true, length: 255 })
  sla: string | null;

  @Column('varchar', { name: 'period', nullable: true, length: 255 })
  period: string | null;

  @Column('varchar', { name: 'contract_values', nullable: true, length: 255 })
  contractValues: string | null;

  @Column('varchar', { name: 'client_po', nullable: true, length: 255 })
  clientPo: string | null;

  @Column('varchar', { name: 'additional_field5', nullable: true, length: 255 })
  additionalField5: string | null;

  @Column('varchar', { name: 'terms_conditions', nullable: true, length: 255 })
  termsConditions: string | null;

  @Column('varchar', { name: 'remark', nullable: true, length: 255 })
  remark: string | null;

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

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;
}
