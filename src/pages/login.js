import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Col, Row, Radio } from "antd";
import "../styles/login.css";
import context from "../context";
import { Link } from "react-router-dom";

function Login() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row className="rowMainContainer">
      <Col span={12}>
        <div className="imgContainer">
          <img className="imgLogin" src={context.contextImg.Login} alt=""></img>
        </div>
      </Col>
      <Col span={12}>
        <div className="titleContainer">Chào mừng bạn đến với TransCult!</div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}

          //   style={{ maxWidth: formLayout === "inline" ? "none" : 600}}
        >
          <Form.Item name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="horizontal">Đăng nhập</Radio.Button>
              <Radio.Button value="vertical">Đăng ký</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <div className="extraLabel">
            Hãy nhập đầy đủ thông tin bên dưới để đăng nhập vào tài khoản của
            bạn!
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
          <div className="CheckBoxContainer">
            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className="forgotPasswordLink" to="/forgotpassword">
              {" "}
              Quên mật khẩu
            </Link>
          </div>
          <div className="submitContainer">
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
