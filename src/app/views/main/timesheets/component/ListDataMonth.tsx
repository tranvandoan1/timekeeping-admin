import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import styles from "../listdatamonth.module.css";

import timeicon from "../../../../../assets/images/clock.png";
import rong from "../../../../../assets/images/nghi.png";
import moment from "moment";
import { EllipsisOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
/// @ts-ignore
import ModalPresonInformation from "../../../modal/ModalPresonInformation";
/// @ts-ignore
import { Size } from "../../../component/size";
/// @ts-ignore
import ModalNotificationTime from "../../../modal/ModalNotificationTime";
/// @ts-ignore
import ModaAddShifts from "../../../modal/ModalAddShifts";

const users = [
  { id: 1, name: "Trần Văn Đoàn 1" },
  { id: 1, name: "Trần Văn Đoàn 1" },
  { id: 2, name: "Trần Văn Đoàn 1" },
];
const data1 = [
  {
    id: 1,
    user_id: 1,
    login: "1/04/2022",
    logout: "1/05/2023",
    timeIn: "08:30",
    timeOut: "18:00",
    status: 3,
  },
  {
    id: 2,
    user_id: 1,
    login: "2/04/2022",
    logout: "2/05/2023",
    timeIn: "08:30",
    timeOut: "17:50",
    status: 4,
  },
  {
    id: 3,
    user_id: 1,
    login: "3/04/2022",
    logout: "3/05/2023",
    timeIn: "",
    timeOut: "",
    status: 5,
  },
  {
    id: 4,
    user_id: 1,
    login: "4/04/2022",
    logout: "4/05/2023",
    timeIn: "",
    timeOut: "",
    status: 6,
  },
  {
    id: 5,
    user_id: 1,
    login: "5/04/2022",
    logout: "5/05/2023",
    timeIn: "",
    timeOut: "",
    status: 7,
  },
  {
    id: 6,
    user_id: 1,
    login: "6/04/2022",
    logout: "6/05/2023",
    timeIn: "08:30",
    timeOut: "18:00",
    status: 2,
  },
  {
    id: 7,
    user_id: 1,
    login: "7/04/2022",
    logout: "7/05/2023",
    timeIn: "08:30",
    timeOut: "",
    status: 1,
  },
  {
    id: 8,
    user_id: 2,
    login: "1/04/2022",
    logout: "1/05/2023",
    timeIn: "08:30",
    timeOut: "18:00",
    status: 3,
  },
  {
    id: 9,
    user_id: 2,
    login: "2/04/2022",
    logout: "2/05/2023",
    timeIn: "08:30",
    timeOut: "17:50",
    status: 4,
  },
  {
    id: 10,
    user_id: 2,
    login: "3/04/2022",
    logout: "3/05/2023",
    timeIn: "",
    timeOut: "",
    status: 5,
  },
  {
    id: 11,
    user_id: 2,
    login: "4/04/2022",
    logout: "4/05/2023",
    timeIn: "",
    timeOut: "",
    status: 6,
  },
  {
    id: 12,
    user_id: 2,
    login: "5/04/2022",
    logout: "5/05/2023",
    timeIn: "",
    timeOut: "",
    status: 7,
  },
  {
    id: 13,
    user_id: 2,
    login: "6/04/2022",
    logout: "6/05/2023",
    timeIn: "08:30",
    timeOut: "18:00",
    status: 2,
  },
  {
    id: 14,
    user_id: 2,
    login: "7/04/2022",
    logout: "7/05/2023",
    timeIn: "08:30",
    timeOut: "",
    status: 8,
  },
];

const ListDataMonth = () => {
  const sizes = Size();
  const [modalCreateRequest, setModalCreateRequest] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [modalPlus, setModalPlus] = useState<boolean>(false);
  const [date, setDate] = useState<string[]>();

  const getWeekDates = () => {
    const DATE_FORMAT = "DD-MM-YYYY";
    let time: any = `${String(moment().date()).length <= 1
      ? `0${moment().date()}`
      : moment().date()
      }-${String(moment().month() + 1).length <= 1
        ? `0${moment().month() + 1}`
        : moment().month() + 1
      }-${moment().year()}`;
    // days by week
    let dates: string[] = [];
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
    setDate(dates);
  };
  useEffect(() => {
    getWeekDates();
  }, []);

  // fake data
  const dataTimeKeeping: any = [];
  const month = moment().month() + 1;
  const monthDk: any = new Date(2023, 2, 0).getDate();
  users.map((item: any, index) => {
    const time = data1.filter((itemTime: any) => item.id == itemTime.user_id);
    dataTimeKeeping.push({ id: index, name: item.name, data: time });
  });
  const newdata: any = [];
  for (let i = 1; i <= monthDk; i++) {
    newdata.push({
      ...dataTimeKeeping[0].data[0],
      id: Math.random(),
      status: Math.floor(Math.random() * 9),
    });
  }
  const renderStatus = (itemTime: any) =>
    itemTime.status == 4
      ? "rgba(255, 200, 136, 0.33)"
      : itemTime.status == 5
        ? "rgba(188, 136, 255, 0.33)"
        : itemTime.status == 2
          ? "rgba(192, 127, 118, 0.33)"
          : itemTime.status == 6
            ? "rgba(192, 127, 118, 0.33)"
            : itemTime.status == 7
              ? "rgba(255, 14, 57, 0.33)"
              : itemTime.status == 1
                ? "#EBEBEB"
                : itemTime.status == 8
                  ? "#F7F7F7"
                  : "rgba(30, 204, 120, 0.33)";

  const renderDate = () => {
    const dataMoth: any = [];
    const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    for (let index = 1; index <= monthDk; index++) {
      const selectedDate = new Date(2023, moment().month(), index);
      const dayOfWeek = daysOfWeek[selectedDate.getDay()];
      dataMoth.push({ daysOfWeek: dayOfWeek, day: index });
    }
    return (
      <React.Fragment>
        {dataMoth?.map((item: any, index: any) => {
          return (
            <th className={styles.thead_th1} key={item}>
              <p>{item.daysOfWeek}</p>
              <p>{item.day}</p>
            </th>
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr
              className={styles["table-tr"]}
              style={{
                gridTemplateColumns: `10% repeat(${monthDk}, 5%)`,
              }}
            >
              <th className={styles.thead_th}>Tên nhân viên</th>
              {renderDate()}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {[{ ...dataTimeKeeping[0], data: newdata }]?.map((item: any) => (
              <tr
                key={item}
                className={styles["tbody-tr"]}
                style={{
                  gridTemplateColumns: `10% repeat(${monthDk}, 5%)`,
                }}
              >
                <td className={styles["tbody-td"]}>
                  {<div className={styles.table_name}>{item?.name}</div>}
                </td>
                {item?.data.map((itemTime: any) => {
                  return (
                    <td>
                      <div
                        className={
                          itemTime.status == 8
                            ? styles.custom_td1
                            : styles.custom_td2
                        }
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          cursor: "pointer",
                          background: renderStatus(itemTime),
                          border: `1px solid ${itemTime.status == 4
                            ? "#FFC888"
                            : itemTime.status == 5
                              ? "#BC88FF"
                              : itemTime.status == 2
                                ? "#ACB2C1"
                                : itemTime.status == 6
                                  ? "#C07F76"
                                  : itemTime.status == 7
                                    ? "#FF0E39"
                                    : itemTime.status == 1
                                      ? "#838BA3"
                                      : itemTime.status == 8
                                        ? "#ACB2C1"
                                        : "#1ECC78"
                            }`,
                          borderRadius: 5,
                        }}
                      >

                        <div
                          style={{
                            height: sizes?.width >= 1023 ? 80 : 60,
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                          className={
                            itemTime.status == 8
                              ? styles.list_status8
                              : styles.list_status
                          }
                        >
                          {itemTime.status == 8 && (
                            <div>
                              <p className={styles.title_time_keeping}>Ngày</p>
                              <p className={styles.title_time_keeping}>nghỉ</p>
                            </div>
                          )}
                          <div>
                            {itemTime.status !== 8 &&
                              (itemTime.status == 1 ||
                                itemTime.status == 5 ||
                                itemTime.status == 6 ||
                                itemTime.status == 7 ? (
                                <div
                                  className={`${styles.flex_no_content} ${styles["ronggg"]}`}
                                >
                                  <div
                                    className={styles.logo}
                                    style={{ width: 50, height: 50 }}
                                  >
                                    <img src={rong} alt="" />
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className={`${styles.flex_no_content} ${styles["time"]}`}
                                >
                                  <span
                                    style={{ paddingLeft: 2, marginRight: 2 }}
                                  >
                                    {itemTime.timeIn}
                                  </span>

                                  <span style={{ width: "10%" }}>-</span>

                                  <span style={{ paddingRight: 2 }}>
                                    {" "}
                                    {itemTime.timeOut}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                        {/* show select */}
                        <div
                          className={`${styles["show_select"]} ${styles["show_select-active1"]}`}
                        >
                          <div className={styles.mockup}>
                            <div className={styles.flex_no_content}>
                              <PlusOutlined
                                className={styles.icon_eye}
                                onClick={() => setModalPlus(true)}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles["show_select"]} ${styles["show_select-active2"]}`}
                        >
                          <div className={styles.mockup}>
                            <EyeOutlined
                              className={styles.icon_eye}
                              onClick={() => setVisible(true)}
                            />
                            <EllipsisOutlined
                              className={styles.icon_dots}
                              style={{ marginTop: 10 }}
                              onClick={() => setModalCreateRequest(true)}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          width: "100%",
          justifyContent: "flex-end",
          display: "flex",
          marginTop: 40,
        }}
      >
        <Pagination defaultCurrent={1} total={80} />
      </div>
      {
        visible == true &&
        <ModalPresonInformation
          visible={visible}
          btnCancel={() => setVisible(false)}
        />
      }
      {
        modalCreateRequest == true &&
        <ModalNotificationTime
          visible={modalCreateRequest}
          btnAccept={() => setModalCreateRequest(false)}
          btnCancel={() => setModalCreateRequest(false)}
        />
      }
      {
        modalPlus == true &&

        <ModaAddShifts
          data={[
            {
              id: 1,
              title: "Ca chủ nhật (08:00 - 12:00)",
              check: true,
            },
            {
              id: 2,
              title: "Ca hành chính (08:00 - 12:00)",
              check: false,
            },
            {
              id: 3,
              title: "Ca đêm (08:00 - 12:00)",
              check: false,
            },
          ]}
          title="Kỷ - Chủ nhật 15/01/2023"
          visible={modalPlus}
          btnCancel={() => setModalPlus(false)}
        />
      }
    </div>
  );
};

export default ListDataMonth;
