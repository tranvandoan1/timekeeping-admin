import { Button, Modal } from "antd";
import styles from "./../../../assets/css/modal/modalReview.module.css";
import img_avatar from "./../../../assets/images/img_avatar.png";
import ModalRemoveRefuseAccept from "./ModalRemoveRefuseAccept";
import { useState } from 'react';
interface Props {
  btnCancel: () => void;
  btnAccept: (value?: string) => void;
  visible: boolean;
  status?: boolean;
}

const ModalReview: React.FC<Props> = ({
  visible,
  btnAccept,
  btnCancel,
  status,
}) => {
  const [accept, setAccept] = useState<boolean>(false)
  const [reject, setReject] = useState<boolean>(false)
  return (
    <Modal centered open={visible} onCancel={() => btnCancel()} footer={null}>
      <div style={{ display: "flex" }}>
        {status == true || status == false ? (
          <>
            <Button
              className={styles.button_cancel}
              onClick={() => btnCancel()}
            >
              Xoá
            </Button>
            {status == true && (
              <Button
                className={styles.button_accept}
                onClick={() => btnAccept()}
              >
                Xuất PDF
              </Button>
            )}
          </>
        ) : (
          <>
            <Button
              className={styles.button_cancel}
              onClick={() => setReject(true)}
            >
              Từ chối
            </Button>

            <Button
              className={styles.button_accept}
              onClick={() => setAccept(true)}
            >
              Chấp thuận
            </Button>
          </>
        )}
      </div>
      <div className={styles.line} />
      <div>
        <h1 className={styles.title}>Thông tin yêu cầu</h1>
        <div className={styles.information}>
          <div
            className={styles.view_between}
            style={{ padding: "16px 16px 0 16px" }}
          >
            <div>
              <span className={styles.text_span}>Người yêu cầu:</span>
              <p style={{ color: "#2D9CDB" }} className={styles.text_span}>
                Nguyễn Đức Kỷ
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Ngày tạo:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                10/01/2023 15:20
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Ca làm:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                Ca hành chính
              </p>
            </div>
          </div>
          <div
            className={styles.view_between}
            style={{ padding: "0px 16px 8px 16px" }}
          >
            <div>
              <span className={styles.text_span}>Loại nghỉ phép:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                Nguyễn Đức Kỷ
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Người tạo:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                kynd
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Số ngày nghỉ:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                1
              </p>
            </div>
          </div>
        </div>
        <div className={styles.information}>
          <div
            className={styles.view_between}
            style={{ padding: "16px 16px 0 16px", marginTop: 10 }}
          >
            <div>
              <span className={styles.text_span}>Ngày bắt đầu:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                10/01/2023 00:00
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Ngày kết thúc:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                10/01/2023 23:59
              </p>
            </div>
            <div>
              <span className={styles.text_span}>Số điện thoại:</span>
              <p style={{ fontWeight: "500" }} className={styles.text_span}>
                09281212482
              </p>
            </div>
          </div>
          <div style={{ padding: "0px 16px 16px 16px" }}>
            <span className={styles.text_span}>Nội dung trao đổi:</span>
            <p style={{ fontWeight: "500" }} className={styles.text_span}>
              Hãy cho tôi xin nghỉ ngày hôm nay 3{" "}
            </p>
          </div>
          <div style={{ padding: "0px 16px 8px 16px" }}>
            <span className={styles.text_span}>Lý do:</span>
            <p className={styles.text_span}>
              Hôm qua mới đá vài bát tiết canh nên đau bụng
            </p>
          </div>
        </div>
        {(status == true || status == false) && (
          <div>
            <h1
              style={{ marginTop: 20, fontSize: 18 }}
              className={styles.title}
            >
              Người duyệt
            </h1>
            <div
              style={{
                display: "flex",
              }}
            >
              <div className={styles.view_center}>
                <img src={img_avatar} alt="" />
                <span
                  style={
                    status && status == true
                      ? {
                        color: "#2D9CDB",
                        fontSize: 20,
                        lineHeight: "26px",
                        marginLeft: 10,
                      }
                      : {
                        color: "#FF0E39",
                        fontSize: 20,
                        lineHeight: "26px",
                        marginLeft: 10,
                      }
                  }
                >
                  kynd
                </span>
              </div>
              <div className={styles.View_center_box}>
                {status && status == true ? (
                  <div className={styles.view_text_box_browser}>
                    <span className={styles.text_view_box_browser}>
                      ĐÃ DUYỆT
                    </span>
                  </div>
                ) : (
                  <div className={styles.view_text_box}>
                    <span className={styles.text_view_box}>TỪ CHỐI</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <ModalRemoveRefuseAccept
        title={
          reject == true ? "Bạn muốn Từ Chối yêu cầu này ?" : "Bạn muốn Chấp Thuận yêu cầu này ?"
        }
        visible={reject || accept}
        btnCancel={() => reject == true ? setReject(false) : setAccept(false)}
        btnAccept={() => reject == true ? setReject(false) : setAccept(false)}
        status={accept}

      />
    </Modal>
  );
};

export default ModalReview;
