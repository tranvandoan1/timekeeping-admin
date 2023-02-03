import React, { useState, useReducer } from "react";
import styles from "./requestaAndApprove.module.css";
import ExportFile from "./../timesheets/component/ExportFile";
import {
  CaretDownOutlined,
  DownOutlined,
  HomeOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Input, Space, DatePicker, Divider, Radio, Table, Avatar } from "antd";
import { BiData } from "react-icons/bi";
import ModalRemoveRefuseAccept from "../../modal/ModalRemoveRefuseAccept";
import ModalReview from "../../modal/ModalReview";
import { Size } from "./../../component/size";
const { RangePicker } = DatePicker;
type State = {
  selectTab: number;
  showDetail: boolean;
  accept: boolean;
  reject: boolean;
  active: boolean;
};
const RequestaAndApprove: React.FC = () => {
  const navigate = useNavigate();
  const sizes = Size();
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({
      ...state,
      ...newState,
    }),
    {
      selectTab: 0,
      showDetail: false,
      accept: false,
      reject: false,
      active: false,
    }
  );
  const columns = [
    {
      title: "STT",
      dataIndex: "name",
      render: (text: any, data: any, index: any) => (
        <span style={{ marginLeft: 10 }}>{index + 1}</span>
      ),
    },
    {
      title: "Người yêu cầu",
      dataIndex: "name",
      width: "20%",
      render: (name: any, data: any, index: any) => (
        <div
          className={styles.name}
          onClick={() => setState({ showDetail: true })}
        >
          <Avatar
            size={30}
            src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
          />
          <div style={{ marginLeft: 10 }}>
            <span className={styles.tx_name}>{name}</span>
            <span className={styles.tx_np}>Nghỉ phép</span>
          </div>
        </div>
      ),
    },
    {
      title: "Thông tin yêu cầu",
      dataIndex: "sentDate",
      width: "25%",
      render: (text: any, data: any, index: any) => (
        <div
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => setState({ showDetail: true })}
        >
          <div className={styles.tt_text1}>
            <span>Loại nghỉ phép : </span>
            <span>Nghỉ phép tiêu chuẩn</span>
          </div>
          <div className={styles.tt_text2}>
            <span>Ca làm : </span>
            <span>Ca hành chính</span>
          </div>
          <div className={styles.tt_text3}>
            <span>Ngày : </span>
            <span>10/01/2023 00:00 - 12/01/2023 00:00</span>
          </div>
        </div>
      ),
    },
    {
      title: "Lý do",
      dataIndex: "sentDate",
      render: (text: any, data: any, index: any) => (
        <span
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => setState({ showDetail: true })}
        >
          Hôm qua mới đá vài bát tiết canh nên đau bụng
        </span>
      ),
      width: "20%",
    },
    {
      title: "Ngày gửi",
      dataIndex: "sentDate",
      width: "15%",
      render: (text: any, data: any, index: any) => (
        <span
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => setState({ showDetail: true })}
        >
          10/01/2023 16:39
        </span>
      ),
    },
    {
      title: "",
      dataIndex: "sentDate",
      width: "15%",
      render: (name: any, data: any, index: any) => (
        <div className={styles["action"]}>
          <button onClick={() => setState({ reject: true })}>Từ chối</button>
          <br />
          <button onClick={() => setState({ accept: true })}>Chấp thuận</button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Nguyễn Đức Kỷ",
      age: 32,
      sentDate: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Nguyễn Đức Kỷ",
      age: 42,
      sentDate: "London No. 1 Lake Park",
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const setAll = () => {
    setState({
      reject: false,
      showDetail: false,
      accept: false,
      active: false,
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      {state.active == true && (
        <div className={styles.active} onClick={() => setAll()}></div>
      )}
      <div style={{ zIndex: 2 }}>
        <div className={`${styles.flex} ${styles["flex-reponsive"]}`}>
          <h4>Yêu cầu và Phê duyệt</h4>
          <div className={styles.flex_no_center}>
            <div className={styles.export}>
              <ExportFile
                height={40}
                callBack={(e: boolean) => setState({ active: e })}
                active={state.active}
              />
            </div>
            <div className={`${styles["flex"]} ${styles["title_create"]}`}>
              <span className={styles["title_create-text"]}>Tạo phép</span>

              <span
                style={{
                  borderLeft: "1px solid #fff",
                  height: "100%",
                }}
              ></span>
              <div
                style={{ position: "relative" }}
                className={styles.show_modal}
              >
                <CaretDownOutlined
                  style={{
                    fontSize: 18,
                    color: "#fff",
                  }}
                />
                <div className={styles.mockup_create}>
                  <div>
                    <span
                      style={{ display: "block" }}
                      onClick={() => navigate("/shift-list")}
                    >
                      Tạm ứng lương
                    </span>
                    <span style={{ display: "block" }}>Tạo nghỉ phép</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.flex} ${styles["filter"]}`}
          style={{ marginTop: 35 }}
        >
          <div className={styles.input}>
            <Input placeholder="Tìm kiếm" className={styles["input-search"]} />
            <SearchOutlined className={styles["icon-search"]} />
          </div>
          <div
            className={`${styles["flex_no_center"]} ${styles["button-select"]}`}
          >
            <div
              className={`${styles["flex_no_center"]} ${styles["button-select_left"]}`}
            >
              <UnorderedListOutlined />
              <span>Tất cả</span>
            </div>

            <DownOutlined className={styles.icon_down} />
            <div className={styles.show_mockup_all}>
              <div className={styles.show_mockup_all_box}>
                <div className={styles["flex_no_center"]}>
                  <UnorderedListOutlined className={styles.icon_all} />
                  <span>Tất cả</span>
                </div>
                <div className={styles["flex_no_center"]}>
                  <HomeOutlined className={styles.icon_home} />
                  <span>Nghỉ phép</span>
                </div>
                <div className={styles["flex_no_center"]}>
                  <BiData className={styles.icon_data} />
                  <span>Tạm ứng lương</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles["flex_no_center"]} ${styles["button-select"]}`}
          >
            <div
              className={`${styles["flex_no_center"]} ${styles["button-select_left"]}`}
            >
              <span>Theo ngày gửi</span>
            </div>
            <DownOutlined className={styles.icon_down} />
            <div className={styles.show_mockup_all}>
              <div className={styles.show_mockup_all_box}>
                <div className={styles["flex_no_center"]}>
                  <span>Theo ngày yêu cầu</span>
                </div>
                <div className={styles["flex_no_center"]}>
                  <span>Theo ngày gửi</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`${styles["flex_no_center"]} ${styles["button-select-time"]}`}
          >
            <Space
              direction="vertical"
              size={12}
              className={styles.date_picker}
            >
              <RangePicker />
            </Space>
          </div> */}
        </div>
        <div style={{ marginTop: 30 }}>
          <div
            className={`${styles.flex_no_center} ${styles["button-select_request"]}`}
          >
            <div
              className={`${
                state.selectTab == 0
                  ? styles["request-active1"]
                  : styles["request1"]
              } ${styles["flex"]}`}
              onClick={() => setState({ selectTab: 0 })}
            >
              <span>Yêu cầu</span>
              <span>1</span>
            </div>
            <div
              className={`${
                state.selectTab == 1
                  ? styles["request-active2"]
                  : styles["request2"]
              } ${styles["flex"]}`}
              onClick={() => setState({ selectTab: 1 })}
            >
              <span>Chấp thuận</span>
              <span>1</span>
            </div>
            <div
              className={`${
                state.selectTab == 2
                  ? styles["request-active3"]
                  : styles["request3"]
              } ${styles["flex"]}`}
              onClick={() => setState({ selectTab: 2 })}
            >
              <span>Chấp thuận</span>
              <span>1</span>
            </div>
          </div>
          {sizes.width < 1025 ? (
            <Table
              dataSource={data}
              expandable={{
                expandedRowRender: (record) => (
                  <div>
                    <div>
                      <h6>Thông tin yêu cầu : </h6>
                      <strong>
                        <div
                          style={{ width: "100%", cursor: "pointer" }}
                          onClick={() => setState({ showDetail: true })}
                        >
                          <div className={styles.tt_text1}>
                            <span>Loại nghỉ phép : </span>
                            <span>Nghỉ phép tiêu chuẩn</span>
                          </div>
                          <div className={styles.tt_text2}>
                            <span>Ca làm : </span>
                            <span>Ca hành chính</span>
                          </div>
                          <div className={styles.tt_text3}>
                            <span>Ngày : </span>
                            <span>10/01/2023 00:00 - 12/01/2023 00:00</span>
                          </div>
                        </div>
                      </strong>
                    </div>
                    {sizes?.width < 739 && (
                      <div>
                        <h6>Lý do : </h6>
                        <strong>
                          <span
                            style={{
                              width: "100%",
                              cursor: "pointer",
                              color: "red",
                            }}
                            onClick={() => setState({ showDetail: true })}
                          >
                            Hôm qua mới đá vài bát tiết canh nên đau bụng
                          </span>
                        </strong>
                      </div>
                    )}
                  </div>
                ),
              }}
            >
              <Table.Column key="name" title="Tên ca làm" dataIndex="name" />
              {sizes?.width > 739 && (
                <Table.Column
                  key="time"
                  title="Lý do"
                  dataIndex="time"
                  render={(name: any, data: any, index: any) => (
                    <span
                      style={{ width: "100%", cursor: "pointer" }}
                      onClick={() => setState({ showDetail: true })}
                    >
                      Hôm qua mới đá vài bát tiết canh nên đau bụng
                    </span>
                  )}
                />
              )}
              <Table.Column
                key="sentDate"
                title="Ngày nghỉ"
                dataIndex="sentDate"
                render={(name: any, data: any, index: any) => (
                  <span
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() => setState({ showDetail: true })}
                  >
                    10/01/2023 16:39
                  </span>
                )}
              />
              <Table.Column
                key="name"
                title=""
                dataIndex=""
                width={"5%"}
                render={(name: any, data: any, index: any) => (
                  <div>
                    <div className={styles["action"]}>
                      <button onClick={() => setState({ reject: true })}>
                        Từ chối
                      </button>
                      <br />
                      <button onClick={() => setState({ accept: true })}>
                        Chấp thuận
                      </button>
                    </div>
                  </div>
                )}
              />
            </Table>
          ) : (
            <div>
              <Table
                rowSelection={{
                  type: "checkbox",
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
            </div>
          )}
        </div>
      </div>
      {(state.reject || state.accept) == true && (
        <ModalRemoveRefuseAccept
          title={
            state.reject == true
              ? "Bạn muốn Từ Chối yêu cầu này ?"
              : "Bạn muốn Chấp Thuận yêu cầu này ?"
          }
          visible={state.reject || state.accept}
          btnCancel={() =>
            state.reject == true
              ? setState({ reject: false })
              : setState({ accept: false })
          }
          btnAccept={() =>
            state.reject == true
              ? setState({ reject: false })
              : setState({ accept: false })
          }
          status={state.accept}
        />
      )}
      {state.showDetail == true && (
        <ModalReview
          visible={state.showDetail}
          btnCancel={() => setState({ showDetail: false })}
          btnAccept={() => setState({ showDetail: false })}
          status={
            state.selectTab == 1 ? true : state.selectTab == 0 ? null : false
          }
        />
      )}
    </div>
  );
};

export default RequestaAndApprove;
