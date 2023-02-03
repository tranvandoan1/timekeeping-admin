import React, { useState } from "react";
import styles from "../wage.module.css";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { PlusOutlined } from "@ant-design/icons";
import SelectWeekMonth from "../../timesheets/component/SelectWeekMonth";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Size } from './../../../component/size';
import ModalAddWage from './../../../modal/ModalAddWage';
type Props = {};
const Wage: React.FC<Props> = () => {
  const sizes = Size()
  const navigate = useNavigate()
  const [createPayroll, setCreatePayroll] = useState<boolean>(false)
  const columns = [
    {
      title: "Tên bảng lương",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <span onClick={() => navigate('/wage/detail')} className={styles['table-list_name']}>Bảng lương 1</span>,
    },
    {
      title: "Phòng ban áp dụng",
      dataIndex: "age",
      key: "age",
      render: (text: any) => <span className={styles['table-list_text']}>Tất cả</span>,
    },
    {
      title: "Vị trí áp dụng",
      dataIndex: "address",
      key: "address",
      render: (text: any) => <span className={styles['table-list_text']}>Tất cả</span>,
    },
    {
      title: "Nhân viên",
      key: "tags",
      dataIndex: "tags",
      render: (text: any) => <span className={styles['table-list_text']}>Tất cả</span>,

    },
    {
      title: "Ngày tạo",
      key: "action",
      render: (text: any) => <span className={styles['table-list_text']}>16/01/2023</span>,

    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div style={{ padding: 20 }}>
      <div className={styles["wage-header"]}>
        <h4>Tiền lương</h4>
      </div>
      <div className={styles["wage-select"]}>
        <div className={styles["wage-select_moth"]}>
          <p>Th.1 - 2023</p>
          <HiOutlineCalendarDays style={{ fontSize: 20, color: "#2D9CDB" }} />
          <div
            className={styles.show_select_time}
            style={{ width: "100%", left: 0, zIndex: 5 }}
          >
            <SelectWeekMonth select={1} />
          </div>
        </div>
        <div className={styles["wage-create-payroll"]} onClick={() => setCreatePayroll(true)}>
          <PlusOutlined className={styles.iconPlus} />
          <p>Tạo bảng lương</p>
        </div>
      </div>

      {sizes.width < 1025 ?
        <Table
          style={{ marginTop: 30 }}
          dataSource={data}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <div className={styles['flex_no_center']}>
                  <h6>Phòng ban áp dụng :   <strong>
                    Tất cả
                  </strong></h6>

                </div>
                {
                  sizes < 739 &&
                  <React.Fragment>
                    <div className={styles['flex_no_center']}>
                      <h6>Vị trí áp dụng :   <strong>
                        Tất cả
                      </strong></h6>

                    </div>
                    <div className={styles['flex_no_center']}>
                      <h6>Nhân viên :   <strong>
                        Tất cả
                      </strong></h6>

                    </div>
                  </React.Fragment>
                }

              </div>
            ),
          }}
        >
          <Table.Column key="name" title="Tên bảng lương" dataIndex="name"
            render={(name: any, data: any, index: any) => (
              <span onClick={() => navigate('/wage/detail')} className={styles['table-list_name']}>Bảng lương 1</span>
            )}
          />
          {sizes?.width > 739 && (
            <React.Fragment>
              <Table.Column
                key="time"
                title="Phòng ban áp dụng"
                dataIndex="time"
                render={(name: any, data: any, index: any) => (
                  <span className={styles['table-list_text']}>Tất cả</span>
                )}
              />
              <Table.Column
                key="sentDate"
                title="Vị trí áp dụng"
                dataIndex="sentDate"
                render={(name: any, data: any, index: any) => (
                  <span className={styles['table-list_text']}>Tất cả</span>
                )}
              />
              {
                sizes > 1025 &&
                <Table.Column
                  key="name"
                  title="Nhân viên"
                  dataIndex=""
                  width={"5%"}
                  render={(name: any, data: any, index: any) => (
                    <div>
                      <span className={styles['table-list_text']}>Tất cả</span>
                    </div>

                  )}

                />
              }
            </React.Fragment>
          )}


          <Table.Column
            key="sentDate"
            title="Ngày tạo"
            dataIndex="sentDate"
            render={(name: any, data: any, index: any) => (
              <span className={styles['table-list_text']}>16/01/2023</span>
            )}
          />
        </Table>
        :
        <div className={styles['list-table']}>
          <Table columns={columns} dataSource={data} />
        </div>
      }
      <ModalAddWage
        visible={createPayroll}
        btnAccept={() => setCreatePayroll(false)}
        btnCancel={() => setCreatePayroll(false)}
      />
    </div>
  );
};

export default Wage;
