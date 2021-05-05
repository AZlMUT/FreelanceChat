import React from "react";
import { Message, Dialogs, ChatInput, MyData } from "components";
import "./Home.scss";

const Home = () => (
  <div className="MyBody">
    <div>
      <Dialogs
        items={MyData.dialogs}
        userId="123"
        inputValue=""
        currentDialogId="125"
      />
    </div>

    <div className="home">
      <div className="home--header">
      
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
