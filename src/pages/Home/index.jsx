import React from "react";
import { Message } from "components";
import "./Home.scss";

var ava1 = "https://source.unsplash.com/100x100/?random=1&face,portrait,family";
var ava2 = "https://source.unsplash.com/100x100/?random=2&face,portrait,family";

const Home = () => (
  <section className="home">
    <Message
      avatar={ava1}
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      date="2020-01-05 10:30:00"
      isMe={true}
    />

    <Message
      avatar={ava2}
      text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"
      date="2020-01-05 10:31:00"
      isMe={false}
      attachments={[
        {
          filename: "1",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water",
        },
        {
          filename: "2",
          url: "https://source.unsplash.com/100x100/?random=2&nature,water",
        },
        {
          filename: "3",
          url: "https://source.unsplash.com/100x100/?random=3&nature,water",
        },
      ]}
    />


    <Message
      avatar={ava2}
      isTyping={true}
      isMe={false}
    />
    <Message
      avatar={ava1}
      isMe={true}
      attachments={[
        {
          filename: "1",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water",
        }
      ]}
    />
  </section>
);

export default Home;
