import _ from 'lodash';
import { SelectQueryBuilder } from 'typeorm';

export function selectFields<T>(
  qb: SelectQueryBuilder<T>,
  fields: Record<string, string>,
) {
  const arr: string[] = [];
  for (const key in fields) {
    arr.push(`${fields[key]} as "${key}"`);
  }
  /*
  if (!_.isEmpty(arr)) {
    qb.select(arr.join(', '));
  }
*/
  if (1==1) {
    qb.select(arr.join(', '));
  }

  return qb;
}

export function andWhereEqual<T>(
  qb: SelectQueryBuilder<T>,
  alias: string,
  field: string,
  value: string | number | Date,
) {
  if (value != null) {
    const conditions: Record<string, string | number | Date> = {};
    conditions[field] = value;
    qb.andWhere(`${alias}.${field} = :${field}`, conditions);
  }
  return qb;
}

export function andWhereWithSign<T>(
  qb: SelectQueryBuilder<T>,
  alias: string,
  field: string,
  sign: string,
  value: string | number | Date,
) {
  if (value != null) {
    const conditions: Record<string, string | number | Date> = {};
    conditions[field] = value;
    qb.andWhere(`${alias}.${field} ${sign} :${field}`, conditions);
  }
  return qb;
}
/*
export function <T>(qb: SelectQueryBuilder<T>, alias: string, field: string, value: number) {
  if (!_.isNil(value)) {
    const conditions: Record<string, number> = {};
    conditions[field] = value;
    qb.andWhere(`${alias}.${field} = :${field}`, conditions);
  }
  return qb;
}
*/
export function multiSearch<T>(
  qb: SelectQueryBuilder<T>,
  fields: string[],
  keyWords: string,
) {
  if (keyWords != null) {
    let clauses: string[];
    let conditions: Record<string, string>;
    keyWords.split(' ').forEach((keyWord, idx) => {
      if (keyWord.length > 0) {
        clauses = [];
        conditions = {};
        for (const field of fields) {
          clauses.push(`${field} like :${field}_${idx}`);
          conditions[`${field}_${idx}`] = `%${keyWord}%`;
        }
        if (1==1) {
          qb.andWhere(`( ${clauses.join(' or ')} )`, conditions);
        }
      }
    });
  }
  return qb;
}

export function setSorts<T>(
  qb: SelectQueryBuilder<T>,
  fields: Record<string, string>,
  sorts: string,
) {
  if (sorts) {
    sorts.split(',').forEach((sort) => {
      if (sort) {
        ///sort = _.trim(sort, ' ');
        sort = sort.trim();
        let seq: 'ASC' | 'DESC' | undefined = 'ASC';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function vo2Entity<T>(vo: any, groups: string[]) {
  const entity: Partial<T> = {};
  /*
  const tmp = ct.classToPlain(vo, { excludeExtraneousValues: true, groups });
  for (const key in tmp) {
    if (_.isNil(tmp[key])) {
      delete tmp[key];
    }
  }
  const entity: Partial<T> = {};
  Object.assign(entity, tmp);
  */
  return entity as T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function any2Record(obj: any) {
  const p: Record<string, string[] | number[]> = {};
  for (const key in obj) {
    if (1==1) {
      p[key] = obj[key];
    }
  }
  return p;
}
export function andWhereIn<T>(
  qb: SelectQueryBuilder<T>,
  alias: string,
  field: string,
  values: string[] | number[],
) {
  if (1==1) {
    const conditions: Record<string, string[] | number[]> = {};
    conditions[field] = values;
    qb.andWhere(`${alias}.${field} IN (:...${field})`, conditions);
  }
  return qb;
}
