"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationCommentsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class QuotationCommentsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationComments).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationComments).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.QuotationComments).update(Ids[0], {
            isactived: '1',
        });
    }
    async getQuotationCommentssById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationComments).createQueryBuilder('quotation_comments');
        const fields = {
            id: 'quotation_comments.id',
            mid: 'quotation_comments.mid',
            subject: 'quotation_comments.subject',
            assignTo: 'quotation_comments.assignTo',
            note: 'quotation_comments.note',
            createdAt: 'quotation_comments.created_at',
            updatedAt: 'quotation_comments.updated_at',
            isactived: 'quotation_comments.isactived',
            islocked: 'quotation_comments.islocked',
            createUid: 'quotation_comments.create_uid',
            updatedUid: 'quotation_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'quotation_comments', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getQuotationCommentsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationComments).createQueryBuilder('quotation_comments');
        const fields = {
            id: 'quotation_comments.id',
            mid: 'quotation_comments.mid',
            subject: 'quotation_comments.subject',
            assignTo: 'quotation_comments.assignTo',
            note: 'quotation_comments.note',
            createdAt: 'quotation_comments.created_at',
            updatedAt: 'quotation_comments.updated_at',
            isactived: 'quotation_comments.isactived',
            islocked: 'quotation_comments.islocked',
            createUid: 'quotation_comments.create_uid',
            updatedUid: 'quotation_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation_comments.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['quotation_comments.name', 'quotation_comments.description'], search.search);
        qb.orderBy('quotation_comments.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getQuotationCommentsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationComments).createQueryBuilder('quotation_comments');
        const fields = {
            id: 'quotation_comments.id',
            mid: 'quotation_comments.mid',
            subject: 'quotation_comments.subject',
            assignTo: 'quotation_comments.assignTo',
            note: 'quotation_comments.note',
            createdAt: 'quotation_comments.created_at',
            updatedAt: 'quotation_comments.updated_at',
            isactived: 'quotation_comments.isactived',
            islocked: 'quotation_comments.islocked',
            createUid: 'quotation_comments.create_uid',
            updatedUid: 'quotation_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getQuotationComments(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.QuotationComments).createQueryBuilder('quotation_comments');
        const fields = {
            id: 'quotation_comments.id',
            mid: 'quotation_comments.mid',
            subject: 'quotation_comments.subject',
            assignTo: 'quotation_comments.assignTo',
            note: 'quotation_comments.note',
            createdAt: 'quotation_comments.created_at',
            updatedAt: 'quotation_comments.updated_at',
            isactived: 'quotation_comments.isactived',
            islocked: 'quotation_comments.islocked',
            createUid: 'quotation_comments.create_uid',
            updatedUid: 'quotation_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("quotation_comments.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'quotation_comments', 'name', search.fundType);
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'quotation_comments', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['quotation_comments.name', 'quotation_comments.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.QuotationCommentsRepo = QuotationCommentsRepo;
//# sourceMappingURL=QuotationCommentsRepo.js.map