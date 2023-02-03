import styles from "./../../../assets/css/modal/modalAddWage.module.css";
import { Button, Modal, Form, Input, Select } from "antd";
interface Props {
  btnCancel: () => void;
  btnAccept: (data:any) => void;
  visible: boolean;
}
const ModalAddWage = ({ btnAccept, btnCancel, visible }: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    btnAccept(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <Modal
      centered
      open={visible}
      footer={null}
      width={992}
      onCancel={() => btnCancel()}
    >
      <div>
        <h1 className={styles.title_text}>Tạo bảng lương</h1>
        <Form
          labelCol={{
            span: 6,
          }}
          labelAlign="left"
          wrapperCol={{ flex: 1 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tên bảng lương"
            name="payrollName"
            rules={[{ required: true }]}
          >
            <Input
              type="text"
              placeholder="Tên bảng lương"
              className={styles.input}
            />
          </Form.Item>

          <Form.Item label="Tháng" name="month" rules={[{ required: true }]}>
            <Input type="text" placeholder="Tháng" className={styles.input} />
          </Form.Item>

          <Form.Item
            label="Loại thời gian tính lương"
            name="type"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Loại thời gian tính lương"
              onChange={onChange}
              onSearch={onSearch}
              // filterOption={(input, option) =>
              //   (option?.label ?? "")
              //     .toLowerCase()
              //     .includes(input.toLowerCase())
              // }
              options={[]}
            />
          </Form.Item>
          <Form.Item
            label="Phòng ban"
            name="department"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Phòng ban"
              onChange={onChange}
              onSearch={onSearch}
              // filterOption={(input, option) =>
              //   (option?.label ?? "")
              //     .toLowerCase()
              //     .includes(input.toLowerCase())
              // }
              options={[]}
            />
          </Form.Item>
          <Form.Item
            label="Vị trí áp dụng"
            name="location"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Phòng ban"
              onChange={onChange}
              onSearch={onSearch}
              // filterOption={(input, option) =>
              //   (option?.label ?? "")
              //     .toLowerCase()
              //     .includes(input.toLowerCase())
              // }
              options={[]}
            />
          </Form.Item>
          <Form.Item
            label="Hình thức chi trả"
            name="payment"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Hình thức chi trả"
              onChange={onChange}
              onSearch={onSearch}
              // filterOption={(input, option) =>
              //   (option?.label ?? "")
              //     .toLowerCase()
              //     .includes(input.toLowerCase())
              // }
              options={[]}
            />
          </Form.Item>

          <div className={styles.view_end}>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Tạo bảng lương
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddWage;
