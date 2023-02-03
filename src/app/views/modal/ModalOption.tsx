import { Button, DatePicker, Modal, Select } from "antd";
import { useState } from "react";
import styles from "./../../../assets/css/modal/modalOption.module.css";
import calendar from "./../../../assets/images/calendar.png";
import ic_down from "./../../../assets/images/ic_down.png";
interface Props {
  btnCancel: () => void;
  btnAccept: (value?: string) => void;
  visible: boolean;
}
type Option = {
  lable: number;
  value: string;
};

type DataStatus = {
  id: number;
  value: string;
  status: boolean;
};

const { RangePicker } = DatePicker;
const ModalOption = ({ visible, btnAccept, btnCancel }: Props) => {
  const option: Option[] = [
    {
      lable: 1,
      value: "Theo ngày yêu cầu",
    },
    {
      lable: 2,
      value: "Theo ngày gửi",
    },
  ];
  const dataStatus: DataStatus[] = [
    {
      id: 1,
      value: "Chờ phê duyệt",
      status: true,
    },
    {
      id: 2,
      value: "Chấp thuận",
      status: false,
    },
    {
      id: 3,
      value: "Từ chối",
      status: false,
    },
  ];
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
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleCheckBox = (item: DataStatus) => {};
  return (
    <Modal
      open={visible}
      onCancel={() => btnCancel()}
      footer={null}
      centered
      width={480}
    >
      <div>
        <h1 className={styles.title_text}>Tuỳ chọn</h1>
        <p className={styles.text_p}>Khoảng thời gian</p>
        <div className={styles.div_view_center}>
          {/* <div className={styles.border_div_time}>
            <div className={styles.div_center_text_time}>
              <div className={styles.center_text_time}>
                <p className={styles.text_time}>02/01/2023</p>
                <p className={styles.text_time}>~</p>
                <p className={styles.text_time}>08/01/2023</p>
              </div>
              <img
                src={calendar}
                className={styles.onclick_icon}
                onClick={() => {
                  console.log("click lich");
                }}
              />
            </div>
          </div> */}
          <RangePicker
            value={dates || value}
            disabledDate={disabledDate}
            onCalendarChange={(val) => setDates(val)}
            onChange={(val) => setValue(val)}
            onOpenChange={onOpenChange}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <p className={styles.text_p}>Loại ngày</p>
        <Select
          defaultValue="Theo ngày yêu cầu"
          style={{ width: "100%" }}
          onChange={handleChange}
          options={option}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <p className={styles.text_p}>Tình trạng</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {dataStatus.map((item) => {
            return (
              <label className={styles.container} key={item.id}>
                <input
                  type="checkbox"
                  defaultChecked={item.status}
                  onClick={() => handleCheckBox(item)}
                />

                <span className={styles.checkmark}></span>
                <span>{item.value}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className={styles.div_button}>
        <Button className={styles.button} onClick={() => btnAccept()}>
          Chấp thuận
        </Button>
      </div>
    </Modal>
  );
};

export default ModalOption;
