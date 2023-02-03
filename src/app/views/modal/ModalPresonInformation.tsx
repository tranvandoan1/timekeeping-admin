import React, { useEffect, useState } from "react";
import { Modal, Row, Col } from "antd";
import avatar from "./../../../assets/images/avatar.png";
import avatars from "./../../../assets/images/avatars.png";
import calendarTime from "./../../../assets/images/calendarTime.png";
import time from "./../../../assets/images/time.png";
import moveTime from "./../../../assets/images/moveTime.png";
import share_outline from "./../../../assets/images/share_outline.png";
import user_plus from "./../../../assets/images/user_plus.png";
import check from "./../../../assets/images/check.png";
import clock from "./../../../assets/images/clock.png";
import style from "./../../../assets/css/modal/ModalPresonInformation.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiHorizontalFlip } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CloseCircleOutlined, UserAddOutlined } from "@ant-design/icons";
import { Size } from "./../component/size";
import ModalNotificationFixTime from "./ModalNotificationFixTime";
interface Props {
  title?: string;
  btnCancel: () => void;
  btnAccept: () => void;
  visible?: boolean;
  data?: []
}

const ModalPresonInformation: React.FC<Props> = React.memo(
  ({
    visible,
    title,
    btnCancel,
    btnAccept,
    data,
  }) => {
    console.log(window.innerWidth);
    const sizes = Size();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [modalEditTime, setModalEditTime] = useState<boolean>(false);

    return (
      <>
        <Modal
          centered
          open={visible}
          onCancel={() => btnCancel()}
          width={1080}
          footer={null}
        >
          <Row>
            <Col
              xs={24}
              sm={8}
              md={6}
              lg={4}
              xl={6}
              className={sizes?.width >= 1023 ? style.border_right : ""}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={style.avatar_center}>
                  <img src={avatar} className={style.img_avatar} />
                </div>
                <div style={{ width: '100%' }}>
                  <div
                    style={
                      sizes?.width >= 1023
                        ? {}
                        : {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection:
                            sizes?.width >= 1023 ? "column" : "row",
                        }
                    }
                  >
                    <div className={style.center_item}>
                      <div
                        style={{
                          background: "#EDF2F7",
                          padding: 10,
                          borderRadius: 100,
                        }}
                      >
                        <FaCalendarAlt
                          style={{ color: "#2D9CDB", fontSize: 23 }}
                        />
                      </div>
                      <div
                        style={{
                          paddingLeft: 17,
                        }}
                      >
                        <span className={style.text_span_img}>Ca hành chính</span>

                        <p className={style.text_p_img}>Tên ca làm</p>
                      </div>
                    </div>
                    <div
                      className={style.center_item}
                      style={{ marginTop: sizes?.width >= 1023 ? 20 : 0 }}
                    >
                      <div
                        style={{
                          background: "#EDF2F7",
                          padding: 10,
                          borderRadius: 100,
                        }}
                      >
                        <TfiAlarmClock
                          style={{ color: "#2D9CDB", fontSize: 25 }}
                        />
                      </div>

                      <div
                        style={{
                          paddingLeft: 17,
                        }}
                      >
                        <span className={style.text_span_img}>08:00 - 18:00</span>
                        <p className={style.text_p_img}>Giờ làm việc</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      sizes?.width >= 1023
                        ? { marginTop: 20 }
                        : {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection:
                            sizes?.width >= 1023 ? "column" : "row",
                          marginTop: 20,
                        }
                    }
                  >
                    <div className={style.center_item}>
                      <div
                        style={{
                          background: "#EDF2F7",
                          padding: 10,
                          borderRadius: 100,
                        }}
                      >
                        <GiHorizontalFlip
                          style={{ color: "#2D9CDB", fontSize: 25 }}
                        />
                      </div>

                      <div
                        style={{
                          paddingLeft: 17,
                        }}
                      >
                        <span className={style.text_span_img}>9.5 tiếng</span>

                        <p className={style.text_p_img}>Độ dài ca</p>
                      </div>
                    </div>
                    <div
                      className={style.center_item}
                      style={{ marginTop: sizes?.width >= 1023 ? 20 : 0 }}
                    >
                      <div
                        style={{
                          background: "#FFE4D9",
                          padding: 10,
                          borderRadius: 100,
                        }}
                      >
                        <AiOutlineShareAlt
                          style={{ color: "#FF9466", fontSize: 25 }}
                        />
                      </div>
                      <div
                        style={{
                          paddingLeft: 17,
                        }}
                      >
                        <span className={style.text_span_img}>Vnshinejsc</span>

                        <p className={style.text_p_img}>Tên ca làm</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.center_item} style={{ marginTop: 20 }}>
                    <div
                      style={{
                        background: "#FFE4D9",
                        padding: 10,
                        borderRadius: 100,
                      }}
                    >
                      <UserAddOutlined
                        style={{ color: "#FF9466", fontSize: 25 }}
                      />
                    </div>
                    <div
                      style={{
                        paddingLeft: 17,
                      }}
                    >
                      <span className={style.text_span_img}>1</span>

                      <p className={style.text_p_img}>Số công</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={8} md={6} lg={4} xl={18}>
              <div
                style={{
                  marginLeft: sizes?.width >= 1023 ? 31 : 0,
                }}
              >
                {sizes?.width < 1023 && <hr />}
                <h1
                  className={style.title}
                  style={{ marginTop: sizes?.width >= 1023 ? 0 : 40 }}
                >
                  Nguyễn Đức Kỷ - 02/01/2023
                </h1>
                <div>
                  <p className={style.text_p_bold}>VÀO/RA</p>
                  <div className={style.center_item_view}>
                    <div style={{ display: "flex" }}>
                      <div
                        className={style.center_item}
                        style={{ marginRight: sizes?.width >= 1023 ? 50 : 20 }}
                      >
                        <img
                          src={check}
                          alt=""
                          className={style.icon_check}
                          style={{ cursor: "pointer" }}
                          onClick={() => setVisibleModal(true)}
                        />
                        <span className={style.view_text_span}>08:30</span>
                        <div
                          className={style.background_time}
                          style={{ width: 20 }}
                        >
                          <img src={clock} className={style.img_icon} />
                        </div>
                      </div>
                      <div className={style.center_item}>
                        <img
                          src={check}
                          alt=""
                          className={style.icon_check}
                          style={{ cursor: "pointer" }}
                          onClick={() => setVisibleModal(true)}
                        />
                        <span className={style.view_text_span}>18:30</span>
                        <div
                          className={style.background_time}
                          style={{ width: 20 }}
                        >
                          <img src={clock} className={style.img_icon} />
                        </div>
                      </div>
                    </div>

                    <span
                      className={style.span_text}
                      onClick={() => setModalEditTime(true)}
                    >
                      Sửa thời gian
                    </span>
                  </div>
                </div>
                <h4 className={style.title_big}>LỊCH SỬ</h4>
                <div style={{ overflowX: "scroll" }}>
                  <div style={{ width: sizes?.width >= 1023 ? "100%" : "100vh" }}>
                    <table>
                      <thead className={style.table_thead}>
                        <tr className={style.font_size_thead}>
                          <th className={style.table_tr_stt}>STT</th>
                          <th style={{ width: "10%" }}>Thời giời</th>
                          <th style={{ width: "20%" }}>Địa chỉ</th>
                          <th style={{ width: "30%" }}>Ghi chú</th>
                          <th style={{ width: "25%" }}>Người thực hiện</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={style.border_botton_table}>
                          <td style={{ textAlign: "center" }}>1</td>
                          <td>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span style={{ marginRight: 8 }}>08:30</span>
                              <img
                                src={check}
                                className={style.icon_check_table}
                              />
                            </div>
                          </td>
                          <td>112 mễ trì hạ - HN</td>
                          <td>Hôm nay đi làm đúng giờ, không muộn nữa.</td>
                          <td>Nguyễn Đức Kỷ</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "0.5px solid #A8A8A8",
                          }}
                        >
                          <td
                            style={{
                              textAlign: "center",
                            }}
                          >
                            2
                          </td>
                          <td>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span
                                style={{
                                  marginRight: 8,
                                }}
                              >
                                18:00
                              </span>
                              <img
                                src={check}
                                style={{
                                  backgroundColor: "#1ECC78",
                                  borderRadius: "50%",
                                  width: 14,
                                  height: 14,
                                  padding: "3px",
                                }}
                              />
                            </div>
                          </td>
                          <td>112 mễ trì hạ - HN</td>
                          <td>Hôm nay đi làm đúng giờ, không muộn nữa</td>
                          <td>Nguyễn Đức Kỷ</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "0.5px solid #A8A8A8",
                          }}
                        >
                          <td
                            style={{
                              textAlign: "center",
                            }}
                          >
                            3
                          </td>
                          <td>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span
                                style={{
                                  marginRight: 8,
                                }}
                              >
                                18:00
                              </span>
                              <CloseCircleOutlined
                                style={{
                                  color: "#FF0E39",
                                  background: "rgba(255, 14, 57, 0.33)",
                                  borderRadius: 100,
                                }}
                              />
                            </div>
                          </td>
                          <td>112 mễ trì hạ - HN</td>
                          <td>Hôm nay đi làm đúng giờ, không muộn nữa</td>
                          <td>Nguyễn Đức Kỷ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <img
                    src={avatars}
                    alt=""
                    style={{
                      height: 107,
                      marginTop: 24,
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <ModalNotificationFixTime
            title={modalEditTime == true ? "Sửa thời gian của ca" : ""}
            visible={visibleModal || modalEditTime}
            btnAccept={(e) => {
              setVisibleModal(false);
              setModalEditTime(false);
            }}
            btnCancel={() => {
              setVisibleModal(false);
              setModalEditTime(false);
            }}
          />
        </Modal>
      </>
    );
  }
)
export default ModalPresonInformation;
