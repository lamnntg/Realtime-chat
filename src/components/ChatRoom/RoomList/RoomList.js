import { Button, Collapse, Typography } from 'antd'
import React from 'react';
import './RoomList.scss';
import { PlusSquareOutlined, CaretRightOutlined } from "@ant-design/icons"
import { useFirestore } from "./../../../hooks/useFirestore";
import { AuthContext } from "../../../Contexts/AuthProviderContext";
const { Panel } = Collapse;

export default function RoomList() {
  const { user } = useContext(AuthContext)

  const roomCondition = useMemo(() => {
    return  {
      fieldsName: "members",
      operator: 'array-contains',
      compareValue: user.uid
    }
  }, [user.uid])
  const rooms = useFirestore("rooms", roomCondition)

  return (
    <Collapse className="room-list" defaultActiveKey={['1']}>
      <Panel className="room-list__panel" header="List Room" key='1' style={{color:"white"}}>
        <div className="room-list__detail">
          <div>
            <CaretRightOutlined />
            <Typography.Link>Room 1</Typography.Link>
          </div>
          <div>
            <CaretRightOutlined />
            <Typography.Link>Room 2</Typography.Link>
          </div>
          <div>
            <CaretRightOutlined />
            <Typography.Link >Room 3</Typography.Link>
          </div>
        </div>
        <Button type="text" icon={<PlusSquareOutlined />}>Add Room</Button>
      </Panel>
    </Collapse>
  )
}
