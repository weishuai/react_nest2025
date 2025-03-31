"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class QuotationRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Quotation).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Quotation).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Quotation).update(Ids[0], {
            isactived: '1',
        });
    }
    async getquotationsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            quotationName: 'quotation.quotation_name',
            discountType: 'quotation.discount_type',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getquotationAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            discountType: 'quotation.discount_type',
            quotationName: 'quotation.quotation_name',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['quotation.quotation_name', 'quotation.remark'], search.search);
        qb.orderBy('quotation.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getquotationAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            discountType: 'quotation.discount_type',
            quotationName: 'quotation.quotation_name',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getquotation(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            discountType: 'quotation.discount_type',
            quotationName: 'quotation.quotation_name',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("quotation.isactived='0' and (quotation.create_uid = '" +
            userIds +
            "' or quotation.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'status', search.fundType);
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            if (search.mtable == 'client') {
                (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'client_id', search.mid);
            }
            if (search.mtable == 'contac_person') {
                (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'contact', search.mid);
            }
            if (search.mtable == 'opportunity') {
                (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'opportunity', search.mid);
            }
            if (search.mtable == 'product') {
                const ojt = await this.quotationItemRepo.getQuotationItemByid(search.mid);
                if (!lodash_1.default.isNil(ojt)) {
                    (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'id', ojt.mid ? ojt.mid : '');
                }
            }
        }
        (0, my_utils_1.multiSearch)(qb, ['quotation.quotation_name', 'quotation.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
    async getquotationSQL(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            discountType: 'quotation.discount_type',
            quotationName: 'quotation.quotation_name',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation.isactived='0'");
        if (!lodash_1.default.isNil(search.stageName)) {
            (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'status', search.stageName);
        }
        if (!lodash_1.default.isNil(search.startDate) && lodash_1.default.isNil(search.endDate)) {
            console.log('endsValue:' + search.startDate);
            qb.andWhere("quotation.created_at >='" + search.startDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && lodash_1.default.isNil(search.startDate)) {
            console.log('endsValue:' + search.endDate);
            qb.andWhere("quotation.created_at <='" + search.endDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && !lodash_1.default.isNil(search.startDate)) {
            console.log('endsValue:' + search.endDate);
            qb.andWhere("(quotation.created_at >='" +
                search.startDate +
                "'" +
                " and quotation.created_at <='" +
                search.endDate +
                "')");
        }
        if (!lodash_1.default.isNil(search.Owner)) {
            qb.andWhere("quotation.sales_person ='" + search.Owner + "'");
        }
        if (!lodash_1.default.isNil(search.month)) {
            qb.andWhere("quotation.created_at LIKE '%" + search.month + "%'");
        }
        if (!lodash_1.default.isNil(search.Client)) {
            qb.andWhere("quotation.client_id = '" + search.Client + "'");
        }
        const count = await qb.getCount();
        const raws = await qb.getRawMany();
        return { count: count, raws: raws };
    }
    async getquotationSQLList(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Quotation).createQueryBuilder('quotation');
        const fields = {
            id: 'quotation.id',
            clientId: 'quotation.client_id',
            quotationName: 'quotation.quotation_name',
            discountType: 'quotation.discount_type',
            salesPerson: 'quotation.sales_person',
            opportunity: 'quotation.opportunity',
            paymentTerms: 'quotation.payment_terms',
            contact: 'quotation.contact',
            taxes: 'quotation.taxes',
            expirationDate: 'quotation.expiration_date',
            currency: 'quotation.currency',
            cat: 'quotation.cat',
            test2: 'quotation.test2',
            additionalField3: 'quotation.additional_field3',
            additionalField4: 'quotation.additional_field4',
            termsConditions: 'quotation.terms_conditions',
            remark: 'quotation.remark',
            createdAt: 'quotation.created_at',
            updatedAt: 'quotation.updated_at',
            isactived: 'quotation.isactived',
            islocked: 'quotation.islocked',
            createUid: 'quotation.create_uid',
            updatedUid: 'quotation.updated_uid',
            status: 'quotation.status',
            amount: 'quotation.amount',
            percentage: 'quotation.percentage',
            discount: 'quotation.discount',
            totalDiscount: 'quotation.total_discount',
            name: 'quotation.name',
            test1: 'quotation.test1',
            refNumber: 'quotation.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("quotation.isactived='0' and (quotation.create_uid = '" +
            userIds +
            "' or quotation.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        if (!lodash_1.default.isNil(search.stageName)) {
            (0, my_utils_1.andWhereEqual)(qb, 'quotation', 'status', search.stageName);
        }
        if (!lodash_1.default.isNil(search.startDate)) {
            console.log('endsValue:' + search.startDate);
            qb.andWhere("quotation.created_at >='" + search.startDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate)) {
            console.log('endsValue:' + search.endDate);
            qb.andWhere("quotation.created_at <='" + search.endDate + "'");
        }
        if (!lodash_1.default.isNil(search.Owner)) {
            qb.andWhere("quotation.sales_person ='" + search.Owner + "'");
        }
        if (!lodash_1.default.isNil(search.month)) {
            qb.andWhere("quotation.created_at LIKE '%" + search.month + "%'");
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.QuotationRepo = QuotationRepo;
//# sourceMappingURL=QuotationRepo.js.map