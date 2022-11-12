import moment from "moment";

export default function DateTime() {
  date_create: moment().format("DD-MM-YYYY hh:mm:ss");

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
