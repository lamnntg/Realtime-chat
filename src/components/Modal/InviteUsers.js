import React, { useContext, useState } from "react";
import { Avatar, Modal, Tooltip, Select } from "antd";
import { AppContext } from "../../Contexts/AppProviderContext";
import { updateRoom, getRoom } from "../../firebase/services";
import { debounce } from "lodash";
const { Option } = Select;

const DebounceSelect = ({ fetchOption, debounceTimeout = 300, ...props}) => {

}

export default function InviteUsers() {
  const [ inviteUserId, setInviteUserId ] = useState('');

  const { isInviteUsersVisible, setIsInviteUsersVisible, sellectedRoomId } = useContext(AppContext);
  const { users } = useContext(AppContext);
  
  function onChange(value) {
    setInviteUserId(value);
    console.log(`selected ${value}`);
  }
  
  // function onBlur() {
  //   console.log('blur');
  // }
  
  // function onFocus() {
  //   console.log('focus');
  // }
  
  // function onSearch(val) {
  //   console.log('search:', val);
  // }
  
  const handleOK = async () => {
    await updateRoom(inviteUserId, sellectedRoomId);

    setInviteUserId('');
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
            style={{ width: 300 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
        >
          {
            users.map(user =>
              <Option key={user.uid} value={user.uid}>
                <Tooltip title={ user.displayName } key={ user.uid } >
                    <Avatar size="small" src={ user.photoURL } style={{ marginRight: "10px" }}>A</Avatar>
                </Tooltip>
                { user.displayName }
              </Option>
            )
          }
        </Select>
      </Modal>
    </div>
  );
}
