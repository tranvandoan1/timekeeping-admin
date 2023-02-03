import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import styles from "./../../../assets/css/modal/modalRemoveRefuseAccept.module.css";
import ic_exclamation from "./../../../assets/images/ic_exclamation.png";
import ic_question from "./../../../assets/images/ic_question.png";

interface Props {
  title?: string;
  btnCancel: () => void;
  status?: boolean;
  btnAccept: (value?: string) => void;
  visible?: boolean;
}

const ModalRemoveRefuseAccept = ({
  title,
  btnAccept,
  btnCancel,
  visible,
  status,
}: Props) => {
  const [value, setValue] = useState<string>("");

  return (
    <Modal
      centered
      open={visible}
      onCancel={() => btnCancel()}
      footer={null}
      width={title != "remove" ? 594 : 433}
    >
      {title == "remove" && (
        <>
          <h1 className={styles.title_text}>Xoá ca</h1>

          <div className={styles.view_flex_item_center}>
            <img src={ic_exclamation} alt="" className={styles.icon} />
            <span className={styles.text_span}>
              Bạn có chắc muốn xoá{" "}
              <span style={{ color: "#2D9CDB" }}>Ca hành chính</span> không?
            </span>
          </div>
          <div className={styles.view_button}>
            <Button
              className={styles.button_cancel}
              onClick={() => {
                btnCancel();
              }}
            >
              Không
            </Button>
            <Button
              className={styles.button_accept}
              style={{ color: "#ffffff", backgroundColor: "#2d9cdb" }}
              onClick={() => {
                btnAccept();
              }}
            >
              Có
            </Button>
          </div>
        </>
      )}
      {title != "remove" && (
        <>
          <div className={styles.view_flex_item_center}>
            <img src={ic_question} alt="" className={styles.icon} />
            <span className={styles.title_text}>{title}</span>
          </div>
          <div className={styles.view_textarea}>
            <span className={styles.text_span}>Ghi chú:</span>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoSize={{ minRows: 5, maxRows: 8 }}
              className={styles.textarea}
              placeholder="Nội dung..."
            />
          </div>
          <div className={styles.view_button}>
            <Button
              className={styles.button_cancel}
              style={{ color: "#2D9CDB", border: "1px solid #2D9CDB" }}
              onClick={() => {
                btnCancel();
              }}
            >
              Huỷ
            </Button>
            <Button
              className={styles.button_accept}
              style={{ color: "#ffffff", backgroundColor: "#2d9cdb" }}
              onClick={() => {
                btnAccept(value);
              }}
            >
              {status == true ? " Chấp thuận" : "Từ chối"}
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalRemoveRefuseAccept;
