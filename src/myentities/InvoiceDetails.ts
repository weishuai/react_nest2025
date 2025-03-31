import { Column, Entity } from 'typeorm';

@Entity('invoice_details')
export class InvoiceDetails {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'linked_uotation', nullable: true, length: 255 })
  linkedUotation: string | null;

  @Column('varchar', { name: 'invoice_number', nullable: true, length: 255 })
  invoiceNumber: string | null;

  @Column('varchar', { name: 'invoice_status', nullable: true, length: 255 })
  invoiceStatus: string | null;

  @Column('varchar', { name: 'invoice_name', nullable: true, length: 255 })
  invoiceName: string | null;

  @Column('varchar', { name: 'account', nullable: true, length: 255 })
  account: string | null;

  @Column('varchar', { name: 'sales_person', nullable: true, length: 255 })
  salesPerson: string | null;

  @Column('varchar', { name: 'client_contact', nullable: true, length: 255 })
  clientContact: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  currency: string | null;

  @Column('timestamp', { name: 'invoice_date', nullable: true })
  invoiceDate: Date | null;

  @Column('timestamp', { name: 'due_date', nullable: true })
  dueDate: Date | null;

  @Column('varchar', { name: 'tech_name', nullable: true, length: 255 })
  techName: string | null;

  @Column('varchar', { name: 'tracking_no', nullable: true, length: 255 })
  trackingNo: string | null;

  @Column('varchar', { name: 'additional_field3', nullable: true, length: 255 })
  additionalField3: string | null;

  @Column('varchar', { name: 'additional_field4', nullable: true, length: 255 })
  additionalField4: string | null;

  @Column('varchar', { name: 'remark', nullable: true, length: 255 })
  remark: string | null;

  @Column('varchar', { name: 'client_number', nullable: true, length: 255 })
  clientNumber: string | null;

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

  @Column('varchar', { name: 'tax', nullable: true, length: 255 })
  tax: string | null;

  @Column('float', { name: 'over_date', nullable: true, precision: 12 })
  overDate: number | null;

  @Column('varchar', { name: 'is_alert', nullable: true, length: 255 })
  isAlert: string | null;

  @Column('float', {
    name: 'total_amount',
    nullable: true,
    precision: 255,
    scale: 0,
  })
  totalAmount: number | null;

  @Column('varchar', { name: 'client_po_number', nullable: true, length: 255 })
  clientPoNumber: string | null;

  @Column('varchar', { name: 'ref_number', nullable: true, length: 255 })
  refNumber: string | null;

  @Column('float', {
    name: 'paid_amount',
    nullable: true,
    precision: 255,
    scale: 0,
  })
  paidAmount: number | null;

  @Column('float', {
    name: 'outstanding_amount',
    nullable: true,
    precision: 255,
    scale: 0,
  })
  outstandingAmount: number | null;
}
