import React, { Component } from "react";
import { Form, Input } from "antd";
import { Button, Block } from "components";
import { UserOutlined, LockOutlined, InfoCircleTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам необходимо зарегестрироваться</p>
        </div>
        <Block>
          {!success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your Mail!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="E-Mail"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Ваше имя"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password2"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите пароль"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  Зарегестрироваться
                </Button>
              </Form.Item>

              <Link className="auth__register-link" to="/">
                Войти в аккаунт
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
              <InfoCircleTwoTone/>
              </div>
              <h3>Подтвердите свой аккаунт</h3>
              <p>На вашу почту было отправленно письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
