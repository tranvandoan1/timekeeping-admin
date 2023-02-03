import {
  CaretDownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { type } from "os";
import { useState } from "react";
import styles from "../timesheets.module.css";
type Props = {
  height?: number
  callBack?: (e: boolean) => void
  comfimExportWorkDay?: () => void
  active?: boolean
}
const ExportFile: React.FC<Props> = ({ height, callBack, active, comfimExportWorkDay }) => {
  const [toggerOption, setToggerOption] = useState<boolean>(false);
  return (
    <div style={{ position: "relative", zIndex: 4 }}>
      <div
        className={`${styles["flex"]} ${styles["select_option"]}`}
        style={{
          width: (toggerOption == true || active == true) ? 190 : 150,
          color: toggerOption == false ? height == undefined ? "black" : "#2D9CDB" : "#2D9CDB",
          borderColor: toggerOption == false ? height == undefined ? "black" : "#2D9CDB" : "#2D9CDB",
          transition: ".5s",
          height: height == undefined ? '' : height
        }}
        onClick={() => {
          callBack(!active)
          height == undefined && setToggerOption(!toggerOption)
        }}
      >
        <span>Xuất file</span>
        <CaretDownOutlined style={{ fontSize: 14 }} />
      </div>
      {(toggerOption == true || active == true) && (
        <div
          className={styles.option}
          style={{
            height: (toggerOption == true || active == true) ? 120 : 0,
          }}
        >
          <div
            className={`${styles["flex"]} ${styles["option1"]}`}
            onClick={() => {
              setToggerOption(false)
              comfimExportWorkDay()
            }}
          >
            <span>{height == undefined ? 'Xuất theo ngày công' : 'Tạm ứng lương'}</span>
            {
              height == undefined && <RightOutlined />}
          </div>

          <div
            className={`${styles["flex"]} ${styles["option2"]}`}
            onClick={() => setToggerOption(false)}
            style={{ margin: "12px 0" }}
          >
            <span>{height == undefined ? 'Xuất theo giờ công' : 'Tạo nghỉ phép'}</span>
            {
              height == undefined && <RightOutlined />}
          </div>

          {
            height == undefined &&
            <div
              className={`${styles["flex"]} ${styles["option3"]}`}
              onClick={() => setToggerOption(false)}
            >
              <span>Bảng đi muộn, về sớm</span>
              <RightOutlined />
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default ExportFile