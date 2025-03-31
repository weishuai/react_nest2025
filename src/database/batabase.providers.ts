import { ConnectionOptions, createConnection } from 'typeorm';
import { AccountTag } from '../myentities/account.tag';
import { User } from '../myentities/User';

import { Activity } from '../myentities/Activity';
import { Attachment } from '../myentities/Attachment';
import { Attence } from '../myentities/Attence';
import { Campaign } from '../myentities/Campaign';
import { Client } from '../myentities/Client';
import { ContacPerson } from '../myentities/ContacPerson';
import { Country } from '../myentities/Country';
import { Currency } from '../myentities/Currency';
import { Customization } from '../myentities/Customization';
import { DeliveryItem } from '../myentities/DeliveryItem';
import { DeliveryOrder } from '../myentities/DeliveryOrder';
import { ExchangeRate } from '../myentities/ExchangeRate';
import { Feedback } from '../myentities/Feedback';
import { Fhtest } from '../myentities/fhtest'; 
import { Industry } from '../myentities/Industry';
import { InvoiceDetails } from '../myentities/InvoiceDetails';
import { InvoiceItem } from '../myentities/InvoiceItem';
import { InvoicePayment } from '../myentities/InvoicePayment';
import { Job } from '../myentities/Job';
import { JobItem } from '../myentities/JobItem';
import { Language } from '../myentities/Language';
import { Leadpools } from '../myentities/Leadpools';
import { Leads } from '../myentities/Leads';
import { MonthlyGoal } from '../myentities/MonthlyGoal';
import { Note } from '../myentities/Note';
import { Opportunity } from '../myentities/Opportunity';
import { OpportunityComments } from '../myentities/OpportunityComments';
import { Parameter } from '../myentities/Parameter';
import { PaymentTerm } from '../myentities/PaymentTerm';
import { Product } from '../myentities/Product';
import { ProductItem } from '../myentities/ProductItem';
import { ProductType } from '../myentities/ProductType';
import { PurchaseItem } from '../myentities/PurchaseItem';
import { PurchaseOrder } from '../myentities/PurchaseOrder';
import { Quotation } from '../myentities/Quotation';
import { QuotationComments } from '../myentities/QuotationComments';
import { QuotationItem } from '../myentities/QuotationItem';
import { Role } from '../myentities/Role';
import { ServiceContract } from '../myentities/ServiceContract';
import { ServiceItem } from '../myentities/ServiceItem';
import { Skill } from '../myentities/Skill';
import { StaffList } from '../myentities/StaffList';
import { Stage } from '../myentities/Stage';
import { Task } from '../myentities/Task';
import { TaskAttachment } from '../myentities/TaskAttachment';
import { TaskComments } from '../myentities/TaskComments';
import { Taxes } from '../myentities/Taxes';
import { Template } from '../myentities/Template';
import { TermCondition } from '../myentities/TermCondition';
import { Terms } from '../myentities/Terms';
import { TermsMember } from '../myentities/TermsMember';
import { Ticket } from '../myentities/Ticket';
import { Translate } from '../myentities/Translate';
import { Unit } from '../myentities/Unit';
import { UserRole } from '../myentities/UserRole';
import { Warranty } from '../myentities/Warranty';
import { Work } from '../myentities/Work';
import { WorkItem } from '../myentities/WorkItem';
import { WorkNote } from '../myentities/WorkNote';
import { FHcrmTable1 } from '../myentities/fhcrm_table1';


import { AccountingVoucherList } from '../myentities/accounting_voucher_list';
import { AccountingVoucher } from '../myentities/accounting_voucher';
import { BankCash } from '../myentities/bank_cash';
import { Batch } from '../myentities/batch';
import { InventoryList } from '../myentities/inventory_list';
import { Inventory } from '../myentities/inventory';
import { myBomProduct } from '../myentities/mybom_product';
import { mybom } from '../myentities/mybom';
import { myWorkCenter } from '../myentities/mywork_center';
import { myWork } from '../myentities/mywork';
import { Storagelocation } from '../myentities/storage_location';
import { StoreMoveList } from '../myentities/store_move_list';
import { StoreMove } from '../myentities/store_move';
import { Warehouse  } from '../myentities/warehouse';

import { StockQuant } from '../myentities/stock_quant';
import { StockValuationLayer  } from '../myentities/stock_valuation_layer';
import { StockWarehouseOrderpoint  } from '../myentities/stock_warehouse_orderpoint';

import { Fhfault } from '../myentities/fhfault';
import { Fhinspection } from '../myentities/fhinspection';
import { Fhmeasuring } from '../myentities/fhmeasuring';
import { Fhreform } from '../myentities/fhreform';
import { Fhrunning } from '../myentities/fhrunning';
import { FhservicePlan } from '../myentities/fhservice_plan';
import { Fhservicetb } from '../myentities/fhservicetb';
import { FhtestFht1 } from '../myentities/fhtest_fht1';
// import { Fhtest } from '../myentities/fhtest';
import { HrContract } from '../myentities/hr_contract';
import { ProcurePlanList } from '../myentities/procure_plan_list';
import { ProcurePlan } from '../myentities/procure_plan';
import { ProcurePrice } from '../myentities/procure_price';
import { QualitylnspectionItem } from '../myentities/quality_inspection_item';
import { QualityInspection } from '../myentities/quality_inspection';
import { SaleContract } from '../myentities/sale_contract';
import { SellingPriceList } from '../myentities/selling_price_list';
import { SellingPrice } from '../myentities/selling_price';
// import { StoreMoveList } from '../myentities/store_move_list';
import { Tbaftersale } from '../myentities/tbaftersale';
import { Tbmatching } from '../myentities/tbmatching';
import { Tbmatchingline } from '../myentities/tbmatchingline';
import { Tbpackag } from '../myentities/tbpackag';
import { Tbreturnvisit } from '../myentities/tbreturnvisit';

const options: ConnectionOptions = {
  type: 'postgres',
  //host: '192.168.0.103',
  host: '127.0.0.1',
  port: 5432,
  username: 'openerp',
  password: 'openerp',
  database: 'crmwf2025',
  synchronize: false,
  entities: [
    StockQuant,
    StockValuationLayer,
    StockWarehouseOrderpoint,
    AccountingVoucherList,
    AccountingVoucher,
    BankCash,
    Batch,
    InventoryList,
    Inventory,
    myBomProduct,
    mybom,
    myWorkCenter,
    myWork,
    Storagelocation,
    StoreMoveList,
    StoreMove,
    Warehouse,
    AccountTag,
    User,
    Activity,
    Attachment,
    Attence,
    Campaign,
    Client,
    ContacPerson,
    Country,
    Currency,
    Customization,
    DeliveryItem,
    DeliveryOrder,
    ExchangeRate,
    Feedback,
    Fhtest,
    Industry,
    InvoiceDetails,
    InvoiceItem,
    InvoicePayment,
    Job,
    JobItem,
    Language,
    Leadpools,
    Leads,
    MonthlyGoal,
    Note,
    Opportunity,
    OpportunityComments,
    Parameter,
    PaymentTerm,
    Product,
    ProductItem,
    ProductType,
    PurchaseItem,
    PurchaseOrder,
    Quotation,
    QuotationComments,
    QuotationItem,
    Role,
    ServiceContract,
    ServiceItem,
    Skill,
    StaffList,
    Stage,
    Task,
    TaskAttachment,
    TaskComments,
    Taxes,
    Template,
    TermCondition,
    Terms,
    TermsMember,
    Ticket,
    Translate,
    Unit,
    User,
    UserRole,
    Warranty,
    Work,
    WorkItem,
    WorkNote,
    FHcrmTable1,
    Fhfault,
    Fhinspection,
    Fhmeasuring,
    Fhreform,
    Fhrunning ,
    FhservicePlan,
    Fhservicetb,
    FhtestFht1,
    Fhtest,
    HrContract,
    ProcurePlanList,
    ProcurePlan,
    ProcurePrice,
    QualitylnspectionItem,
    QualityInspection,
    SaleContract,
    SellingPriceList,
    SellingPrice,
    StoreMoveList,
    Tbaftersale,
    Tbmatching,
    Tbmatchingline,
    Tbpackag,
    Tbreturnvisit,
  
  ],
};
createConnection(options).then(
  async () => {
    console.log('FHDB connect: ok ');
  },
  (error) => console.log('Cannot connect: ', error),
);

/*
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'openerp',
        password: 'openerp',
        database: 'crmwf',
        synchronize: false,
        entities: [AccountTag],
        //autoLoadEntities: true,
      }).then(
        (connection) => {


          const postRepository = connection.getRepository(AccountTag);

          postRepository
                .createQueryBuilder("post")
                .where("post.title=:keyword")
                .setParameter("keyword", "hello")
                .getMany();
            
            
      
  }),
];
*/
//createConnection();

///TypeOrmModule.forRoot({});
