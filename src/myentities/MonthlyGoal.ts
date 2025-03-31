import { Column, Entity } from 'typeorm';

@Entity('monthly_goal')
export class MonthlyGoal {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'target_number', nullable: true, length: 255 })
  targetNumber: string | null;

  @Column('varchar', { name: 'type', nullable: true, length: 255 })
  type: string | null;

  @Column('varchar', { name: 'team_id', nullable: true, length: 255 })
  teamId: string | null;

  @Column('varchar', { name: 'personal_id', nullable: true, length: 255 })
  personalId: string | null;

  @Column('varchar', { name: 'by_type', nullable: true, length: 255 })
  byType: string | null;

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
