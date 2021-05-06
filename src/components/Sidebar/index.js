import React, {useState} from "react";
import { Button, Modal, Select, Input, Form } from "antd";
import { TeamOutlined, FormOutlined } from "@ant-design/icons";
import { Dialogs, MyData } from "components";
import "./Sidebar.scss";

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
  visible,
  inputValue,
  messageText,
  selectedUserId,
  users,
}) => {
  const options = users.map((user) => (
    <Option key={user._id}>{user.fullname}</Option>
  ));
  const [value,setValue] = useState("");
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <Button shape="round" icon={<TeamOutlined />} />
          <span className="side-text">Список диалогов</span>
        </div>
        <Button shape="round" icon={<FormOutlined />} />
      </div>
      <div className="dialogs__search">
        <Input
          onChange={e => setValue(e.target.value)}
          placeholder="Поиск среди контактов"
          enterButton="Search"
          size="large"
          value=""
        />
      </div>
      <div className="chat__sidebar-dialogs">
        <Dialogs
          items={MyData.dialogs}
          userId={selectedUserId}
          inputValue=" "
          currentDialogId="125"
        />
      </div>
      <Modal
        title="Создать диалог"
        visible={visible}
        footer={[
          <Button key="back">Закрыть</Button>,
          <Button key="submit" type="primary">
            Создать
          </Button>,
        ]}
      >
        <Form className="add-dialog-form">
          <Form.Item label="Введите имя пользователя или E-Mail">
            <Select
              value={inputValue}
              notFoundContent={null}
              style={{ width: "100%" }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              placeholder="Введите имя пользователя или почту"
              showSearch
            >
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Введите текст сообщения">
              <TextArea
                autosize={{ minRows: 3, maxRows: 10 }}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
