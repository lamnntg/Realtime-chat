import React from 'react'
import { Row, Col } from "antd";
import UserInfo from './UserInfo/UserInfo';
import RoomList from './RoomList/RoomList';

function Siderbar(props) {
  return (
    <div style={{backgroundColor:"while", height:"100vh", borderRight:"1px solid black"}}>
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

