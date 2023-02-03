import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { CgPushDown } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import styles from "../shiftsList.module.css";
import { useNavigate } from "react-router-dom";
import ModaAddShifts from "./../../../modal/ModalAddShifts";
import ModalRemoveRefuseAccept from "../../../modal/ModalRemoveRefuseAccept";
import { Size } from "./../../../component/size";
const dataTime = [
  {
    id: 1,
    value: "Thứ hai",
    check: true,
  },
  {
    id: 2,
    value: "Thứ ba",
    check: false,
  },
  {
    id: 3,
    value: "Thứ tư",
    check: false,
  },
  {
    id: 4,
    value: "Thứ năm",
    check: true,
  },
  {
    id: 5,
    value: "Thứ sáu",
    check: false,
  },
  {
    id: 6,
    value: "Thứ bảy",
    check: false,
  },
  {
    id: 6,
    value: "Chủ nhật",
    check: false,
  },
];
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}
const ShiftsList: React.FC = () => {
  const sizes = Size();
  const navigate = useNavigate();
  const [modalCreateShifts, setModalCreateShifts] = useState<boolean>(false);
  const [modalConfimDelete, setModalConfimDelete] = useState<boolean>(false);
  const columns = [
    {
      title: "STT",
      dataIndex: "name",
      key: "name",
      render: (name: any, data: any, index: any) => <span>{index + 1}</span>,
    },
    {
      title: "Tên ca làm",
      dataIndex: "name",
      key: "name",
      render: (name: any, data: any, index: any) => (
        <span style={{ color: "#2D9CDB" }}>{name}</span>
      ),
      width: 200,
    },
    {
      title: "Giờ công",
      dataIndex: "workinghour",
      key: "workinghour",
    },
    {
      title: "Thời gian",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "Chức danh",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "",
      key: "title",
      dataIndex: "title",
      render: (name: any, data: any, index: any) => (
        <div className={styles["action"]}>
          <div className={styles["button-edit"]}>
            <RiPencilFill style={{ fontSize: 18 }} />
            <button>Sửa</button>
          </div>
          <div
            className={styles["button-delete"]}
            onClick={() => setModalConfimDelete(true)}
          >
            <DeleteOutlined style={{ fontSize: 18 }} />
            <button>Xoá</button>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Ca hành chính",
      workinghour: "08:30  -  18:00",
      time: "9.5(Giờ)",
      title: "Nhân viên",
    },
    {
      key: "2",
      name: "Ca chủ nhật",
      workinghour: "08:30  -  18:00",
      time: "9.5(Giờ)",
      title: "Nhân viên",
    },
  ];

  return (
    <div style={{ padding: "15px 20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HiOutlineArrowNarrowLeft
          className={styles["icon-back"]}
          onClick={() => navigate("/timesheets")}
        />
        <span className={styles.title}>Danh sách ca</span>
      </div>
      <div
        style={{ marginTop: 20 }}
        className={`${styles["flex"]} ${styles["flex-mobile"]}`}
      >
        <div
          className={`${styles["flex_no_center"]} ${styles["flex_no_center-mobile"]}`}
        >
          <div className={styles.input}>
            <Input placeholder="Tìm kiếm" className={styles["input-search"]} />
            <SearchOutlined className={styles["icon-search"]} />
          </div>
          <div className={styles.flex_no_center}>
            <Input
              placeholder="Giờ"
              className={styles["input-select_time-left"]}
            />
            <span className={styles.dd}>đến</span>
            <Input
              placeholder="Giờ"
              className={styles["input-select_time-right"]}
            />
          </div>
        </div>
        <div
          className={`${styles["flex_no_center"]} ${styles["flex_no_center-mobile"]}`}
        >
          {
            sizes?.width > 739 &&
            <div className={styles["button-export"]}>
              <span className={styles["button-export_text"]}>Xuất file</span>
              <CgPushDown style={{ fontSize: 20 }} />
            </div>
          }

          <div
            className={styles["button-create"]}
            onClick={() => setModalCreateShifts(true)}
          >
            <BsPlusLg style={{ fontSize: 13 }} />
            <span className={styles["button-create_text"]}>Tạo mới</span>
          </div>
        </div>
      </div>
      <br />
      {sizes.width < 1025 ? (
        <Table
          dataSource={data}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                {sizes?.width < 739 && (
                  <React.Fragment>
                    <p style={{ margin: 0 }}>
                      Giờ công : <strong>{record.workinghour}</strong>
                    </p>
                    <p style={{ margin: "10px 0" }}>
                      Thời gian : <strong>{record.time}</strong>{" "}
                    </p>
                  </React.Fragment>
                )}
                <p style={{ margin: 0 }}>
                  Chức danh : <strong>{record.title}</strong>
                </p>
              </div>
            ),
          }}
        >
          <Table.Column key="name" title="Tên ca làm" dataIndex="name" />
          {sizes?.width > 739 && (
            <React.Fragment>
              <Table.Column
                key="workinghour"
                title="Giờ công"
                dataIndex="workinghour"
              />
              <Table.Column key="time" title="Thời gian" dataIndex="time" />
            </React.Fragment>
          )}
          <Table.Column
            key="name"
            title=""
            dataIndex=""
            width={"5%"}
            render={(name: any, data: any, index: any) => (
              <div>
                <div className={styles["button-edit-reponsive"]}>
                  <RiPencilFill style={{ fontSize: 16 }} />
                  <button>Sửa</button>
                </div>
                <div
                  className={styles["button-delete-reponsive"]}
                  onClick={() => setModalConfimDelete(true)}
                >
                  <DeleteOutlined style={{ fontSize: 16 }} />
                  <button>Xoá</button>
                </div>
              </div>
            )}
          />
        </Table>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <Table columns={columns} dataSource={data} />
        </div>
      )}
      {modalCreateShifts == true && (
        <ModaAddShifts
          visible={modalCreateShifts}
          dataTime={dataTime}
          btnAccept={() => setModalCreateShifts(false)}
          btnCancel={() => setModalCreateShifts(false)}
        />
      )}
      {modalConfimDelete == true && (
        <ModalRemoveRefuseAccept
          visible={modalConfimDelete}
          title="remove"
          btnAccept={() => setModalConfimDelete(false)}
          btnCancel={() => setModalConfimDelete(false)}
        />
      )}
    </div>
  );
};

export default ShiftsList;
