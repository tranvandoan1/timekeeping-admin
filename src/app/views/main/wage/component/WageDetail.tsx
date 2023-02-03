import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styles from "../wage.module.css";
import { Table } from "antd";
import { CgPushDown } from "react-icons/cg";
import { Size } from "./../../../component/size";

const WageDetail = () => {
    const sizes = Size();
    const navigate = useNavigate();
    const [active, setActive] = useState<number>(1);
    const columns = [
        {
            title: "STT",
            dataIndex: "name",
            key: "name",
            render: (text: any, data: any, index: any) => (
                <span
                    onClick={() => navigate("/wage/detail")}
                    className={styles["table-list_text"]}
                >
                    {index + 1}
                </span>
            ),
        },
        {
            title: "Mã nhân viên",
            dataIndex: "age",
            key: "age",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>68DCHT20080</span>
            ),
        },
        {
            title: "Họ và tên",
            dataIndex: "address",
            key: "address",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>Nguyễn Đức Kỷ</span>
            ),
        },
        {
            title: "Hình thức trả lương",
            key: "tags",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>Online</span>
            ),
        },
        {
            title: "Lương thoả thuận",
            key: "action",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>50.000.000</span>
            ),
        },
        {
            title: "Ngày công",
            key: "action",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>22</span>
            ),
        },
        {
            title: "Ngày công thực tế",
            key: "action",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>23</span>
            ),
        },
        {
            title: "Số tiền",
            key: "action",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>52.272.727</span>
            ),
        },
        {
            title: "Ngân hàng",
            key: "action",
            dataIndex: "tags",
            render: (text: any) => (
                <span className={styles["table-list_text"]}>Vietcombank</span>
            ),
        },
    ];
    const data = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ];
    return (
        <div style={{ padding: 20 }}>
            <div className={styles["wage-detatil_header"]}>
                <div className={styles.title}>
                    <HiOutlineArrowNarrowLeft
                        className={styles["icon-back"]}
                        onClick={() => navigate(-1)}
                    />
                    <h4>bảng lương 1</h4>
                </div>
                <div className={styles["button-export"]}>
                    <span className={styles["button-export_text"]}>Xuất file</span>
                    <CgPushDown className={styles["icon-export"]} />
                </div>
            </div>
            <div className={styles["title-button"]}>
                <div
                    onClick={() => setActive(1)}
                    className={`${styles["title-bl"]} ${active == 1 ? styles["title-bl-active"] : ""
                        }`}
                >
                    <p>Bảng lương</p>
                </div>
                <div
                    className={`${styles["title-ct"]} ${active == 2 ? styles["title-bl-active"] : ""
                        }`}
                    onClick={() => setActive(2)}
                >
                    <p>Chi tiết</p>
                </div>
            </div>
            {active == 1 ? (
                sizes.width < 1025 ? (
                    <Table
                        dataSource={data}
                        expandable={{
                            expandedRowRender: (record) => (
                                <div>
                                    <div className={styles["flex_no_center"]}>
                                        <h6>
                                            Hình thức trả lương : <strong>Online</strong>
                                        </h6>
                                    </div>
                                    <div className={styles["flex_no_center"]}>
                                        <h6>
                                            Lương thoả thuận : <strong>50.000.000</strong>
                                        </h6>
                                    </div>
                                    <div className={styles["flex_no_center"]}>
                                        <h6>
                                            Ngày công : <strong>22</strong>
                                        </h6>
                                    </div>

                                    {
                                        sizes?.width < 739 &&

                                        <React.Fragment>
                                            <div className={styles["flex_no_center"]}>
                                                <h6>
                                                    Ngày công thực tế : <strong>23</strong>
                                                </h6>
                                            </div>
                                            <div className={styles["flex_no_center"]}>
                                                <h6>
                                                    Số tiền : <strong>52.272.727</strong>
                                                </h6>
                                            </div>
                                            <div className={styles["flex_no_center"]}>
                                                <h6>
                                                    Ngân hàng : <strong>Vietcombank</strong>
                                                </h6>
                                            </div>
                                        </React.Fragment>
                                    }
                                </div>
                            ),
                        }}
                    >
                        <Table.Column
                            key="name"
                            title="Mã nhân viên"
                            dataIndex="name"
                            render={(name: any, data: any, index: any) => (
                                <span className={styles["table-list_text"]}>68DCHT20080</span>
                            )}
                        />
                        <Table.Column
                            key="time"
                            title="Họ và tên"
                            dataIndex="time"
                            render={(name: any, data: any, index: any) => (
                                <span className={styles["table-list_text"]}>Nguyễn Đức Kỷ</span>
                            )}
                        />
                        {sizes?.width > 739 && (
                            <React.Fragment>
                                <Table.Column
                                    key="sentDate"
                                    title="Hình thức trả lương"
                                    dataIndex="sentDate"
                                    render={(name: any, data: any, index: any) => (
                                        <span className={styles["table-list_text"]}>Online</span>
                                    )}
                                />
                                <Table.Column
                                    key="sentDate"
                                    title="Lương thoả thuận"
                                    dataIndex="sentDate"
                                    render={(name: any, data: any, index: any) => (
                                        <span className={styles["table-list_text"]}>
                                            50.000.000
                                        </span>
                                    )}
                                />
                                <Table.Column
                                    key="sentDate"
                                    title="Ngày công"
                                    dataIndex="sentDate"
                                    render={(name: any, data: any, index: any) => (
                                        <span className={styles["table-list_text"]}>22</span>
                                    )}
                                />
                                {sizes > 1025 && (
                                    <React.Fragment>

                                        <Table.Column
                                            key="sentDate"
                                            title="Ngày công thực tế"
                                            dataIndex="sentDate"
                                            render={(name: any, data: any, index: any) => (
                                                <span className={styles["table-list_text"]}>23</span>
                                            )}
                                        />
                                        <Table.Column
                                            key="sentDate"
                                            title="Số tiền"
                                            dataIndex="sentDate"
                                            render={(name: any, data: any, index: any) => (
                                                <span className={styles["table-list_text"]}>
                                                    52.272.727
                                                </span>
                                            )}
                                        />

                                        <Table.Column
                                            key="sentDate"
                                            title="Ngân hàng"
                                            dataIndex="sentDate"
                                            render={(name: any, data: any, index: any) => (
                                                <span className={styles["table-list_text"]}>
                                                    Vietcombank
                                                </span>
                                            )}
                                        />
                                    </React.Fragment>
                                )}

                            </React.Fragment>
                        )}
                    </Table>
                ) : (
                    <Table columns={columns} dataSource={data} />
                )
            ) : (
                <div className={styles["detail-bl"]}>
                    <div className={styles.flex_no_center}>
                        <div
                            style={{
                                height: 2.5,
                                width: 40,
                                background: "#2D9CDB",
                                marginRight: 10,
                            }}
                        ></div>
                        <h5>Thông tin bảng lương</h5>
                    </div>
                    <div className={styles["detail-list"]}>
                        <div>
                            <p>Tên bảng lương</p>
                            <p style={{ fontWeight: "500" }}>bảng lương 1</p>
                        </div>
                        <div>
                            <p>Phòng ban áp dụng</p>
                            <p style={{ fontWeight: "500" }}>Tất cả</p>
                        </div>
                        <div>
                            <p>Tháng</p>
                            <p style={{ fontWeight: "500" }}>01/2023</p>
                        </div>
                        <div>
                            <p>Loại thời gian tính lương</p>
                            <p style={{ fontWeight: "500" }}>Trong tháng này</p>
                        </div>
                        <div>
                            <p>Hình thức chi trả</p>
                            <p style={{ fontWeight: "500" }}>Online</p>
                        </div>
                        <div>
                            <p>Ngày tạo</p>
                            <p style={{ fontWeight: "500" }}>13/01/2023 09:26</p>
                        </div>
                        <div>
                            <p>Vị trí áp dụng</p>
                            <p style={{ fontWeight: "500" }}>Tất cả</p>
                        </div>
                        <div>
                            <p>Công ty</p>
                            <p style={{ fontWeight: "500" }}>Công ty phần mềm Vnshinejsc</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WageDetail;
