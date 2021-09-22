import React from 'react'
import { Row, Col } from "antd";
import UserInfo from './UserInfo';
import RoomList from './RoomList';

function Siderbar(props) {
  return (
    <div>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </div>
  )
}

export default Siderbar

