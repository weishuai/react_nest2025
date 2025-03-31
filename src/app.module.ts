import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AccountTagController } from './mycontrollers/account.tag.controller';
import { FHUserController } from './mycontrollers/FHUserController';
import { FHChartController } from './mycontrollers/FHChartController';
import { uploadController } from './mycontrollers/uploadController';
import { UploadmanyController } from './mycontrollers/uploadmanyController';
import { ProductsController } from './mycontrollers/productsController';
///import { AccountTagController } from './mycontrollers/AccountTagController';
import { ActivityController } from './mycontrollers/ActivityController';
import { AttachmentController } from './mycontrollers/AttachmentController';
import { AttenceController } from './mycontrollers/AttenceController';
import { CampaignsController } from './mycontrollers/CampaignsController';
import { ClientController } from './mycontrollers/ClientController';
import { ContacPersonController } from './mycontrollers/ContacPersonController';
import { CountryController } from './mycontrollers/CountryContrller';
import { CurrencyController } from './mycontrollers/CurrencyController';
import { CustomizationController } from './mycontrollers/CustomizationController';
import { DeliveryItemController } from './mycontrollers/DeliveryItemController';
import { DeliveryOrderController } from './mycontrollers/DeliveryOrderController';
import { ExchangeRateController } from './mycontrollers/ExchangeRateController';
import { FeedbackController } from './mycontrollers/FeedbackController';
import { FHRoleController } from './mycontrollers/FHRoleController';
import { FhtestController } from './mycontrollers/FhtestController';
///import { FHUserController } from './mycontrollers/FHUserController';
import { IndustryController } from './mycontrollers/IndustryController';
import { InvoiceDetailsController } from './mycontrollers/InvoiceDetailsController';
import { InvoiceItemController } from './mycontrollers/InvoiceItemController';
import { InvoicePaymentController } from './mycontrollers/InvoicePaymentController';
import { JobController } from './mycontrollers/JobController';
import { JobItemController } from './mycontrollers/JobItemController';
import { LanguageController } from './mycontrollers/LanguageController';
import { LeadpoolsController } from './mycontrollers/LeadpoolsController';
import { LeadsController } from './mycontrollers//LeadsController';
import { MessageController } from './mycontrollers//MessageController';
import { MonthlyGoalController } from './mycontrollers/MonthlyGoalController';
import { NoteController } from './mycontrollers/NoteController';
import { OpportunityCommentsController } from './mycontrollers/OpportunityCommentsController';
import { OpportunityController } from './mycontrollers/OpportunityController';
import { ParameterController } from './mycontrollers/ParameterController';
import { PaymentTermController } from './mycontrollers/PaymentTermController';
import { ProductController } from './mycontrollers/ProductController';
import { ProductItemController } from './mycontrollers/ProductItemController';
import { ProductTypeController } from './mycontrollers/ProductTypeController';
import { PurchaseItemController } from './mycontrollers/PurchaseItemController';
import { PurchaseOrderController } from './mycontrollers/PurchaseOrderController';
import { PythonShellController } from './mycontrollers/PythonShellController';
import { QuotationCommentsController } from './mycontrollers/QuotationCommentsController';
import { QuotationController } from './mycontrollers/QuotationController';
import { QuotationItemController } from './mycontrollers/QuotationItemController';
import { ServiceContractController } from './mycontrollers/ServiceContractController';
import { ServiceItemController } from './mycontrollers/ServiceItemController';
import { SkillController } from './mycontrollers/SkillController';
import { StaffListController } from './mycontrollers/StaffListController';
import { StageController } from './mycontrollers/StageController';
import { TaskAttachmentController } from './mycontrollers/TaskAttachmentController';
import { TaskCommentsController } from './mycontrollers/TaskCommentsController';
import { TaskController } from './mycontrollers/TaskController';
import { TaxesController } from './mycontrollers/TaxesController';
import { TemplateController } from './mycontrollers/TemplateController';
import { TermConditionController } from './mycontrollers/TermConditionController';
import { TermsController } from './mycontrollers/TermsController';
import { TermsMemberController } from './mycontrollers/TermsMemberController';
import { TestController } from './mycontrollers/TestController';
import { TicketController } from './mycontrollers/TicketController';
import { TranslateController } from './mycontrollers/TranslateController';
import { UnitController } from './mycontrollers/UnitController';
import { UserController } from './mycontrollers/UserController';
import { WarrantyController } from './mycontrollers//WarrantyController';
import { WorkController } from './mycontrollers//WorkController';
import { WorkItemController } from './mycontrollers/WorkItemController';
import { WorkNoteController } from './mycontrollers/WorkNoteController';
//import { FHcrmTable1Controller } from './mycontrollers/fhcrm_table1_controller';

import { AccountingVoucherController } from './mycontrollers/accounting_voucher_controller';
import { AccountingVoucherListController } from './mycontrollers/accounting_voucher_list_controller';
import { BankCashController } from './mycontrollers/bank_cash_controller';
import { BatchController } from './mycontrollers/batch_controller';
import { InventoryController } from './mycontrollers/inventory_controller';
import { InventoryListController } from './mycontrollers/inventory_list_controller';
import { mybomController } from './mycontrollers/mybom_controller';
import { myBomProductController } from './mycontrollers/mybom_product_controller';

import { myWorkCenterController } from './mycontrollers/mywork_center_controller';
import { myWorkController } from './mycontrollers/mywork_controller';
import { StoragelocationController } from './mycontrollers/storage_location_controller';
import { StoreMoveController  } from './mycontrollers/store_move_controller';
import { StoreMoveListController  } from './mycontrollers/store_move_list_controller';
import { WarehouseController } from './mycontrollers/warehouse_controller';

import { StockQuantController } from './mycontrollers/stock_quant_controller';
import { StockValuationLayerController } from './mycontrollers/stock_valuation_layer_controller';
import { StockWarehouseOrderpointController } from './mycontrollers/stock_warehouse_orderpoint_controller';



import { FhfaultController } from './mycontrollers/fhfault_controller';
import { FhinspectionController } from './mycontrollers/fhinspection_controller';
import { FhmeasuringController } from './mycontrollers/fhmeasuring_controller';
import { FhreformController } from './mycontrollers/fhreform_controller';
import { FhrunningController } from './mycontrollers/fhrunning_controller';
import { FhservicePlanController } from './mycontrollers/fhservice_plan_controller';
import { FhservicetbController } from './mycontrollers/fhservicetb_controller';
// import { FhtestController } from './mycontrollers/fhtest_controller';
import { FhtestFht1Controller } from './mycontrollers/fhtest_fht1_controller';
import { HrContractController } from './mycontrollers/hr_contract_controller';
import { ProcurePlanController } from './mycontrollers/procure_plan_controller';
import { ProcurePlanListController } from './mycontrollers/procure_plan_list_controller';
import { ProcurePriceController } from './mycontrollers/procure_price_controller';
import { QualityInspectionController } from './mycontrollers/quality_inspection_controller';
import { QualitylnspectionItemController } from './mycontrollers/quality_inspection_item_controller';
import { ReturnorderController } from './mycontrollers/returnorder_controller';
import { SaleContractController } from './mycontrollers/sale_contract_controller';
import { SellingPriceController } from './mycontrollers/selling_price_controller';
import { SellingPriceListController } from './mycontrollers/selling_price_list_controller';
// import { StoreMoveListController  } from './mycontrollers/store_move_list_controller';
import { TbaftersaleController } from './mycontrollers/tbaftersale_controller';
import { TbmatchingController } from './mycontrollers/tbmatching_controller';
import { TbmatchinglineController } from './mycontrollers/tbmatchingline_controller';
import { TbpackagController  } from './mycontrollers/tbpackag_controller';
import { TbreturnvisitController } from './mycontrollers/tbreturnvisit_controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    StockQuantController,
    StockValuationLayerController,
    StockWarehouseOrderpointController,
    AccountingVoucherController,
    AccountingVoucherListController,
    BankCashController,
    BatchController,
    InventoryController,
    InventoryListController,
    mybomController,
    myBomProductController,
    myWorkCenterController,
    myWorkController,
    StoragelocationController,
    StoreMoveController,
    StoreMoveListController,
    WarehouseController,
    AppController,
    AccountTagController,
    FHUserController,
    FHChartController,
    uploadController,
    UploadmanyController,
    ProductsController,
    AccountTagController,
    ActivityController,
    AttachmentController,
    AttenceController,
    CampaignsController,
    ClientController,
    ContacPersonController,
    CountryController,
    CurrencyController,
    CustomizationController,
    DeliveryItemController,
    DeliveryOrderController,
    ExchangeRateController,
    FeedbackController,
    FHRoleController,
    FhtestController,
    FHUserController,
    IndustryController,
    InvoiceDetailsController,
    InvoiceItemController,
    InvoicePaymentController,
    JobController,
    JobItemController,
    LanguageController,
    LeadpoolsController,
    LeadsController,
    MessageController,
    MonthlyGoalController,
    NoteController,
    OpportunityCommentsController,
    OpportunityController,
    ParameterController,
    PaymentTermController,
    ProductController,
    ProductItemController,
    ProductTypeController,
    PurchaseItemController,
    PurchaseOrderController,
    PythonShellController,
    QuotationCommentsController,
    QuotationController,
    QuotationItemController,
    ServiceContractController,
    ServiceItemController,
    SkillController,
    StaffListController,
    StageController,
    TaskAttachmentController,
    TaskCommentsController,
    TaskController,
    TaxesController,
    TemplateController,
    TermConditionController,
    TermsController,
    TermsMemberController,
    TestController,
    TicketController,
    TranslateController,
    UnitController,
    UserController,
    WarrantyController,
    WorkController,
    WorkItemController,
    WorkNoteController,
    //FHcrmTable1Controller,
    FhfaultController,
    FhinspectionController,
    FhmeasuringController,
    FhreformController,
    FhrunningController,
    FhservicePlanController,
    FhservicetbController,
    FhtestController,
    FhtestFht1Controller,
    HrContractController,
    ProcurePlanController ,
    ProcurePlanListController,
    ProcurePriceController,
    QualityInspectionController,
    QualitylnspectionItemController,
    ReturnorderController,
    SaleContractController,
    SellingPriceController,
    SellingPriceListController,
    StoreMoveListController,
    TbaftersaleController,
    TbmatchingController,
    TbmatchinglineController,
    TbpackagController,
    TbreturnvisitController,

  ],
  providers: [AppService],
})
export class AppModule {}
