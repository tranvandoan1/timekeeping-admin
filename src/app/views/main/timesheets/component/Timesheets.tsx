import { Col, Drawer, Input, Row } from "antd";
import React, { useState } from "react";
import styles from "../timesheets.module.css";
import ListData from "./ListData";
import Filter from "./Filter";
/// @ts-ignore
import { Size } from "../../../component/size";
import ExportFile from "./ExportFile";
import { BarsOutlined } from "@ant-design/icons";
import ListDataMonth from "./ListDataMonth";
import ModalNotificationTime from './../../../modal/ModalNotificationTime';

// Không chấm công 1
// Chưa đến ca 2
// Chấm công đúng giờ 3
// Vào trễ, ra sớm 4
// Nghỉ phép có lương 5
// Nghỉ phép không lương 6
// Chưa vào/ra ca   7
// ngày nghỉ  8

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
];

const Timesheets = () => {
  const sizes = Size();
  const [open, setOpen] = useState(false);
  const [comfimExportWorkDay, setComfimExportWorkDay] = useState(false);
  const [select, setSelect] = useState<number>(0);
  useState<boolean>(false);
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
                : "rgba(30, 204, 120, 0.33)";
  return (
    <div
      style={{ padding: sizes?.width >= 1023 ? "25px 20px" : "10px 10px" }}
      className={styles.body_component}
    >
      <div className={styles.flex}>
        <h3 className={styles.title}>Bảng chấm công</h3>
        {sizes?.width > 1023 ? (
          <ExportFile active={open} callBack={() => setOpen(false)} comfimExportWorkDay={() => setComfimExportWorkDay(true)} />
        ) : (
          <BarsOutlined
            style={{ fontSize: 20, cursor: "pointer" }}
            className={styles.skse}
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      {/* hiện lọc */}
      {sizes?.width > 1023 && (
        <React.Fragment>
          <Filter callBack={(e: number) => setSelect(e)} select={select} />
          <div className={styles.flex_no_content} style={{ marginTop: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 400 }}>Search : </span>
            <Input placeholder="Search" style={{ width: 200, marginLeft: 5 }} />
          </div>
        </React.Fragment>
      )}


      {/* hiện danh sách */}
      {
        select == 0 ?
          <ListData />
          :
          <ListDataMonth />
      }

      <div
        style={{
          borderTop: "1px solid #D6D8E0",
          marginTop: 10,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className={styles.flex} style={{ marginTop: 20 }}>
          <Row>
            {data1.map((itemTime: any) => (
              <Col xs={12} sm={8} md={6} lg={6} xl={6} key={itemTime}>
                <div
                  className={styles.flex_no_content}
                  style={{ marginTop: 10 }}
                >
                  <span
                    className={styles.kkk}
                    style={{
                      border: `2px solid ${itemTime.status == 4
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
                                  : "#1ECC78"
                        }`,
                      background: renderStatus(itemTime),
                      marginRight: 5,
                    }}
                  ></span>
                  <span style={{ fontWeight: "500" }} className={styles.note}>
                    {itemTime.status == 3 || itemTime.status == 4
                      ? "Ca hành chính"
                      : itemTime.status == 1
                        ? "Không chấm công"
                        : itemTime.status == 2
                          ? "Chưa đến ca"
                          : itemTime.status == 5
                            ? "Nghỉ phép có lương"
                            : itemTime.status == 6
                              ? "Nghỉ phép không lương"
                              : "Chưa vào/ra ca "}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Drawer
        title={
          <div
            className={styles.flex}
            style={{ justifyContent: "space-between" }}
          >
            Lọc
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className={styles.flex_no_content} style={{ marginTop: 20 }}>
          <span style={{ fontSize: 18, fontWeight: 400 }}>Search : </span>
          <Input placeholder="Search" style={{ width: 200, marginLeft: 5 }} />
        </div>
        <Filter />
      </Drawer>
      {
        comfimExportWorkDay == true &&

        <ModalNotificationTime
          visible={comfimExportWorkDay}
          title='Chọn khoảng thời gian'
          btnAccept={() => setComfimExportWorkDay(false)}
          btnCancel={() => setComfimExportWorkDay(false)}
        />
      }
    </div>
  );
};

export default Timesheets;
