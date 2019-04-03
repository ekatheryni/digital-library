import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Button, AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  
  
  class BookAdd extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
     
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '+38',
      })(
        <Select style={{ width: 70 }}>
          <Option value="38">+38</Option>
        </Select>
      );
  
      return (
        <div className='registerform'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                First name&nbsp;
                <Tooltip title="Please input your name">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                Last name&nbsp;
                <Tooltip title="Please input your surname">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('surname', {
              rules: [{ required: true, message: 'Please input your surname!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }
  
  const BookAdd = Form.create({ name: 'bookadd' })(BookAdd);
  
  export default BookAdd