import dayjs from "dayjs";
import "dayjs/locale/ko";
import { DateOfBirth } from "./saju";
import KoreanLunarCalendar from "korean-lunar-calendar";

dayjs.locale("ko"); // use locale globally
dayjs().locale("ko").format(); // use locale in a specific instance

export const getYearMonthDateTime = (
  date: string,
  time: string,
  isLunar: string,
): DateOfBirth => {
  const dateValue = `${date} ${time}`;
  const convertDate = dayjs(dateValue);

  let year = convertDate.year();
  let month = convertDate.month() + 1;
  let day = convertDate.date();
  let hour = convertDate.hour();

  if (!isLunar) {
    const lunarCalendar = new KoreanLunarCalendar();
    lunarCalendar.setSolarDate(year, month, day);

    const lunarDate = lunarCalendar.getLunarCalendar();
    year = lunarDate?.year;
    month = lunarDate?.month;
    day = lunarDate?.day;
  }

  return {
    year,
    month,
    day,
    hour,
  };
};
