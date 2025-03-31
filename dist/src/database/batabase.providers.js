"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const account_tag_1 = require("../myentities/account.tag");
const User_1 = require("../myentities/User");
const Activity_1 = require("../myentities/Activity");
const Attachment_1 = require("../myentities/Attachment");
const Attence_1 = require("../myentities/Attence");
const Campaign_1 = require("../myentities/Campaign");
const Client_1 = require("../myentities/Client");
const ContacPerson_1 = require("../myentities/ContacPerson");
const Country_1 = require("../myentities/Country");
const Currency_1 = require("../myentities/Currency");
const Customization_1 = require("../myentities/Customization");
const DeliveryItem_1 = require("../myentities/DeliveryItem");
const DeliveryOrder_1 = require("../myentities/DeliveryOrder");
const ExchangeRate_1 = require("../myentities/ExchangeRate");
const Feedback_1 = require("../myentities/Feedback");
const fhtest_1 = require("../myentities/fhtest");
const Industry_1 = require("../myentities/Industry");
const InvoiceDetails_1 = require("../myentities/InvoiceDetails");
const InvoiceItem_1 = require("../myentities/InvoiceItem");
const InvoicePayment_1 = require("../myentities/InvoicePayment");
const Job_1 = require("../myentities/Job");
const JobItem_1 = require("../myentities/JobItem");
const Language_1 = require("../myentities/Language");
const Leadpools_1 = require("../myentities/Leadpools");
const Leads_1 = require("../myentities/Leads");
const MonthlyGoal_1 = require("../myentities/MonthlyGoal");
const Note_1 = require("../myentities/Note");
const Opportunity_1 = require("../myentities/Opportunity");
const OpportunityComments_1 = require("../myentities/OpportunityComments");
const Parameter_1 = require("../myentities/Parameter");
const PaymentTerm_1 = require("../myentities/PaymentTerm");
const Product_1 = require("../myentities/Product");
const ProductItem_1 = require("../myentities/ProductItem");
const ProductType_1 = require("../myentities/ProductType");
const PurchaseItem_1 = require("../myentities/PurchaseItem");
const PurchaseOrder_1 = require("../myentities/PurchaseOrder");
const Quotation_1 = require("../myentities/Quotation");
const QuotationComments_1 = require("../myentities/QuotationComments");
const QuotationItem_1 = require("../myentities/QuotationItem");
const Role_1 = require("../myentities/Role");
const ServiceContract_1 = require("../myentities/ServiceContract");
const ServiceItem_1 = require("../myentities/ServiceItem");
const Skill_1 = require("../myentities/Skill");
const StaffList_1 = require("../myentities/StaffList");
const Stage_1 = require("../myentities/Stage");
const Task_1 = require("../myentities/Task");
const TaskAttachment_1 = require("../myentities/TaskAttachment");
const TaskComments_1 = require("../myentities/TaskComments");
const Taxes_1 = require("../myentities/Taxes");
const Template_1 = require("../myentities/Template");
const TermCondition_1 = require("../myentities/TermCondition");
const Terms_1 = require("../myentities/Terms");
const TermsMember_1 = require("../myentities/TermsMember");
const Ticket_1 = require("../myentities/Ticket");
const Translate_1 = require("../myentities/Translate");
const Unit_1 = require("../myentities/Unit");
const UserRole_1 = require("../myentities/UserRole");
const Warranty_1 = require("../myentities/Warranty");
const Work_1 = require("../myentities/Work");
const WorkItem_1 = require("../myentities/WorkItem");
const WorkNote_1 = require("../myentities/WorkNote");
const fhcrm_table1_1 = require("../myentities/fhcrm_table1");
const accounting_voucher_list_1 = require("../myentities/accounting_voucher_list");
const accounting_voucher_1 = require("../myentities/accounting_voucher");
const bank_cash_1 = require("../myentities/bank_cash");
const batch_1 = require("../myentities/batch");
const inventory_list_1 = require("../myentities/inventory_list");
const inventory_1 = require("../myentities/inventory");
const mybom_product_1 = require("../myentities/mybom_product");
const mybom_1 = require("../myentities/mybom");
const mywork_center_1 = require("../myentities/mywork_center");
const mywork_1 = require("../myentities/mywork");
const storage_location_1 = require("../myentities/storage_location");
const store_move_list_1 = require("../myentities/store_move_list");
const store_move_1 = require("../myentities/store_move");
const warehouse_1 = require("../myentities/warehouse");
const stock_quant_1 = require("../myentities/stock_quant");
const stock_valuation_layer_1 = require("../myentities/stock_valuation_layer");
const stock_warehouse_orderpoint_1 = require("../myentities/stock_warehouse_orderpoint");
const fhfault_1 = require("../myentities/fhfault");
const fhinspection_1 = require("../myentities/fhinspection");
const fhmeasuring_1 = require("../myentities/fhmeasuring");
const fhreform_1 = require("../myentities/fhreform");
const fhrunning_1 = require("../myentities/fhrunning");
const fhservice_plan_1 = require("../myentities/fhservice_plan");
const fhservicetb_1 = require("../myentities/fhservicetb");
const fhtest_fht1_1 = require("../myentities/fhtest_fht1");
const hr_contract_1 = require("../myentities/hr_contract");
const procure_plan_list_1 = require("../myentities/procure_plan_list");
const procure_plan_1 = require("../myentities/procure_plan");
const procure_price_1 = require("../myentities/procure_price");
const quality_inspection_item_1 = require("../myentities/quality_inspection_item");
const quality_inspection_1 = require("../myentities/quality_inspection");
const sale_contract_1 = require("../myentities/sale_contract");
const selling_price_list_1 = require("../myentities/selling_price_list");
const selling_price_1 = require("../myentities/selling_price");
const tbaftersale_1 = require("../myentities/tbaftersale");
const tbmatching_1 = require("../myentities/tbmatching");
const tbmatchingline_1 = require("../myentities/tbmatchingline");
const tbpackag_1 = require("../myentities/tbpackag");
const tbreturnvisit_1 = require("../myentities/tbreturnvisit");
const options = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'openerp',
    password: 'openerp',
    database: 'crmwf2025',
    synchronize: false,
    entities: [
        stock_quant_1.StockQuant,
        stock_valuation_layer_1.StockValuationLayer,
        stock_warehouse_orderpoint_1.StockWarehouseOrderpoint,
        accounting_voucher_list_1.AccountingVoucherList,
        accounting_voucher_1.AccountingVoucher,
        bank_cash_1.BankCash,
        batch_1.Batch,
        inventory_list_1.InventoryList,
        inventory_1.Inventory,
        mybom_product_1.myBomProduct,
        mybom_1.mybom,
        mywork_center_1.myWorkCenter,
        mywork_1.myWork,
        storage_location_1.Storagelocation,
        store_move_list_1.StoreMoveList,
        store_move_1.StoreMove,
        warehouse_1.Warehouse,
        account_tag_1.AccountTag,
        User_1.User,
        Activity_1.Activity,
        Attachment_1.Attachment,
        Attence_1.Attence,
        Campaign_1.Campaign,
        Client_1.Client,
        ContacPerson_1.ContacPerson,
        Country_1.Country,
        Currency_1.Currency,
        Customization_1.Customization,
        DeliveryItem_1.DeliveryItem,
        DeliveryOrder_1.DeliveryOrder,
        ExchangeRate_1.ExchangeRate,
        Feedback_1.Feedback,
        fhtest_1.Fhtest,
        Industry_1.Industry,
        InvoiceDetails_1.InvoiceDetails,
        InvoiceItem_1.InvoiceItem,
        InvoicePayment_1.InvoicePayment,
        Job_1.Job,
        JobItem_1.JobItem,
        Language_1.Language,
        Leadpools_1.Leadpools,
        Leads_1.Leads,
        MonthlyGoal_1.MonthlyGoal,
        Note_1.Note,
        Opportunity_1.Opportunity,
        OpportunityComments_1.OpportunityComments,
        Parameter_1.Parameter,
        PaymentTerm_1.PaymentTerm,
        Product_1.Product,
        ProductItem_1.ProductItem,
        ProductType_1.ProductType,
        PurchaseItem_1.PurchaseItem,
        PurchaseOrder_1.PurchaseOrder,
        Quotation_1.Quotation,
        QuotationComments_1.QuotationComments,
        QuotationItem_1.QuotationItem,
        Role_1.Role,
        ServiceContract_1.ServiceContract,
        ServiceItem_1.ServiceItem,
        Skill_1.Skill,
        StaffList_1.StaffList,
        Stage_1.Stage,
        Task_1.Task,
        TaskAttachment_1.TaskAttachment,
        TaskComments_1.TaskComments,
        Taxes_1.Taxes,
        Template_1.Template,
        TermCondition_1.TermCondition,
        Terms_1.Terms,
        TermsMember_1.TermsMember,
        Ticket_1.Ticket,
        Translate_1.Translate,
        Unit_1.Unit,
        User_1.User,
        UserRole_1.UserRole,
        Warranty_1.Warranty,
        Work_1.Work,
        WorkItem_1.WorkItem,
        WorkNote_1.WorkNote,
        fhcrm_table1_1.FHcrmTable1,
        fhfault_1.Fhfault,
        fhinspection_1.Fhinspection,
        fhmeasuring_1.Fhmeasuring,
        fhreform_1.Fhreform,
        fhrunning_1.Fhrunning,
        fhservice_plan_1.FhservicePlan,
        fhservicetb_1.Fhservicetb,
        fhtest_fht1_1.FhtestFht1,
        fhtest_1.Fhtest,
        hr_contract_1.HrContract,
        procure_plan_list_1.ProcurePlanList,
        procure_plan_1.ProcurePlan,
        procure_price_1.ProcurePrice,
        quality_inspection_item_1.QualitylnspectionItem,
        quality_inspection_1.QualityInspection,
        sale_contract_1.SaleContract,
        selling_price_list_1.SellingPriceList,
        selling_price_1.SellingPrice,
        store_move_list_1.StoreMoveList,
        tbaftersale_1.Tbaftersale,
        tbmatching_1.Tbmatching,
        tbmatchingline_1.Tbmatchingline,
        tbpackag_1.Tbpackag,
        tbreturnvisit_1.Tbreturnvisit,
    ],
};
(0, typeorm_1.createConnection)(options).then(async () => {
    console.log('FHDB connect: ok ');
}, (error) => console.log('Cannot connect: ', error));
//# sourceMappingURL=batabase.providers.js.map