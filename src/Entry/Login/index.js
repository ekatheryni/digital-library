import React from 'react'
import "antd/dist/antd.css"
import {Link} from 'react-router-dom'
import {Form, Select, Input, Button} from 'antd'
import './style.scss'


const { Option } = Select;

class Login extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
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
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="Password"
            >
              {getFieldDecorator('pass', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input />
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