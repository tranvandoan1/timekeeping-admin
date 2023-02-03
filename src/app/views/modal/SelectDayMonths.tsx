import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { type } from "os";
import { startTransition, useEffect, useState } from "react";
import styles from "./../../../assets/css/modal/selectDayMonths.module.css";

type Props = {
  date: (item: string) => void;
};
const SelectDayMonths = ({ date }: Props) => {
  const [monthSelect, setMonthSelect] = useState<any>();
  const [selectDate, setSelectDate] = useState<any>({
    month: moment().month() + 1,
    year: moment().year(),
  });
  // 035
  const getWeekMonth = () => {
    let i = 0;
    let datanew: any = [];
    while (
      i <=
      (selectDate?.month == "1" ||
      selectDate?.month == "7" ||
      selectDate?.month == "10"
        ? 5
        : 4)
    ) {
      let dates: string[] = [];
      const DATE_FORMAT = "DD-MM-YYYY";
      let time: any = `${
        datanew?.length <= 0
          ? "1"
          : datanew[datanew?.length - 1].slice(0, 2) == "1"
          ? "2"
          : Number(datanew[datanew?.length - 1].slice(0, 2)) + 1
      }-${selectDate?.month}-${selectDate?.year}`;
      // days by week
      if (moment(time, DATE_FORMAT).day() == 0) {
        time = moment(time, DATE_FORMAT).add(-1).format(DATE_FORMAT);
      }
      // get monday in week
      const mondayInWeek = moment(time, DATE_FORMAT).day(1);
      dates.push(mondayInWeek.format(DATE_FORMAT));
      //  lấy ngày đầu trong tuần , sau đó thêm đến ngày Chủ Nhật
      for (let index = 1; index < 7; index++) {
        mondayInWeek.add("days", 1);
        dates.push(mondayInWeek.format(DATE_FORMAT));
      }
      datanew.push(...dates);
      i++; // tăng i lên nếu không sẽ bị lặp vô hạn
    }
    startTransition(() => {
      setMonthSelect(datanew);
    });
  };
  useEffect(() => {
    getWeekMonth();
  }, [selectDate]);
  console.log(monthSelect);
  const month = new Date().getMonth()+1

  
  return (
    <div>
      <div className={styles.flex} style={{ padding: "10px" }}>
        <div className={styles.flex_no_content}>
          <DoubleLeftOutlined
            style={{
              cursor: "pointer",
              fontSize: 14,
            }}
            onClick={() =>
              setSelectDate({
                month: "01",
                year: Number(selectDate?.year) - 1,
              })
            }
          />
          <LeftOutlined
            style={{
              cursor: "pointer",
              fontSize: 14,
              marginLeft: 8,
            }}
            onClick={() =>
              setSelectDate(
                selectDate?.month == "01"
                  ? {
                      month: "12",
                      year: Number(selectDate?.year) - 1,
                    }
                  : {
                      month: Number(selectDate?.month) - 1,
                      year: selectDate?.year,
                    }
              )
            }
          />
        </div>
        <div style={{ fontSize: 15, fontWeight: 500, marginTop: 10 }}>
          Th.{selectDate?.month} {selectDate?.year}
        </div>
        <div className={styles.flex_no_content}>
          <RightOutlined
            style={{
              cursor: "pointer",
              fontSize: 14,
            }}
            onClick={() =>
              setSelectDate(
                selectDate?.month == "12"
                  ? {
                      month: "01",
                      year: String(Number(selectDate?.year) + 1),
                    }
                  : {
                      month: Number(selectDate?.month) + 1,
                      year: selectDate?.year,
                    }
              )
            }
          />
          <DoubleRightOutlined
            style={{
              cursor: "pointer",
              marginLeft: 8,
              fontSize: 14,
            }}
            onClick={() =>
              setSelectDate({
                month: "01",
                year: String(Number(selectDate?.year) + 1),
              })
            }
          />
        </div>
      </div>
      <div>
        <div className={styles.grid_columns}>
          {monthSelect?.map((item: any, index: any) => {
            console.log(Number(item.slice(3,5)));
            return (
              <div className={styles.columns} onClick={() => date(item)}
                style={
                    (Number(item.slice(3,5))!= month) ? {
                        color:"gray"
                    } :{

                    }
                }
              >
                <div
                  style={{
                    padding: 2,
                    fontWeight:
                      item.slice(3, 5) == selectDate?.month ? 500 : 400,
                    fontSize: 14,
                  }}
                >
                  <span>{item.slice(0, 2)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDayMonths;
