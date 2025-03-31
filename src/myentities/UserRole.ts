import { Column, Entity } from 'typeorm';

@Entity('user_role')
export class UserRole {
  @Column('varchar', { primary: true, name: 'user_id', length: 10 })
  userId: string;

  @Column('varchar', { primary: true, name: 'role_id', length: 10 })
  roleId: string;

  @Column('varchar', { name: 'app', length: 255 })
  app: string;
}
