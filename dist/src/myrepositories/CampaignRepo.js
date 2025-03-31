"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class CampaignRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Campaign).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        console.log("updatedAt");
        console.log(accountTagVo.updatedAt);
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Campaign).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Campaign).update(Ids[0], {
            isactived: '1',
        });
    }
    async getcampaignsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Campaign).createQueryBuilder('campaign');
        const fields = {
            id: 'campaign.id',
            name: 'campaign.name',
            starts: 'campaign.starts',
            ends: 'campaign.ends',
            owner: 'campaign.owner',
            budget: 'campaign.budget',
            status: 'campaign.status',
            description: 'campaign.description',
            createdAt: 'campaign.created_at',
            updatedAt: 'campaign.updated_at',
            isactived: 'campaign.isactived',
            islocked: 'campaign.islocked',
            createUid: 'campaign.create_uid',
            updatedUid: 'campaign.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'campaign', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getCampaignsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Campaign).createQueryBuilder('campaign');
        const fields = {
            id: 'campaign.id',
            name: 'campaign.name',
            starts: 'campaign.starts',
            ends: 'campaign.ends',
            owner: 'campaign.owner',
            budget: 'campaign.budget',
            status: 'campaign.status',
            description: 'campaign.description',
            createdAt: 'campaign.created_at',
            updatedAt: 'campaign.updated_at',
            isactived: 'campaign.isactived',
            islocked: 'campaign.islocked',
            createUid: 'campaign.create_uid',
            updatedUid: 'campaign.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("campaign.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['campaign.name', 'campaign.description'], search.search);
        qb.addOrderBy('campaign.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getCampaignsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Campaign).createQueryBuilder('campaign');
        const fields = {
            id: 'campaign.id',
            name: 'campaign.name',
            starts: 'campaign.starts',
            ends: 'campaign.ends',
            owner: 'campaign.owner',
            budget: 'campaign.budget',
            status: 'campaign.status',
            description: 'campaign.description',
            createdAt: 'campaign.created_at',
            updatedAt: 'campaign.updated_at',
            isactived: 'campaign.isactived',
            islocked: 'campaign.islocked',
            createUid: 'campaign.create_uid',
            updatedUid: 'campaign.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getcampaigns(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Campaign).createQueryBuilder('campaign');
        const fields = {
            id: 'campaign.id',
            name: 'campaign.name',
            starts: 'campaign.starts',
            ends: 'campaign.ends',
            owner: 'campaign.owner',
            budget: 'campaign.budget',
            status: 'campaign.status',
            description: 'campaign.description',
            createdAt: 'campaign.created_at',
            updatedAt: 'campaign.updated_at',
            isactived: 'campaign.isactived',
            islocked: 'campaign.islocked',
            createUid: 'campaign.create_uid',
            updatedUid: 'campaign.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("campaign.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'campaign', 'status', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['campaign.name', 'campaign.description'], search.search);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.CampaignRepo = CampaignRepo;
//# sourceMappingURL=CampaignRepo.js.map