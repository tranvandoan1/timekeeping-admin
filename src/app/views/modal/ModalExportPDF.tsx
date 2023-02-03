import { Button, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./../../../assets/css/modal/modalExportPDF.module.css";
interface DataType {
  key: string;
  name: string;
  borrow: number;
  repayment: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "nội dung",
    dataIndex: "name",
  },
  {
    title: "Họ và tên",
    dataIndex: "borrow",
  },
  {
    title: "Ký & ghi ngày tháng năm",
    dataIndex: "repayment",
  },
];
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    borrow: 10,
    repayment: 33,
  },
  {
    key: "2",
    name: "Jim Green",
    borrow: 100,
    repayment: 0,
  },
];

interface Props{
  btnCancel: () => void;
  btnAccept: (value: string) => void;
  visible: boolean;
}

const ModalExportPDF = ({visible,btnAccept,btnCancel}:Props) => {
  const ref = useRef<any>(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "pdf",
    onAfterPrint: () => {
      alert("Print success");
    },
  });
  return (
    <Modal open={visible} footer={null} width={757} centered>
      <div className={styles.wrapperDiv}>
        <h1 className={styles.text_title}>Xuất PDF</h1>
        <div className={styles.line} />
        <div  ref={ref} className={styles.div_document}>
          <div className={styles.div_view_end}>
            <p className={styles.text_p}>Ngày 10 tháng 01 năm 2023</p>
          </div>
          <h2 className={styles.text_title_h2}>ĐƠN XIN NGHỈ PHÉP</h2>
          <div className={styles.div_main}>
            <div style={{ display: "flex" }}>
              <span className={styles.text_underlined}>Kính gửi: </span>
              <span className={styles.text_p} style={{ marginLeft: 5 }}>
                Ban giám độc công ty
              </span>
            </div>
            <p className={styles.text_p}>Tôi tên Nguyễn Đức Kỷ</p>
            <p className={styles.text_p}>Chức vụ: Nhân viên quèn</p>
            <p className={styles.text_p}>Phòng ban: CNTT</p>
            <p className={styles.text_p}>
              Nay tôi làm đơn xin được nghỉ phép : 1 ngày
            </p>
            <div style={{ paddingLeft: 28, paddingRight: 28 }}>
              <p className={styles.text_p}>Từ: 00:00 10/01/2023</p>
              <p className={styles.text_p}>Từ: 23:59 10/01/2023</p>
              <p className={styles.text_p}>Lý do:</p>
              <p className={styles.text_p}>
                Tôi mong BGĐ chấp thuận, tôi xin cam đoan sẽ bàn giao công việc
                đầy đủ lại cho đồng nghiệp để không làm ảnh hưởng đến cty.
              </p>
              <p className={styles.text_p}>Tôi xin cảm ơn!</p>
            </div>
            <p className={styles.text_p}>*Phần xác nhận:</p>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              className={styles.table_text}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: 20 }}>
          <Button className={styles.button_cancel} onClick={() => {}}>
            Xoá
          </Button>

          <Button
            className={styles.button_accept}
            onClick={() => handlePrint()}
          >
            Xuất PDF
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default ModalExportPDF;
