import React from "react";
import { Message, Dialogs, ChatInput, MyData } from "components";
import "./Home.scss";

const ava = (id) => {
  return `https://source.unsplash.com/100x100/?random=${id}&face,portrait,family`;
}

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
      <div className="contentChat">
        <section>

          {MyData.msg.map(propers => (
            <Message
            {...propers}
            />
          ))}


        </section>
      </div>

      <div>
        <ChatInput/>
      </div>
    </div>
  </div>
);

export default Home;
