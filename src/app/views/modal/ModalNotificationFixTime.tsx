import { Modal, Input, Button, TimePicker } from "antd";
import clock from "./../../../assets/images/clock.png";
import styles from "./../../../assets/css/modal/modalNotificationFixTime.module.css";
import style from "./../../../assets/css/modal/modalCorrectionNotice.module.css";
import { useState } from "react";
interface Props {
  title?: string;
  btnCancel: () => void;
  btnAccept: (value: string) => void;
  visible: boolean;
}
type Time = {
  id: number;
  value: string;
};

type dataTime = {
  shiftStartTime: {
    hours: number;
    minute: number;
  };
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

const { TextArea } = Input;
const ModalNotificationFixTime: React.FC<Props> = ({
  title,
  btnAccept,
  btnCancel,
  visible,
}) => {
  const [value, setValue] = useState<string>("");
  const [checkTimeStart, setCheckTimeStart] = useState<boolean>(false);
  const [checkTimeEnd, setCheckTimeEnd] = useState<boolean>(false);
  const hours = createNumber(23);
  const minute = createNumber(59);
  const [startTime, setstartTime] = useState<dataTime>({
    shiftStartTime: {
      hours: 0,
      minute: 0,
    },
  });
  const [breakTime, setBreakTime] = useState<dataTime>({
    shiftStartTime: {
      hours: 0,
      minute: 0,
    },
  });
  const hiddenTimePicker = () => {
    if (checkTimeEnd == true) {
      setCheckTimeEnd(false);
    }
    if (checkTimeStart == true) {
      setCheckTimeStart(false);
    }
  };

  const handleTimeStart = (number: number, value: string) => {
    if (checkTimeStart == true && value == "hours") {
      setstartTime({
        shiftStartTime: {
          hours: number,
          minute: startTime.shiftStartTime.minute,
        },
      });
    }
    if (checkTimeStart == true && value != "hours") {
      setstartTime({
        shiftStartTime: {
          hours: startTime.shiftStartTime.hours,
          minute: number,
        },
      });
    }
    if (checkTimeEnd == true && value == "hours") {
      setBreakTime({
        shiftStartTime: {
          hours: number,
          minute: breakTime.shiftStartTime.minute,
        },
      });
    }
    if (checkTimeEnd == true && value != "hours") {
      setBreakTime({
        shiftStartTime: {
          hours: breakTime.shiftStartTime.hours,
          minute: number,
        },
      });
    }
  };

  return (
    <Modal open={visible} onCancel={() => btnCancel()} footer={null} centered>
      {title ? (
        <div
          onClick={() => {
            hiddenTimePicker();
          }}
        >
          <h1 className={styles.title_text}>{title}</h1>
          <div className={styles.distance_between}>
            <div className={styles.distance_between_center}>
              <span className={styles.text_span_time}>Bắt đầu</span>
              <div className={styles.view_time}>
                <span className={styles.text_time}>
                  {startTime.shiftStartTime.hours < 10
                    ? `0${startTime.shiftStartTime.hours}`
                    : startTime.shiftStartTime.hours}
                  :
                  {startTime.shiftStartTime.minute < 10
                    ? `0${startTime.shiftStartTime.minute}`
                    : startTime.shiftStartTime.minute}
                </span>
                <img
                  src={clock}
                  alt=""
                  className={styles.img_time}
                  onClick={() => {
                    setCheckTimeStart(!checkTimeStart);
                    setCheckTimeEnd(false);
                  }}
                />
              </div>
            </div>

            <div className={styles.distance_between_center_2}>
              <span className={styles.text_span_time}>Kết thúc</span>
              <div className={styles.view_time}>
                <span className={styles.text_time}>
                  {breakTime.shiftStartTime.hours < 10
                    ? `0${breakTime.shiftStartTime.hours}`
                    : breakTime.shiftStartTime.hours}
                  :
                  {breakTime.shiftStartTime.minute < 10
                    ? `0${breakTime.shiftStartTime.minute}`
                    : breakTime.shiftStartTime.minute}
                </span>
                <img
                  src={clock}
                  alt=""
                  className={styles.img_time}
                  onClick={() => {
                    setCheckTimeEnd(!checkTimeEnd);
                    setCheckTimeStart(false);
                  }}
                />
              </div>
            </div>
          </div>
          {(checkTimeStart || checkTimeEnd) && (
            <div
              style={
                checkTimeStart
                  ? {
                      marginLeft: 80,
                    }
                  : {
                      marginLeft: 321,
                    }
              }
            >
              <div className={styles.view_time_picker}>
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
            </div>
          )}

          <div className={styles.view_textarea}>
            <span className={styles.text_span}>Lý do:</span>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoSize={{ minRows: 5, maxRows: 8 }}
              className={styles.textarea}
            />
          </div>
          <div className={styles.view_button}>
            <Button
              onClick={() => {
                btnAccept(value);
                btnCancel();
              }}
              className={styles.button}
            >
              Cập nhập
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h1 className={style.title_text}>Thông báo</h1>
          <div>
            <p className={style.text_p}>Vui lòng nhập lý do chỉnh sửa:</p>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </div>
          <div className={style.end}>
            <Button
              onClick={() => {
                btnAccept(value);
                btnCancel();
              }}
              className={style.button}
            >
              ok
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalNotificationFixTime;
