import React from 'react'
import "antd/dist/antd.css"
import axios from 'axios'
import './style.scss'
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Button, 
  } from 'antd';
  
  const { Option } = Select;
  
  const groups = [
    {
    value: 'A1',
    label: 'A1',},
    {
    value: 'A2',
    label: 'A2',
    },
    {
      value: 'A3',
      label: 'A3',
    },
    {
      value: 'A4',
      label: 'A4',
    }, 
    {
      value: 'A5',
      label: 'A5',
    },  
  ]; 
  
  class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        confirmDirty: false,
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          axios.post(`https://library-service-naukma.herokuapp.com/api/students`, {...values, GroupCode: values.GroupCode[0]})
      .then(res => {
        console.log('Received values of form: ', values);
      })
    }
      });
    }
    
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('Password')) {
        callback('Two passwords that you enter are inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
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
            label={(
              <span>
                Username&nbsp;
                <Tooltip title="Please input your username">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('Login', {
              rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label="E-mail" 
          >
            {getFieldDecorator('Email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('Password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password"/>
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
            {getFieldDecorator('FirstName', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input type="text"/>
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
            {getFieldDecorator('LastName', {
              rules: [{ required: true, message: 'Please input your surname!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label="Group"
          >
            {getFieldDecorator('GroupCode', {
              initialValue: ['group'],
              rules: [{ type: 'array', required: true, message: 'Please select your group!' }],
            })(
              <Cascader options={groups} />
            )}
          </Form.Item>
          <Form.Item
            label="Phone Number"
          >
            {getFieldDecorator('PhoneNumber', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }}/>
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
  
  const WrappedRegister = Form.create({ name: 'register' })(Register);
  
  export default WrappedRegister