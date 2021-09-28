import { Button, Collapse, Typography } from "antd";
import React, { useContext, useMemo } from "react";
import "./RoomList.scss";
import { PlusSquareOutlined, CaretRightOutlined } from "@ant-design/icons";
import useFirestore from "../../../hooks/useFirestore";
import { RoomContext } from "../../../Contexts/AppProviderContext";
const { Panel } = Collapse;

export default function RoomList() {
  const { rooms } = useContext(RoomContext);
  
  return (
    <Collapse className="room-list" defaultActiveKey={["1"]}>
      <Panel
        className="room-list__panel"
        header="List Room"
        key="1"
        style={{ color: "white" }}
      >
        <div className="room-list__detail">
          {rooms.map((room, index) => {
            return (
              <div>
                <CaretRightOutlined />
                <Typography.Link key={ room.id.toString() }>{ room.name }</Typography.Link>
              </div>
            );
          })}
        </div>
        <Button type="text" icon={<PlusSquareOutlined />}>
          Add Room
        </Button>
      </Panel>
    </Collapse>
  );
}
