import "./ChatWindow.scss"
import { Avatar, Button, Tooltip, Input, Breadcrumb, Form } from 'antd'
import React, { useEffect, useContext, useMemo } from 'react'
import { UserAddOutlined, SendOutlined } from '@ant-design/icons';
import Message from '../Message/Message';
import { AppContext } from "../../../Contexts/AppProviderContext";

export default function ChatWindow() {
  const { sellectedRoom, usersRoom } = useContext(AppContext);
  const { setIsInviteUsersVisible } = useContext(AppContext);

  const handleInviteUser = () => {

    setIsInviteUsersVisible(true);
  }
  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  return (
    <div>
    {
      sellectedRoom
      ?
      <div>
        <header>
          <div className="room-infor">
            <p>
              { sellectedRoom && sellectedRoom.name }
              <span>{ sellectedRoom && sellectedRoom.description }</span>
            </p>
          </div>
          <div className="room-users">
            <Button icon={<UserAddOutlined />} onClick={handleInviteUser}>Add User</Button>
            <Avatar.Group maxCount={2}>
              {
                usersRoom.map(user => 
                  <Tooltip title={ user.displayName } key={ user.uid }>
                    <Avatar src={ user.photoURL }>A</Avatar>
                  </Tooltip>
                )
              }
            </Avatar.Group>
          </div>
        </header>

        <div className="message">
          <div className="message-list">
            <Message name="name" avatarUrl="https://lh3.googleusercontent.com/a-/AOh14GhlyLWplS59zVxnFiyMMBXucr_U4ofIfwS7FPTd=s96-c" createdAt="12-03-1999" message="king born" />
            <Message name="name" avatarUrl="https://lh3.googleusercontent.com/a-/AOh14GhlyLWplS59zVxnFiyMMBXucr_U4ofIfwS7FPTd=s96-c" createdAt="12-03-1999" message="king born" />
            <Message name="name" avatarUrl="https://lh3.googleusercontent.com/a-/AOh14GhlyLWplS59zVxnFiyMMBXucr_U4ofIfwS7FPTd=s96-c" createdAt="12-03-1999" message="king born" />
            <Message name="name" avatarUrl="https://lh3.googleusercontent.com/a-/AOh14GhlyLWplS59zVxnFiyMMBXucr_U4ofIfwS7FPTd=s96-c" createdAt="12-03-1999" message="king born" />
          </div>
          <div>
            <Form className="message-input">
              <Form.Item style={{width: "calc(75vw - 85px)"}}>
                <Input placeholder="Type your message . . ." autoComplete="off"/>
              </Form.Item>
              <Button type="send" icon={<SendOutlined />}>Send</Button>
            </Form>
          </div>
        </div>
      </div>
      :
      <Breadcrumb> Choose Room Chat </Breadcrumb>
    }
    </div>
  )
}
