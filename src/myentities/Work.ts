import { Column, Entity } from 'typeorm';

@Entity('work')
export class Work {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'quote', nullable: true, length: 255 })
  quote: string | null;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', { name: 'states', nullable: true, length: 255 })
  states: string | null;

  @Column('varchar', { name: 'qty', nullable: true, length: 255 })
  qty: string | null;

  @Column('varchar', { name: 'work_type', nullable: true, length: 255 })
  workType: string | null;

  @Column('varchar', { name: 'room', nullable: true, length: 255 })
  room: string | null;

  @Column('varchar', { name: 'client', nullable: true, length: 255 })
  client: string | null;

  @Column('varchar', { name: 'contact', nullable: true, length: 255 })
  contact: string | null;

  // @Column('text', { 
  //   name: 'work_instructions',
  //   // array: true,         // 声明为数组类型
  //   nullable: true,      // 允许为空
  //   // length: 255          // 每个数组元素的最大长度
  // })
  // workInstructions: string[] | null; // 类型定义为字符串数组或null
  
  // @Column('text', { 
  //   name: 'assign_to',
  //   // array: true,         // 声明为数组类型
  //   nullable: true       // 允许为空
  // })
  // assignTo: string[] | null; // 类型定义为字符串数组或null
  
  @Column('varchar', { name: 'work_instructions', nullable: true, length: 255 })
  workInstructions: string | null;

  @Column('varchar', { name: 'assign_to', nullable: true, length: 255 })
  assignTo: string | null;

  @Column('timestamp', { name: 'start_date', nullable: true })
  startDate: Date | null;

  @Column('timestamp', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('varchar', { name: 'remark', nullable: true, length: 255 })
  remark: string | null;

  @Column('varchar', { name: 'reedback', nullable: true, length: 255 })
  reedback: string | null;

  @Column('varchar', { name: 'full_address', nullable: true, length: 255 })
  fullAddress: string | null;

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

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;

  @Column('varchar', { name: 'priority', nullable: true, length: 255 })
  priority: string | null;

  @Column('varchar', { name: 'terms_id', nullable: true, length: 255 })
  termsId: string | null;

  @Column('varchar', { name: 'sign_below_txt', nullable: true, length: 255 })
  signBelowTxt: string | null;

  @Column('text', { name: 'sign_below_photo', nullable: true })
  signBelowPhoto: string | null;

  @Column('varchar', { name: 'sign_below_userid', nullable: true, length: 255 })
  signBelowUserid: string | null;

  @Column('timestamp', { name: 'sign_below_time', nullable: true })
  signBelowTime: Date | null;
}
