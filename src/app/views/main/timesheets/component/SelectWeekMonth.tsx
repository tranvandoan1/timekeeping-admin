import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React, { startTransition, useEffect, useState } from "react";
import styles from "../timesheets.module.css";
import moment from "moment";
type Props = {
  select?: number
}
const SelectWeekMonth: React.FC<Props> = ({ select }) => {
  const [monthSelect, setMonthSelect] = useState<string[]>();
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
      let time: any = `${datanew?.length <= 0
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
      const data: any = [];
      datanew.map((item: any, index: any) => {
        if (index % 7 == 0) {
          data.push(index);
        }
      });
      const newDataMonth: any = [];
      data.map((itemIndex: any, indexDate: any) => {
        // lấy ra những thứ tự ngày đầu trong tuần
        const dataIndex = datanew.filter(
          (item: any, index: any) =>
            index <= Number(itemIndex) + 6 && index >= indexDate
        );
        if (dataIndex.length <= 7) {
          // nếu mnarg đầu tiên là nhỏ bằng 7 thì lấy hết
          newDataMonth.push(dataIndex);
        } else {
          // nếu mảng thứ 2 mà lớn hơn 7 thì lấy độ dài mảng đấy từ đi 7 rồi xét điều kiện nếu index > độ dài mảng -7
          const findDate = dataIndex.filter(
            (itemKo: any, indexKo: any) =>
              indexKo > Number(dataIndex.length - 1) - 7
          );
          newDataMonth.push(findDate);
        }
      });
      setMonthSelect(newDataMonth);
    });
  };
  useEffect(() => {
    getWeekMonth();
  }, [selectDate, select]);
  return (
    <React.Fragment
    >
      {
        select == 0 ?
          <React.Fragment>
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
              <div style={{ fontSize: 15, fontWeight: 500 }}>
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
            <div style={{ padding: 10 }}>
              {monthSelect?.map((item: any, index: any) => {
                return (
                  <div
                    className={`${styles["flex"]} ${styles["slect_weedday"]}`}
                    onClick={() => console.log(index + 1, "12ewqs")}
                    key={item}
                  >
                    {item?.map((itemDate: any) => {
                      return (
                        <div
                          style={{
                            padding: 5,
                            fontWeight:
                              itemDate.slice(3, 5) == selectDate?.month ? 500 : 400,
                            fontSize: 14,
                            width: `${100 / 10}%`,
                          }}
                          key={itemDate}
                        >
                          <span>{itemDate.slice(0, 2)}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
          :
          <React.Fragment>
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

              </div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>
                {selectDate?.year}
              </div>
              <div className={styles.flex_no_content}>

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
            <div className={styles.listMoth}>
              <div className={`${styles["monthday"]}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((item: any, index: any) => {
                  return (
                    <div
                      key={item}
                      className={`${styles["flex"]} ${styles["slect_monthday"]}`}
                      onClick={() => console.log(index + 1, "12ewqs")}
                    >

                      <div
                        style={{
                          padding: 5,
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        <span>Th.{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default SelectWeekMonth;
