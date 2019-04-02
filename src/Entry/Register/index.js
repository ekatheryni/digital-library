import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Button, AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  const residences = [
    {
    value: '1',
    label: '1',
    children: [
      {value: 'FI',
      label: 'FI',
      children: [{
        value: 'AM',
        label: 'AM',
        },{
        value: 'PI',
        label: 'PI',
        }]
        },
    {
        value: 'FEN',
        label: 'FEN',
        children: [{
          value: 'Managment',
          label: 'Managment',
        },{
          value: 'Finance',
          label: 'Finance',
        }]
    }]},
    {
    value: '2',
    label: '2',
    children: [{
      value: 'FI',
      label: 'FI',
      children: [{
        value: 'AM',
        label: 'AM',
      },{
        value: 'PI',
        label: 'PI',
    }],
    },{
        value: 'FEN',
        label: 'FEN',
        children: [{
          value: 'Managment',
          label: 'Managment',
        },{
          value: 'Finance',
          label: 'Finance',}
      ], 
    }]},]; 
  
  class Register extends React.Component {
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
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
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
      const { autoCompleteResult } = this.state;
  
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
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
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
                Full name&nbsp;
                <Tooltip title="Please input your name and surname">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Course/Faculty/Specialization"
          >
            {getFieldDecorator('residence', {
              initialValue: ['course', 'faculty', 'specialization'],
              rules: [{ type: 'array', required: true, message: 'Please select your course/faculty/specialization!' }],
            })(
              <Cascader options={residences} />
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
  
  const WrappedRegister = Form.create({ name: 'register' })(Register);
  
  export default WrappedRegister