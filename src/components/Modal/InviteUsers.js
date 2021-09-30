import React, { useContext } from "react";
import { Form, Modal, Input, Select } from "antd";
import { AppContext } from "../../Contexts/AppProviderContext";
import { AuthContext } from "../../Contexts/AuthProviderContext";
import { addRoom } from "../../firebase/services";
import { debounce } from "lodash";
const { Option } = Select;

const DebounceSelect = ({ fetchOption, debounceTimeout = 300, ...props}) => {

}

export default function InviteUsers() {
  const { isInviteUsersVisible, setIsInviteUsersVisible } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  
  const handleOK = () => {
    setIsInviteUsersVisible(false);
  }

  const handleCancel = () => {
    setIsInviteUsersVisible(false);
  }

  return (
    <div>
       <Modal
        title="Tạo phòng"
        visible={isInviteUsersVisible}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
        </Select>
      </Modal>
    </div>
  );
}
