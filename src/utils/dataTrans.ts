import dayjs from "dayjs";

export default function dateTrans(date: string | number) {
  return dayjs(date).format("YYYY-MM-DD");
}
