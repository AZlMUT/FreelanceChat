import React from "react";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
  <div className="dialogs">
    <div>
    {items.length ? (
      items.map((item) => (
        <DialogItem
          key={item._id}
          isMe={item.author._id === userId}
          userId={userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ничего не найдено"
      />
    )}
    </div>
  </div>
);

export default Dialogs;
