import React, {useState} from "react";
import "./ChatInput.scss";
import {Button} from 'antd'
import { SmileOutlined } from "@ant-design/icons";

const ChatInput = props => {
  const [value,setValue] = useState("");
  return (
    <div class="c-form">
      <Button shape="circle" icon={<SmileOutlined/>} size="large"/>
      
      <input
        onChange={e => setValue(e.target.value)}
        class="c-form__input"
        placeholder="Введите текст"
        type="text"
        required
      />
    </div>
  );
};

export default ChatInput;
