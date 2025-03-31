"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityCommentsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class OpportunityCommentsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).update(Ids[0], {
            isactived: '1',
        });
    }
    async updateOpportunityCommentsVoByMid(mid, id) {
        const listItems = this.getOpportunityCommentsAllByMid(mid);
        (await listItems).map((Item) => {
            (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).update(Item.id, { mid: id });
        });
        return 'ok';
    }
    async getOpportunityCommentsAllByMid(mid) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).createQueryBuilder('opportunity_comments');
        const fields = {
            id: 'opportunity_comments.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        (0, my_utils_1.andWhereEqual)(qb, 'opportunity_comments', 'mid', mid);
        const res = await qb.getRawMany();
        return res;
    }
    async getOpportunityCommentssById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).createQueryBuilder('opportunity_comments');
        const fields = {
            id: 'opportunity_comments.id',
            mid: 'opportunity_comments.mid',
            name: 'opportunity_comments.name',
            description: 'opportunity_comments.description',
            subject: 'opportunity_comments.subject',
            assignTo: 'opportunity_comments.assign_to',
            note: 'opportunity_comments.note',
            createdAt: 'opportunity_comments.created_at',
            updatedAt: 'opportunity_comments.updated_at',
            isactived: 'opportunity_comments.isactived',
            islocked: 'opportunity_comments.islocked',
            createUid: 'opportunity_comments.create_uid',
            updatedUid: 'opportunity_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'opportunity_comments', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getOpportunityCommentsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).createQueryBuilder('opportunity_comments');
        const fields = {
            id: 'opportunity_comments.id',
            mid: 'opportunity_comments.mid',
            name: 'opportunity_comments.name',
            description: 'opportunity_comments.description',
            subject: 'opportunity_comments.subject',
            assignTo: 'opportunity_comments.assign_to',
            note: 'opportunity_comments.note',
            createdAt: 'opportunity_comments.created_at',
            updatedAt: 'opportunity_comments.updated_at',
            isactived: 'opportunity_comments.isactived',
            islocked: 'opportunity_comments.islocked',
            createUid: 'opportunity_comments.create_uid',
            updatedUid: 'opportunity_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("opportunity_comments.isactived='0' and opportunity_comments.mid='" + search.mid + "'");
        qb.orderBy('opportunity_comments.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getOpportunityComments(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.OpportunityComments).createQueryBuilder('opportunity_comments');
        const fields = {
            id: 'opportunity_comments.id',
            mid: 'opportunity_comments.mid',
            name: 'opportunity_comments.name',
            description: 'opportunity_comments.description',
            subject: 'opportunity_comments.subject',
            assignTo: 'opportunity_comments.assign_to',
            note: 'opportunity_comments.note',
            createdAt: 'opportunity_comments.created_at',
            updatedAt: 'opportunity_comments.updated_at',
            isactived: 'opportunity_comments.isactived',
            islocked: 'opportunity_comments.islocked',
            createUid: 'opportunity_comments.create_uid',
            updatedUid: 'opportunity_comments.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("opportunity_comments.isactived='0'");
        if (!lodash_1.default.isNil(search.mid)) {
            (0, my_utils_1.andWhereEqual)(qb, 'opportunity_comments', 'mid', search.mid);
        }
        (0, my_utils_1.multiSearch)(qb, ['opportunity_comments.subject', 'opportunity_comments.note'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.OpportunityCommentsRepo = OpportunityCommentsRepo;
//# sourceMappingURL=OpportunityCommentsRepo.js.map