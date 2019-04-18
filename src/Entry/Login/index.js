import React from 'react'
import { Redirect } from 'react-router-dom'
import "antd/dist/antd.css"
import {Form, Select, Input, Button} from 'antd'
import './style.scss'
import axios from 'axios'


const { Option } = Select;

class Login extends React.Component{
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          axios.post(`https://library-service-naukma.herokuapp.com/api/token`, {...values})
      .then(res => {
        console.log('Res: ', res);
        console.log('Received values ', values);
        if (values.login === 'librarian1') this.props.history.push('/librarian');
        else this.props.history.push('/student');
      })
    }
      });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='userform'>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item
              label="Username"
            >
              {getFieldDecorator('login', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="Password"
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input type="password"/>
              )}
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </div>
        );
    };
}
const WrappedApp = Form.create({ name: 'coordinated' })(Login);

export default WrappedApp