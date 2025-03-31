import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(tz);

export const localDateTime = (
  timezone: string,
  date: string | number | dayjs.Dayjs | Date | undefined,
) => {
  return dayjs(date).tz(timezone).format('YYYY-MM-DD / HH:mm:ss / Z');
};
