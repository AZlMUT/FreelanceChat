import React from "react";
import { Message, Sidebar, ChatInput, MyData } from "components";
import { CheckCircleTwoTone } from '@ant-design/icons';
import "./Home.scss";
import "../../styles/layouts/_chat.scss"

const Home = (
  {
    selectedUser
  }
) => (
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
          <div>❤️Моё солнышко❤️</div>
          <p><CheckCircleTwoTone twoToneColor="#7bbfff"/>В сети</p>
          <hr/>
      </div>

      <div className="contentChat">
        <section>
          {MyData.msg.map((propers) => (
            <Message {...propers} />
          ))}
        </section>
      </div>
      <div className="home--bottom">
        <ChatInput />
      </div>
    </div>
  </div>
);
export default Home;
