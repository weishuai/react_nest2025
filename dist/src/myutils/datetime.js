"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDateTime = void 0;
const dayjs_1 = require("dayjs");
const timezone_1 = require("dayjs/plugin/timezone");
const utc_1 = require("dayjs/plugin/utc");
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
const localDateTime = (timezone, date) => {
    return (0, dayjs_1.default)(date).tz(timezone).format('YYYY-MM-DD / HH:mm:ss / Z');
};
exports.localDateTime = localDateTime;
//# sourceMappingURL=datetime.js.map