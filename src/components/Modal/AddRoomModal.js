import React, { useContext } from "react";
import { Form, Modal, Input } from "antd";
import { AppContext } from "../../Contexts/AppProviderContext";
import { AuthContext } from "../../Contexts/AuthProviderContext";

import { addRoom } from "../../firebase/services";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const [form] = Form.useForm();

  const handleOk = () => {
    // handle logic
    // add new room to firestore
    addRoom({ ...form.getFieldsValue(), members: [user.uid] });

    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên phòng" name="name">
            <Input placeholder="Nhập tên phòng" />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea placeholder="Nhập mô tả" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
