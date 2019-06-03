import React, { Component } from 'react';
import './login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Letter from '../../component/XD/Letter.svg';
import Lock from '../../component/XD/Lock.svg';
import Keed from '../../component/XD/Keed.svg';
import Line1 from '../../component/XD/Line1.svg';
import HeadLogo from '../../component/XD/HeadLogo.svg';

import { Link } from 'react-router-dom';
import Nav from '../../component/Nav';

export class index extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form">
        <img src={HeadLogo} className="headlogo" />
        <br />
        <img src={Keed} className="keed" />
        <br />
        <br />

        <Form>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ],
            })(
              <Input
                prefix={<img src={Letter} className="iconss" />}
                type="user"
                name="username"
                placeholder="ชื่อบัญชีของคุณ"
              />
            )}
            <p />
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ],
            })(
              <Input
                prefix={<img src={Lock} className="iconss" />}
                type="password"
                name="password"
                placeholder="รหัสผ่านของคุณ"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className="checkbox-po"> จำรหัสผ่านไว้ </Checkbox>)}
            <a className="login-form-forgot" href="">
              ลืมรหัสผ่าน
            </a>
            <Button htmlType="submit" className="login-form-button">
              เข้าสู่ระบบ
            </Button>
            <br />
            <br />

            <a href="">
              <img className="line" src={Line1} />
              <Link to="/register">สร้างบัญชีของคุณ</Link>
            </a>
            <img className="line" src={Line1} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = Form.create({
  name: 'normal_login',
})(index);

export default Login;
