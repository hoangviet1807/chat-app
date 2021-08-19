import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

export default function ChatRoom() {
  return (
    <div>
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <ChatWindow />
        </Col>
      </Row>
    </div>
  );
}
