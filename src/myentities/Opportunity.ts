import { Column, Entity } from 'typeorm';

@Entity('opportunity')
export class Opportunity {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'opportunity_name', nullable: true, length: 255 })
  opportunityName: string | null;

  @Column('varchar', { name: 'account', nullable: true, length: 255 })
  account: string | null;

  @Column('varchar', { name: 'opportunity_owner', nullable: true, length: 255 })
  opportunityOwner: string | null;

  @Column('timestamp', { name: 'expiry_date', nullable: true })
  expiryDate: Date | null;

  @Column('varchar', { name: 'stage_name', nullable: true, length: 255 })
  stageName: string | null;

  @Column('varchar', { name: 'probability', nullable: true, length: 255 })
  probability: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;

  @Column('varchar', { name: 'sales_value', nullable: true, length: 255 })
  salesValue: string | null;

  @Column('varchar', { name: 'cost', nullable: true, length: 255 })
  cost: string | null;

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

  @Column('varchar', { name: 'stage', nullable: true, length: 255 })
  stage: string | null;

  @Column('varchar', { name: 'priority', nullable: true, length: 255 })
  priority: string | null;

  @Column('int', { name: 'deal_age', nullable: true })
  dealAge: number | null;

  @Column('varchar', {
    name: 'close_probabilitclose_probability',
    nullable: true,
    length: 255,
  })
  closeProbabilitcloseProbability: string | null;

  @Column('float', {
    name: 'forecast_value',
    nullable: true,
    precision: 255,
    scale: 0,
  })
  forecastValue: number | null;

  @Column('timestamp', { name: 'expected_close_date', nullable: true })
  expectedCloseDate: Date | null;

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;
}
