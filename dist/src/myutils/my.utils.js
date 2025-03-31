"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andWhereIn = exports.any2Record = exports.vo2Entity = exports.setSorts = exports.multiSearch = exports.andWhereWithSign = exports.andWhereEqual = exports.selectFields = void 0;
function selectFields(qb, fields) {
    const arr = [];
    for (const key in fields) {
        arr.push(`${fields[key]} as "${key}"`);
    }
    if (1 == 1) {
        qb.select(arr.join(', '));
    }
    return qb;
}
exports.selectFields = selectFields;
function andWhereEqual(qb, alias, field, value) {
    if (value != null) {
        const conditions = {};
        conditions[field] = value;
        qb.andWhere(`${alias}.${field} = :${field}`, conditions);
    }
    return qb;
}
exports.andWhereEqual = andWhereEqual;
function andWhereWithSign(qb, alias, field, sign, value) {
    if (value != null) {
        const conditions = {};
        conditions[field] = value;
        qb.andWhere(`${alias}.${field} ${sign} :${field}`, conditions);
    }
    return qb;
}
exports.andWhereWithSign = andWhereWithSign;
function multiSearch(qb, fields, keyWords) {
    if (keyWords != null) {
        let clauses;
        let conditions;
        keyWords.split(' ').forEach((keyWord, idx) => {
            if (keyWord.length > 0) {
                clauses = [];
                conditions = {};
                for (const field of fields) {
                    clauses.push(`${field} like :${field}_${idx}`);
                    conditions[`${field}_${idx}`] = `%${keyWord}%`;
                }
                if (1 == 1) {
                    qb.andWhere(`( ${clauses.join(' or ')} )`, conditions);
                }
            }
        });
    }
    return qb;
}
exports.multiSearch = multiSearch;
function setSorts(qb, fields, sorts) {
    if (sorts) {
        sorts.split(',').forEach((sort) => {
            if (sort) {
                sort = sort.trim();
                let seq = 'ASC';
                if (sort.startsWith('!')) {
                    seq = 'DESC';
                    sort = sort.substring(1);
                }
                if (sort != '') {
                    qb.addOrderBy(fields[sort], seq);
                }
            }
        });
    }
    return qb;
}
exports.setSorts = setSorts;
function vo2Entity(vo, groups) {
    const entity = {};
    return entity;
}
exports.vo2Entity = vo2Entity;
function any2Record(obj) {
    const p = {};
    for (const key in obj) {
        if (1 == 1) {
            p[key] = obj[key];
        }
    }
    return p;
}
exports.any2Record = any2Record;
function andWhereIn(qb, alias, field, values) {
    if (1 == 1) {
        const conditions = {};
        conditions[field] = values;
        qb.andWhere(`${alias}.${field} IN (:...${field})`, conditions);
    }
    return qb;
}
exports.andWhereIn = andWhereIn;
//# sourceMappingURL=my.utils.js.map