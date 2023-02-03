import {
  CalendarOutlined,
  CaretDownOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useState, useReducer } from "react";
import styles from "../timesheets.module.css";
import colors from "../../../../../res/colors";
import coolicon from "../../../../../assets/images/coolicon.png";
import SelectWeekMonth from "./SelectWeekMonth";
/// @ts-ignore
import { Size } from "../../../component/size";
import ModaAddShifts from "../../../modal/ModalAddShifts";
import { useNavigate } from "react-router-dom";
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
type State = {
  modalCreateShifts: boolean;
  show_select_time: boolean;
  show_select_timekeeping: boolean;
  showDatePiker: boolean;
  active: boolean;
};
type Props = {
  callBack?: (e: number) => void
  select?: number
}
const Filter: React.FC<Props> = ({ callBack, select }) => {
  const navigate = useNavigate();
  const sizes = Size();
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({
      ...state,
      ...newState,
    }),
    {
      modalCreateShifts: false,
      show_select_time: false,
      show_select_timekeeping: false,
      showDatePiker: false,
      active: false,
    }
  );

  const setAll = () => { };
  return (
    <div
      className={sizes?.width >= 1023 ? styles.flex : ""}
      style={{ marginTop: 20 }}
    >
      {state.active == true && (
        <div className={styles.active} onClick={() => setAll()}></div>
      )}
      <div className={sizes?.width >= 1023 ? styles.flex_no_content : ""}>
        <div className={styles.flex}>
          <div className={styles.search}>
            <div className={styles.logo} style={{ width: 20, height: 20 }}>
              <img src={coolicon} alt="" />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              marginLeft: 22,
            }}
            className={styles.filter1}
          >
            <div
              className={`${styles["flex"]} ${styles['title_select']}`}

            >
              <span className={styles.text_title}>{select == 0 ? 'Tuần' : 'Tháng'} 1 - 2023</span>
              <CalendarOutlined
                style={{ fontSize: 20, color: colors._color_blue }}
              />
            </div>
            {/* hiện tháng */}
            <div
              className={styles.show_select_time}
              style={{ width: "100%", left: 0, zIndex: 5 }}
            >
              <SelectWeekMonth select={select} />
            </div>
          </div>
        </div>
        <div className={styles.flex}>
          <div
            style={{ position: "relative", zIndex: 4 }}
            className={styles.filter2}
          >
            <div
              className={`${styles["flex"]} ${styles["title_select"]}`}
              style={{
                margin: sizes?.width >= 1023 ? "0 22px" : "20px 0",
                position: "relative",
                width: sizes?.width >= 1023 ? 180 : 170,
              }}
            >
              <span className={styles.text_title}>{select == 0 ? 'Theo Tuần' : 'Theo Tháng'}</span>
              <DownOutlined
                style={{ fontSize: 16, color: colors._color_blue }}
              />
            </div>
            <div className={styles.show_select_time}>
              <span
                onClick={() => callBack(0)}
                className={styles.select_title1}
                style={{ display: "block", transition: "0.2s" }}
              >
                Theo tuần
              </span>
              <span
                onClick={() => callBack(1)}
                className={styles.select_title2}
                style={{ display: "block" }}
              >
                Theo tháng
              </span>
            </div>
          </div>
          <div
            style={{ position: "relative", zIndex: 4 }}
            className={styles.filter3}
          >
            <div
              className={`${styles["flex"]} ${styles["title_select"]}`}
              style={{
                margin: "0 22px",
                position: "relative",
                width: sizes?.width >= 1023 ? 180 : 150,
              }}
            >
              <span className={styles.text_title}>Chấm công</span>
              <DownOutlined
                style={{ fontSize: 16, color: colors._color_blue }}
              />
            </div>
            <div className={styles.show_select_timekeeping}>
              <span
                className={styles.select_title1}
                style={{ display: "block", transition: "0.2s" }}
              >
                Ngày công
              </span>
              <span
                className={styles.select_title2}
                style={{ display: "block" }}
              >
                Chấm công
              </span>
              <span
                className={styles.select_title2}
                style={{ display: "block" }}
              >
                Giờ công
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={`${styles["flex"]} ${styles["title_create"]}`}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: colors._color_white,
          }}
          onClick={() => setState({ modalCreateShifts: true })}
        >
          Tạo ca làm
        </span>

        <span
          style={{
            borderLeft: "1px solid #fff",
            height: "100%",
          }}
        ></span>
        <div style={{ position: "relative" }} className={styles.show_modal}>
          <CaretDownOutlined
            style={{
              fontSize: 18,
              color: colors._color_white,
            }}
          />
          <div className={styles.mockup_create}>
            <div>
              <span
                style={{ display: "block" }}
                onClick={() => navigate("/shift-list")}
              >
                Danh sách ca
              </span>
              <span
                style={{ display: "block" }}
                onClick={() => {
                  setState({ modalCreateShifts: true });
                }}
              >
                Tạo ca làm
              </span>
            </div>
          </div>
        </div>
      </div>
      {
        state.modalCreateShifts == true &&

        <ModaAddShifts
          visible={state.modalCreateShifts}
          dataTime={dataTime}
          status={false}
          btnAccept={() => setState({ modalCreateShifts: false })}
          btnCancel={() => setState({ modalCreateShifts: false })}
        />
      }
    </div>
  );
};

export default Filter;
