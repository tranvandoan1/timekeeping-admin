import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState, useReducer } from "react";
import styles from "./../../../assets/css/modal/modalAddShifts.module.css";

type Data = {
  id: number;
  title: string;
  check: boolean;
};

type Time = {
  id: number;
  value: string;
};

type dataTime = {
  shiftStartTime: {
    hours: number;
    minute: number;
  };
  shiftEndTime: {
    hours: number;
    minute: number;
  };
};

type DataTime = {
  id: number;
  check: boolean;
  value: string;
};
interface Props {
  title?: string;
  btnCancel?: () => void;
  btnAccept?: (data: any) => void;
  visible?: boolean;
  data?: Data[];
  btnCheckBox?: (data: Data[]) => void;
  dataTime?: DataTime[];
  status?: boolean;
}
type State = {
  sizesWidth: number;
  dataItem: Data;
  dataTimes: DataTime;
  checkTimestart: boolean;
  checkTimesEnd: boolean;
  checkBreakTimeStart: boolean;
  checkBreakTimeEnd: boolean;
  value: string;
  startTime: dataTime;
  breakTime: dataTime;
};
const createNumber = (number: number) => {
  let data: Time[] = [];
  for (let i = 0; i <= number; i++) {
    data.push({
      id: i,
      value: i < 10 ? `0${i}` : `${i}`,
    });
  }
  return data;
};

const { Option } = Select;

const ModaAddShifts = React.memo(
  ({
    title,
    btnAccept,
    btnCancel,
    visible,
    data,
    dataTime,
    btnCheckBox,
    status,
  }: Props) => {
    const [state, setState] = useReducer(
      (state: any, newState: Partial<State>) => ({
        ...state,
        ...newState,
      }),
      {
        sizesWidth: window.innerWidth / 1440,
        dataItem: [],
        dataTimes: [],
        checkTimestart: false,
        checkTimesEnd: false,
        checkBreakTimeStart: false,
        checkBreakTimeEnd: false,
        value: status == true ? "Ca hành chính" : "",
        startTime: {
          shiftStartTime: {
            hours: 0,
            minute: 0,
          },
          shiftEndTime: {
            hours: 0,
            minute: 0,
          },
        },
        breakTime: {
          shiftStartTime: {
            hours: 0,
            minute: 0,
          },
          shiftEndTime: {
            hours: 0,
            minute: 0,
          },
        },
      }
    );
    const updateSize = () => {
      setState({ sizesWidth: window.innerWidth / 1440 });
    };

    useEffect(() => {
      window.addEventListener("resize", updateSize);
    }, []);

    const hours = createNumber(23);
    const minute = createNumber(59);

    // useEffect(() => {
    //   if (data) {
    //     setState({ dataItem: data });
    //   }
    //   if (dataTime) {
    //     setState({ dataItems: dataTime });
    //   }
    // }, [data, dataTime]);

    const setCheckBox = (item: any) => {
      for (let i = 0; i < state?.dataItem.length; i++) {
        if (state?.dataItem[i].id == item.id) {
          state.dataItem[i].check = !state?.dataItem[i].check;
        }
      }
      return state?.dataItem;
    };
    const hiddenTimePicker = () => {
      if (state?.checkTimesEnd == true) {
        setState({ checkTimesEnd: false });
      }
      if (state?.checkTimestart == true) {
        setState({ checkTimestart: false });
      }
      if (state?.checkBreakTimeEnd == true) {
        setState({ checkBreakTimeEnd: false });
      }
      if (state?.checkBreakTimeStart == true) {
        setState({ checkBreakTimeStart: false });
      }
    };

    const handleTimeStart = (number: number, value: string) => {
      if (state?.checkTimestart == true && value == "hours") {
        setState({
          startTime: {
            shiftStartTime: {
              hours: number,
              minute: state?.startTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: state?.startTime.shiftEndTime.hours,
              minute: state?.startTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkTimestart == true && value != "hours") {
        setState({
          startTime: {
            shiftStartTime: {
              hours: state?.startTime.shiftStartTime.hours,
              minute: number,
            },
            shiftEndTime: {
              hours: state?.startTime.shiftEndTime.hours,
              minute: state?.startTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkTimesEnd == true && value == "hours") {
        setState({
          startTime: {
            shiftStartTime: {
              hours: state?.startTime.shiftStartTime.hours,
              minute: state?.startTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: number,
              minute: state?.startTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkTimesEnd == true && value != "hours") {
        setState({
          startTime: {
            shiftStartTime: {
              hours: state?.startTime.shiftStartTime.hours,
              minute: state?.startTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: state?.startTime.shiftEndTime.hours,
              minute: number,
            },
          },
        });
      }
      if (state?.checkBreakTimeStart == true && value == "hours") {
        setState({
          breakTime: {
            shiftStartTime: {
              hours: number,
              minute: state?.breakTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: state?.breakTime.shiftEndTime.hours,
              minute: state?.breakTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkBreakTimeStart == true && value != "hours") {
        setState({
          breakTime: {
            shiftStartTime: {
              hours: state?.breakTime.shiftStartTime.hours,
              minute: number,
            },
            shiftEndTime: {
              hours: state?.breakTime.shiftEndTime.hours,
              minute: state?.breakTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkBreakTimeEnd == true && value == "hours") {
        setState({
          breakTime: {
            shiftStartTime: {
              hours: state?.breakTime.shiftStartTime.hours,
              minute: state?.breakTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: number,
              minute: state?.breakTime.shiftEndTime.minute,
            },
          },
        });
      }
      if (state?.checkBreakTimeEnd == true && value != "hours") {
        setState({
          breakTime: {
            shiftStartTime: {
              hours: state?.breakTime.shiftStartTime.hours,
              minute: state?.breakTime.shiftStartTime.minute,
            },
            shiftEndTime: {
              hours: state?.breakTime.shiftEndTime.hours,
              minute: number,
            },
          },
        });
      }
    };

    const onFinish = (values: any) => {
      let data = {
        ...values,
        breakTime: state?.breakTime,
        shiftTime: state?.startTime,
        data: state?.dataTimes,
      };
      btnAccept(data);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    const handleCheckBox = (item: DataTime) => {
      for (let i = 0; i < state?.dataTimes.length; i++) {
        if (state?.dataTimes[i].value == item.value) {
          state.dataTimes[i].check = !state.dataTimes[i].check;
        }
      }
    };

    const handleChange = (value: string[]) => {
      console.log(`selected ${value}`);
    };
    // console.log(state?.dataTimes, 'title12')
    console.log(state.sizesWidth * 1440);

    return (
      <Modal
        open={visible}
        onCancel={() => btnCancel()}
        footer={null}
        centered
        width={
          title
            ? state.sizesWidth * 1440 < 600
              ? state.sizesWidth * 1440 * 0.8
              : state.sizesWidth * 772
            : state?.sizesWidth * 992
        }
      >
        {title ? (
          <>
            <h1 className={styles.title_text}>{title}</h1>
            <div style={{ marginTop: "10px" }}>
              <input
                type="text"
                className={styles.input_search}
                placeholder="Tìm kiếm"
                onChange={(e) => setState({ value: e.target.value })}
              />
            </div>

            {data?.map((item: Data) => {
              return (
                <div className={styles.view_between} key={item?.id}>
                  <span style={{ fontWeight: "500" }}>{item.title}</span>

                  <label className={styles.container}>
                    <input
                      type="checkbox"
                      defaultChecked={item.check}
                      onClick={() => {
                        let datas = setCheckBox(item);
                        btnCheckBox(datas);
                      }}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              );
            })}
            <Button onClick={() => btnAccept()} className={styles.buttons}>
              + Tạo ca mới
            </Button>
          </>
        ) : (
          <div
            onClick={() => {
              hiddenTimePicker();
            }}
          >
            <h1 className={styles.title_text}>Tạo ca làm</h1>
            <Form
              labelCol={{
                span: 8,
              }}
              labelAlign="left"
              wrapperCol={{ flex: 1 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Tên ca làm"
                name="username"
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="Ví dụ: ca hành chính"
                  className={!state?.value ? styles.input : styles.inputs}
                  defaultValue={status == true ? "Ca hành chính" : ""}
                />
              </Form.Item>

              <Form.Item
                label="Bắt đầu"
                name="shiftTime"
                rules={[
                  {
                    required: true,
                    message:
                      state?.startTime.shiftStartTime.hours == 0 ||
                      state?.startTime.shiftEndTime.hours == 0
                        ? "bạn chưa chọn thời gian bắt đầu ca"
                        : "",
                  },
                ]}
              >
                <div className={styles.view_time_start}>
                  <span
                    className={styles.time_start}
                    onClick={() => {
                      setState({
                        checkBreakTimeEnd: false,
                        checkBreakTimeStart: false,
                        checkTimesEnd: false,
                        checkTimestart: true,
                      });
                    }}
                  >
                    <span className={styles.text_span_time}>
                      {state?.startTime?.shiftStartTime?.hours < 10
                        ? `0${state?.startTime?.shiftStartTime?.hours}`
                        : state?.startTime?.shiftStartTime?.hours}{" "}
                      giờ
                    </span>
                    :
                    <span className={styles.text_span_time}>
                      {state?.startTime?.shiftStartTime?.minute < 10
                        ? `0${state?.startTime?.shiftStartTime?.minute}`
                        : state?.startTime?.shiftStartTime?.minute}{" "}
                      phút
                    </span>
                  </span>
                  <span className={styles.time_connect}>Kết thúc</span>
                  <span
                    className={styles.time_start_minute}
                    onClick={() => {
                      setState({
                        checkBreakTimeEnd: false,
                        checkBreakTimeStart: false,
                        checkTimesEnd: true,
                        checkTimestart: false,
                      });
                    }}
                  >
                    <span className={styles.text_span_time}>
                      {state?.startTime.shiftEndTime.hours < 10
                        ? `0${state?.startTime.shiftEndTime.hours}`
                        : state?.startTime.shiftEndTime.hours}{" "}
                      giờ
                    </span>
                    :
                    <span className={styles.text_span_time}>
                      {state?.startTime.shiftEndTime.minute < 10
                        ? `0${state?.startTime.shiftEndTime.minute}`
                        : state?.startTime.shiftEndTime.minute}{" "}
                      phút
                    </span>
                  </span>
                </div>
                {(state?.checkTimestart == true ||
                  state?.checkTimesEnd == true) && (
                  <div
                    className={
                      state?.checkTimesEnd == true
                        ? styles.view_time_picker_end
                        : styles.view_time_picker
                    }
                  >
                    <div className={styles.scroll_time}>
                      {hours.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={styles.view_text_time}
                            onClick={() =>
                              handleTimeStart(Number(item.value), "hours")
                            }
                          >
                            <span>{item.value}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.scroll_time}>
                      {minute.map((item) => {
                        return (
                          <div
                            className={styles.view_text_time}
                            key={item.id}
                            onClick={() =>
                              handleTimeStart(Number(item.value), "minute")
                            }
                          >
                            <span>{item.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Form.Item>

              <Form.Item
                label="Nghỉ giữa giờ"
                name="breakTime"
                rules={[
                  {
                    required: true,
                    message:
                      state?.breakTime.shiftStartTime.hours == 0 &&
                      state?.breakTime.shiftEndTime.hours == 0
                        ? "bạn chưa chọn thời gian nghỉ"
                        : "",
                  },
                ]}
              >
                <div className={styles.view_time_start}>
                  <span
                    className={styles.time_start}
                    onClick={() => {
                      setState({
                        checkBreakTimeEnd: false,
                        checkBreakTimeStart: true,
                        checkTimesEnd: false,
                        checkTimestart: false,
                      });
                    }}
                  >
                    <span className={styles.text_span_time}>
                      {state?.breakTime?.shiftStartTime?.hours < 10
                        ? `0${state?.breakTime?.shiftStartTime?.hours}`
                        : state?.breakTime?.shiftStartTime?.hours}{" "}
                      giờ
                    </span>
                    :
                    <span className={styles.text_span_time}>
                      {state?.breakTime?.shiftStartTime?.minute < 10
                        ? `0${state?.breakTime?.shiftStartTime?.minute}`
                        : state?.breakTime?.shiftStartTime?.minute}{" "}
                      phút
                    </span>
                  </span>
                  <span
                    className={styles.time_connect}
                    style={{ color: "#2D9CDB" }}
                  >
                    Đến
                  </span>
                  <span
                    className={styles.time_start_minute}
                    onClick={() => {
                      setState({
                        checkBreakTimeEnd: true,
                        checkBreakTimeStart: false,
                        checkTimesEnd: false,
                        checkTimestart: false,
                      });
                    }}
                  >
                    <span className={styles.text_span_time}>
                      {state?.breakTime.shiftEndTime.hours < 10
                        ? `0${state?.breakTime.shiftEndTime.hours}`
                        : state?.breakTime.shiftEndTime.hours}{" "}
                      giờ
                    </span>
                    :
                    <span className={styles.text_span_time}>
                      {state?.breakTime.shiftEndTime.minute < 10
                        ? `0${state?.breakTime.shiftEndTime.minute}`
                        : state?.breakTime.shiftEndTime.minute}{" "}
                      phút
                    </span>
                  </span>
                </div>
                {(state?.checkBreakTimeStart == true ||
                  state?.checkBreakTimeEnd == true) && (
                  <div
                    className={
                      state?.checkBreakTimeEnd == true
                        ? styles.view_time_picker_end
                        : styles.view_time_picker
                    }
                  >
                    <div className={styles.scroll_time}>
                      {hours.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={styles.view_text_time}
                            onClick={() =>
                              handleTimeStart(Number(item.value), "hours")
                            }
                          >
                            <span>{item.value}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.scroll_time}>
                      {minute.map((item) => {
                        return (
                          <div
                            className={styles.view_text_time}
                            key={item.id}
                            onClick={() =>
                              handleTimeStart(Number(item.value), "minute")
                            }
                          >
                            <span>{item.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Form.Item>
              <p className={styles.text_button}>Chọn nhanh nhân viên</p>
              <Form.Item
                label="Nghỉ giữa giờ"
                name="kindofleave"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="select one country"
                  defaultValue={status == true ? ["nhân viên"] : []}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="china" label="China">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="China">
                        🇨🇳
                      </span>
                      China (中国)
                    </div>
                  </Option>
                  <Option value="usa" label="USA">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="USA">
                        🇺🇸
                      </span>
                      USA (美国)
                    </div>
                  </Option>
                  <Option value="japan" label="Japan">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="Japan">
                        🇯🇵
                      </span>
                      Japan (日本)
                    </div>
                  </Option>
                  <Option value="korea" label="Korea">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="Korea">
                        🇰🇷
                      </span>
                      Korea (韩国)
                    </div>
                  </Option>
                </Select>
              </Form.Item>
              <p>Lặp lịch hằng tuần</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {dataTime.map((item: any) => {
                  return (
                    <label className={styles.container} key={item.id}>
                      {item.value}
                      <input
                        type="checkbox"
                        defaultChecked={item.check}
                        onClick={() => handleCheckBox(item)}
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                  );
                })}
              </div>
              <Form.Item
                style={{
                  marginTop: 40,
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                >
                  {status == false ? "Tạo mới" : "Cập nhật"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    );
  }
);

export default ModaAddShifts;
