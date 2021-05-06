import React from "react";
import { Messages, Sidebar, ChatInput, MyData } from "components";
import { CheckCircleTwoTone } from "@ant-design/icons";
import "./Home.scss";
import "../../styles/layouts/_chat.scss";

const Home = ({ selectedUser }) => (
  <div className="chat">
    <Sidebar
      className="chat__sidebar"
      visible={false}
      inputValue=""
      messageText=""
      selectedUserId="125"
      users={[]}
      onShow
    />

    <div className="home">
      <div className="home--header">
        <div>Антоха</div>
        <p>
          <CheckCircleTwoTone twoToneColor="#7bbfff" />В сети
        </p>
        <hr />
      </div>

      <div className="contentChat">
        <Messages
          items={MyData.msg}
          user={{_id:"123"}}
          previewImage
          setPreviewImage
          blockHeight
          isTyping={false}
          partner={{}}
        />
      </div>
      <div className="home--bottom">
        <ChatInput />
      </div>
    </div>
  </div>
);
export default Home;
