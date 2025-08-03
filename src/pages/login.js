import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Col, Row, Radio } from "antd";
import "../styles/login.css";
import context from "../context";
import { Link } from "react-router-dom";

function Login({ mode = "login" }) {
  const [form] = Form.useForm();
  const [formMode, setFormMode] = useState(mode); // dùng props làm mode ban đầu

  // Nếu props `mode` thay đổi (do navigate giữa /login và /register), cập nhật lại state
  useEffect(() => {
    setFormMode(mode);
    form.resetFields(); // reset fields mỗi khi đổi mode
  }, [mode, form]);

  const onModeChange = (e) => {
    setFormMode(e.target.value);
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="rowMainContainer">
      <video
    autoPlay
    muted
    loop
    className="videoBackground"
    src={context.contextVideo.videoBackground}
  ></video>
      <Col span={12}>
        <div className="imgContainer">
          <img
            className="imgLogin"
            src={context.contextImg.Login}
            alt="Login"
          />
        </div>
      </Col>
      <Col span={12} >
      <div className="loginFormContainer">

      
        <div className="titleContainer">Chào mừng bạn đến với TransCult!</div>
        <Form
          name="authForm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item colon={false}>
            <Radio.Group value={formMode} onChange={onModeChange}>
              <Radio.Button value="login">Đăng nhập</Radio.Button>
              <Radio.Button value="register">Đăng ký</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <div className="extraLabel">
            {formMode === "login"
              ? "Hãy nhập đầy đủ thông tin bên dưới để đăng nhập vào tài khoản của bạn!"
              : "Vui lòng điền thông tin để tạo tài khoản mới!"}
          </div>

          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập hoặc nhập sai tên đăng nhập!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập hoặc nhập sai mật khẩu!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {formMode === "register" && (
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input />
            </Form.Item>
          )}
          {formMode === "login" && (
            <div className="CheckBoxContainer">
              <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              {formMode === "login" && (
                <Link className="forgotPasswordLink" to="/forgotpassword">
                  Quên mật khẩu
                </Link>
              )}
            </div>
          )}
          <div className="submitContainer">
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                {formMode === "login" ? "Đăng nhập" : "Đăng ký"}
              </Button>
            </Form.Item>
          </div>
        </Form></div>
      </Col>
    </Row>
  );
}

export default Login;
