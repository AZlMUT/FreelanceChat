import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({
  blockRef,
  isLoading,
  items,
  user,
  blockHeight,
}) => {
  return (
    <div
      className="chat__dialog-messages"
      style={{ height: `calc(100% - ${blockHeight}px)` }}
    >
      <div
        ref={blockRef}
        className={classNames("messages", { "messages--loading": isLoading })}
      >
        {items.map((item) => (
          <Message
            {...item}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
