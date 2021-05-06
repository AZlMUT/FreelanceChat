import React from "react";
import "./ChatInput.scss";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const ChatInput = () => {
  return (
    <div class="c-form__input">
      <input
            class="c-form__input"
            placeholder="Введите текст"
            type="text"
            required
          />
    </div>
  );
};

export default ChatInput;
