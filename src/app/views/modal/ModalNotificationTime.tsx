import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
  DatePicker,
  TimePicker,
} from "antd";
import calendar from "./../../../assets/images/calendar.png";
import check from "./../../../assets/images/check.png";
import styles from "./../../../assets/css/modal/modalNotificationTime.module.css";
import "./../../../assets/css/modal/modalSelect.css";
import SelectDayMonths from "./SelectDayMonths";
type Data = {
  value: string;
  label: string;
};

interface Props {
  title?: string;
  btnCancel: () => void;
  btnAccept: (data?: any) => void;
  visible: boolean;
  data?: Data[];
}
const { RangePicker } = DatePicker;
const ModalNotificationTime: React.FC<Props> = ({
  visible,
  title,
  btnCancel,
  btnAccept,
  data,
}) => {
  const [sizesWidth, setSizesWidth] = useState<number>(window.innerWidth);
  const updateSize = () => {
    setSizesWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
  }, []);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChangeTime = (time: any, timeString: string) => {
    console.log(time, timeString);
  };
  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    btnAccept(values);
  };

  const [dates, setDates] = useState<any>(null);
  const [value, setValue] = useState<any>(null);
  const onChangeDate = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  const disabledDate = (current: any) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <>
      <Modal
        centered
        open={visible}
        onCancel={() => btnCancel()}
        footer={null}
        width={title ? 550 : 700}
      >
        {title ? (
          <div>
            <h1 className={styles.title_text}>{title}</h1>
            <div className={styles.div_view_center}>
              {/* <div className={styles.border_div_time}> */}
              {/* <div className={styles.div_center_text_time}> */}
              <RangePicker
                value={dates || value}
                disabledDate={disabledDate}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
                onOpenChange={onOpenChange}
                style={{ width: "80%", padding: 12 }}
              />
              {/* <div className={styles.center_text_time}>
                    <p
                      className={
                        startDate ? styles.text_time : styles.text_timess
                      }
                      onClick={() => setHiddenDate(1)}
                    >
                      {startDate ? startDate : "ch???n th???i gian b???t ?????u"}
                    </p>
                    <p className={styles.text_time}>~</p>
                    <p
                      className={
                        endDate ? styles.text_time : styles.text_timess
                      }
                      onClick={() => setHiddenDate(2)}
                    >
                      {endDate ? endDate : "ch???n th???i gian k???t th??c"}
                    </p>
                  </div>

                  <img
                    src={calendar}
                    className={styles.onclick_icon}
                    onClick={() => {
                      hiddenDate == 0 ? setHiddenDate(1) : setHiddenDate(0);
                    }}
                  /> */}
              {/* </div> */}
              {/* </div> */}
            </div>

            <div
              className={styles.div_button_notification}
              style={{ paddingTop: 70 }}
            >
              <Button
                className={styles.button_notification}
                onClick={() => {
                  btnAccept();
                }}
              >
                X??c nh???n
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.wrapperDiv}>
            <h1 className={styles.title_text}>T???o y??u c???u ngh??? ph??p</h1>
            <Form
              labelCol={{
                span: 8,
              }}
              labelAlign="left"
              wrapperCol={{ flex: 1 }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Nh??n vi??n"
                name="username"
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="Nguy???n ?????c K???"
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item label="Lo???i" name="type" rules={[{ required: true }]}>
                <Select
                  showSearch
                  placeholder="Lo???i"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={data}
                />
              </Form.Item>

              <Form.Item
                label="Lo???i ngh??? ph??p"
                name="kindofleave"
                rules={[{ required: true }]}
              >
                <Select
                  showSearch
                  placeholder="Lo???i ngh??? ph??p"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={data}
                />
              </Form.Item>
              <table className={styles.table}>
                <thead className={styles.table_thead}>
                  <tr className={styles.font_size_thead}>
                    <th style={{ width: "25%" }}>Lo???i ngh??? ph??p</th>
                    <th style={{ width: "25%" }}>T???ng s??? ng??y ngh???</th>
                    <th style={{ width: "25%" }}>???? ngh???</th>
                    <th style={{ width: "25%" }}>C??n l???i</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.border_botton_table}>
                    <td>Ngh??? ph??p ti??u chu???n</td>
                    <td>12</td>
                    <td>1</td>
                    <td>11</td>
                  </tr>
                  <tr className={styles.border_botton_table}>
                    <td>Ngh??? kh??ng l????ng</td>
                    <td>30</td>
                    <td>1</td>
                    <td>29</td>
                  </tr>
                </tbody>
              </table>
              <Form.Item
                label="Ng??y b???t ?????u"
                name="startDay"
                rules={[{ required: true }]}
                style={{ marginTop: 40 }}
              >
                {/* <Space direction="vertical" style={{ width: "100%" }}> */}
                <DatePicker
                  size="middle"
                  style={{ width: "100%", height: 37 }}
                  placeholder="09/01/2023*m???c ?????nh ng??y hi???n t???i, k cho ch???n*"
                  format={["DD/MM/YYYY", "DD/MM/YY"]}
                  onChange={onChangeDate}
                />
                {/* </Space> */}
              </Form.Item>

              {sizesWidth < 601 ? (
                <>
                  <Form.Item
                    label="Th???i gian b???t ?????u"
                    name="startTime"
                    rules={[{ required: true }]}
                    className={styles.input_time}
                  >
                    <TimePicker format="h:mm " onChange={onChangeTime} />
                  </Form.Item>
                  <Form.Item
                    label="Th???i gian k???t th??c"
                    name="endTime"
                    rules={[{ required: true }]}
                    className={styles.input_time}
                  >
                    <TimePicker format="h:mm " onChange={onChangeTime} />
                  </Form.Item>
                </>
              ) : (
                <Form.Item>
                  <div style={{ display: "flex", height: "100%" }}>
                    <Form.Item
                      label="Th???i gian b???t ?????u"
                      name="startTime"
                      rules={[{ required: true }]}
                      wrapperCol={{ offset: 6 }}
                      style={{ width: "52%" }}
                    >
                      <TimePicker format="h:mm " onChange={onChangeTime} />
                    </Form.Item>

                    <Form.Item
                      label="Th???i gian k???t th??c"
                      name="endTime"
                      rules={[{ required: true }]}
                      wrapperCol={{ offset: 3 }}
                      style={{
                        width: "48%",
                        marginLeft: 20,
                      }}
                    >
                      <TimePicker format="h:mm " onChange={onChangeTime} />
                    </Form.Item>
                  </div>
                </Form.Item>
              )}

              <Form.Item
                label="Ng?????i nh???n b??n giao"
                name="HandoverRecipient"
                rules={[{ required: true }]}
              >
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Ch???n nh??n vi??n"
                  onChange={onChange}
                  options={data}
                />
              </Form.Item>
              <Form.Item
                label="S??? ??i???n tho???i"
                name="phone"
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="S??? ??i???n tho???i"
                  className={styles.input}
                />
              </Form.Item>
              <Form.Item
                label="L?? do"
                name="reason"
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  placeholder="L?? do"
                  className={styles.input}
                />
              </Form.Item>
              <Form.Item style={{ display: "flex", justifyContent: "end" }}>
                <Button type="primary" htmlType="submit" style={{ height: 40 }}>
                  T???o m???i
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </>
  );
};
export default ModalNotificationTime;
