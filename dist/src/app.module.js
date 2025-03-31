"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const account_tag_controller_1 = require("./mycontrollers/account.tag.controller");
const FHUserController_1 = require("./mycontrollers/FHUserController");
const FHChartController_1 = require("./mycontrollers/FHChartController");
const uploadController_1 = require("./mycontrollers/uploadController");
const uploadmanyController_1 = require("./mycontrollers/uploadmanyController");
const productsController_1 = require("./mycontrollers/productsController");
const ActivityController_1 = require("./mycontrollers/ActivityController");
const AttachmentController_1 = require("./mycontrollers/AttachmentController");
const AttenceController_1 = require("./mycontrollers/AttenceController");
const CampaignsController_1 = require("./mycontrollers/CampaignsController");
const ClientController_1 = require("./mycontrollers/ClientController");
const ContacPersonController_1 = require("./mycontrollers/ContacPersonController");
const CountryContrller_1 = require("./mycontrollers/CountryContrller");
const CurrencyController_1 = require("./mycontrollers/CurrencyController");
const CustomizationController_1 = require("./mycontrollers/CustomizationController");
const DeliveryItemController_1 = require("./mycontrollers/DeliveryItemController");
const DeliveryOrderController_1 = require("./mycontrollers/DeliveryOrderController");
const ExchangeRateController_1 = require("./mycontrollers/ExchangeRateController");
const FeedbackController_1 = require("./mycontrollers/FeedbackController");
const FHRoleController_1 = require("./mycontrollers/FHRoleController");
const FhtestController_1 = require("./mycontrollers/FhtestController");
const IndustryController_1 = require("./mycontrollers/IndustryController");
const InvoiceDetailsController_1 = require("./mycontrollers/InvoiceDetailsController");
const InvoiceItemController_1 = require("./mycontrollers/InvoiceItemController");
const InvoicePaymentController_1 = require("./mycontrollers/InvoicePaymentController");
const JobController_1 = require("./mycontrollers/JobController");
const JobItemController_1 = require("./mycontrollers/JobItemController");
const LanguageController_1 = require("./mycontrollers/LanguageController");
const LeadpoolsController_1 = require("./mycontrollers/LeadpoolsController");
const LeadsController_1 = require("./mycontrollers//LeadsController");
const MessageController_1 = require("./mycontrollers//MessageController");
const MonthlyGoalController_1 = require("./mycontrollers/MonthlyGoalController");
const NoteController_1 = require("./mycontrollers/NoteController");
const OpportunityCommentsController_1 = require("./mycontrollers/OpportunityCommentsController");
const OpportunityController_1 = require("./mycontrollers/OpportunityController");
const ParameterController_1 = require("./mycontrollers/ParameterController");
const PaymentTermController_1 = require("./mycontrollers/PaymentTermController");
const ProductController_1 = require("./mycontrollers/ProductController");
const ProductItemController_1 = require("./mycontrollers/ProductItemController");
const ProductTypeController_1 = require("./mycontrollers/ProductTypeController");
const PurchaseItemController_1 = require("./mycontrollers/PurchaseItemController");
const PurchaseOrderController_1 = require("./mycontrollers/PurchaseOrderController");
const PythonShellController_1 = require("./mycontrollers/PythonShellController");
const QuotationCommentsController_1 = require("./mycontrollers/QuotationCommentsController");
const QuotationController_1 = require("./mycontrollers/QuotationController");
const QuotationItemController_1 = require("./mycontrollers/QuotationItemController");
const ServiceContractController_1 = require("./mycontrollers/ServiceContractController");
const ServiceItemController_1 = require("./mycontrollers/ServiceItemController");
const SkillController_1 = require("./mycontrollers/SkillController");
const StaffListController_1 = require("./mycontrollers/StaffListController");
const StageController_1 = require("./mycontrollers/StageController");
const TaskAttachmentController_1 = require("./mycontrollers/TaskAttachmentController");
const TaskCommentsController_1 = require("./mycontrollers/TaskCommentsController");
const TaskController_1 = require("./mycontrollers/TaskController");
const TaxesController_1 = require("./mycontrollers/TaxesController");
const TemplateController_1 = require("./mycontrollers/TemplateController");
const TermConditionController_1 = require("./mycontrollers/TermConditionController");
const TermsController_1 = require("./mycontrollers/TermsController");
const TermsMemberController_1 = require("./mycontrollers/TermsMemberController");
const TestController_1 = require("./mycontrollers/TestController");
const TicketController_1 = require("./mycontrollers/TicketController");
const TranslateController_1 = require("./mycontrollers/TranslateController");
const UnitController_1 = require("./mycontrollers/UnitController");
const UserController_1 = require("./mycontrollers/UserController");
const WarrantyController_1 = require("./mycontrollers//WarrantyController");
const WorkController_1 = require("./mycontrollers//WorkController");
const WorkItemController_1 = require("./mycontrollers/WorkItemController");
const WorkNoteController_1 = require("./mycontrollers/WorkNoteController");
const accounting_voucher_controller_1 = require("./mycontrollers/accounting_voucher_controller");
const accounting_voucher_list_controller_1 = require("./mycontrollers/accounting_voucher_list_controller");
const bank_cash_controller_1 = require("./mycontrollers/bank_cash_controller");
const batch_controller_1 = require("./mycontrollers/batch_controller");
const inventory_controller_1 = require("./mycontrollers/inventory_controller");
const inventory_list_controller_1 = require("./mycontrollers/inventory_list_controller");
const mybom_controller_1 = require("./mycontrollers/mybom_controller");
const mybom_product_controller_1 = require("./mycontrollers/mybom_product_controller");
const mywork_center_controller_1 = require("./mycontrollers/mywork_center_controller");
const mywork_controller_1 = require("./mycontrollers/mywork_controller");
const storage_location_controller_1 = require("./mycontrollers/storage_location_controller");
const store_move_controller_1 = require("./mycontrollers/store_move_controller");
const store_move_list_controller_1 = require("./mycontrollers/store_move_list_controller");
const warehouse_controller_1 = require("./mycontrollers/warehouse_controller");
const stock_quant_controller_1 = require("./mycontrollers/stock_quant_controller");
const stock_valuation_layer_controller_1 = require("./mycontrollers/stock_valuation_layer_controller");
const stock_warehouse_orderpoint_controller_1 = require("./mycontrollers/stock_warehouse_orderpoint_controller");
const fhfault_controller_1 = require("./mycontrollers/fhfault_controller");
const fhinspection_controller_1 = require("./mycontrollers/fhinspection_controller");
const fhmeasuring_controller_1 = require("./mycontrollers/fhmeasuring_controller");
const fhreform_controller_1 = require("./mycontrollers/fhreform_controller");
const fhrunning_controller_1 = require("./mycontrollers/fhrunning_controller");
const fhservice_plan_controller_1 = require("./mycontrollers/fhservice_plan_controller");
const fhservicetb_controller_1 = require("./mycontrollers/fhservicetb_controller");
const fhtest_fht1_controller_1 = require("./mycontrollers/fhtest_fht1_controller");
const hr_contract_controller_1 = require("./mycontrollers/hr_contract_controller");
const procure_plan_controller_1 = require("./mycontrollers/procure_plan_controller");
const procure_plan_list_controller_1 = require("./mycontrollers/procure_plan_list_controller");
const procure_price_controller_1 = require("./mycontrollers/procure_price_controller");
const quality_inspection_controller_1 = require("./mycontrollers/quality_inspection_controller");
const quality_inspection_item_controller_1 = require("./mycontrollers/quality_inspection_item_controller");
const returnorder_controller_1 = require("./mycontrollers/returnorder_controller");
const sale_contract_controller_1 = require("./mycontrollers/sale_contract_controller");
const selling_price_controller_1 = require("./mycontrollers/selling_price_controller");
const selling_price_list_controller_1 = require("./mycontrollers/selling_price_list_controller");
const tbaftersale_controller_1 = require("./mycontrollers/tbaftersale_controller");
const tbmatching_controller_1 = require("./mycontrollers/tbmatching_controller");
const tbmatchingline_controller_1 = require("./mycontrollers/tbmatchingline_controller");
const tbpackag_controller_1 = require("./mycontrollers/tbpackag_controller");
const tbreturnvisit_controller_1 = require("./mycontrollers/tbreturnvisit_controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [
            stock_quant_controller_1.StockQuantController,
            stock_valuation_layer_controller_1.StockValuationLayerController,
            stock_warehouse_orderpoint_controller_1.StockWarehouseOrderpointController,
            accounting_voucher_controller_1.AccountingVoucherController,
            accounting_voucher_list_controller_1.AccountingVoucherListController,
            bank_cash_controller_1.BankCashController,
            batch_controller_1.BatchController,
            inventory_controller_1.InventoryController,
            inventory_list_controller_1.InventoryListController,
            mybom_controller_1.mybomController,
            mybom_product_controller_1.myBomProductController,
            mywork_center_controller_1.myWorkCenterController,
            mywork_controller_1.myWorkController,
            storage_location_controller_1.StoragelocationController,
            store_move_controller_1.StoreMoveController,
            store_move_list_controller_1.StoreMoveListController,
            warehouse_controller_1.WarehouseController,
            app_controller_1.AppController,
            account_tag_controller_1.AccountTagController,
            FHUserController_1.FHUserController,
            FHChartController_1.FHChartController,
            uploadController_1.uploadController,
            uploadmanyController_1.UploadmanyController,
            productsController_1.ProductsController,
            account_tag_controller_1.AccountTagController,
            ActivityController_1.ActivityController,
            AttachmentController_1.AttachmentController,
            AttenceController_1.AttenceController,
            CampaignsController_1.CampaignsController,
            ClientController_1.ClientController,
            ContacPersonController_1.ContacPersonController,
            CountryContrller_1.CountryController,
            CurrencyController_1.CurrencyController,
            CustomizationController_1.CustomizationController,
            DeliveryItemController_1.DeliveryItemController,
            DeliveryOrderController_1.DeliveryOrderController,
            ExchangeRateController_1.ExchangeRateController,
            FeedbackController_1.FeedbackController,
            FHRoleController_1.FHRoleController,
            FhtestController_1.FhtestController,
            FHUserController_1.FHUserController,
            IndustryController_1.IndustryController,
            InvoiceDetailsController_1.InvoiceDetailsController,
            InvoiceItemController_1.InvoiceItemController,
            InvoicePaymentController_1.InvoicePaymentController,
            JobController_1.JobController,
            JobItemController_1.JobItemController,
            LanguageController_1.LanguageController,
            LeadpoolsController_1.LeadpoolsController,
            LeadsController_1.LeadsController,
            MessageController_1.MessageController,
            MonthlyGoalController_1.MonthlyGoalController,
            NoteController_1.NoteController,
            OpportunityCommentsController_1.OpportunityCommentsController,
            OpportunityController_1.OpportunityController,
            ParameterController_1.ParameterController,
            PaymentTermController_1.PaymentTermController,
            ProductController_1.ProductController,
            ProductItemController_1.ProductItemController,
            ProductTypeController_1.ProductTypeController,
            PurchaseItemController_1.PurchaseItemController,
            PurchaseOrderController_1.PurchaseOrderController,
            PythonShellController_1.PythonShellController,
            QuotationCommentsController_1.QuotationCommentsController,
            QuotationController_1.QuotationController,
            QuotationItemController_1.QuotationItemController,
            ServiceContractController_1.ServiceContractController,
            ServiceItemController_1.ServiceItemController,
            SkillController_1.SkillController,
            StaffListController_1.StaffListController,
            StageController_1.StageController,
            TaskAttachmentController_1.TaskAttachmentController,
            TaskCommentsController_1.TaskCommentsController,
            TaskController_1.TaskController,
            TaxesController_1.TaxesController,
            TemplateController_1.TemplateController,
            TermConditionController_1.TermConditionController,
            TermsController_1.TermsController,
            TermsMemberController_1.TermsMemberController,
            TestController_1.TestController,
            TicketController_1.TicketController,
            TranslateController_1.TranslateController,
            UnitController_1.UnitController,
            UserController_1.UserController,
            WarrantyController_1.WarrantyController,
            WorkController_1.WorkController,
            WorkItemController_1.WorkItemController,
            WorkNoteController_1.WorkNoteController,
            fhfault_controller_1.FhfaultController,
            fhinspection_controller_1.FhinspectionController,
            fhmeasuring_controller_1.FhmeasuringController,
            fhreform_controller_1.FhreformController,
            fhrunning_controller_1.FhrunningController,
            fhservice_plan_controller_1.FhservicePlanController,
            fhservicetb_controller_1.FhservicetbController,
            FhtestController_1.FhtestController,
            fhtest_fht1_controller_1.FhtestFht1Controller,
            hr_contract_controller_1.HrContractController,
            procure_plan_controller_1.ProcurePlanController,
            procure_plan_list_controller_1.ProcurePlanListController,
            procure_price_controller_1.ProcurePriceController,
            quality_inspection_controller_1.QualityInspectionController,
            quality_inspection_item_controller_1.QualitylnspectionItemController,
            returnorder_controller_1.ReturnorderController,
            sale_contract_controller_1.SaleContractController,
            selling_price_controller_1.SellingPriceController,
            selling_price_list_controller_1.SellingPriceListController,
            store_move_list_controller_1.StoreMoveListController,
            tbaftersale_controller_1.TbaftersaleController,
            tbmatching_controller_1.TbmatchingController,
            tbmatchingline_controller_1.TbmatchinglineController,
            tbpackag_controller_1.TbpackagController,
            tbreturnvisit_controller_1.TbreturnvisitController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map