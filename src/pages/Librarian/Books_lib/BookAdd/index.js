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
      
      return (
        <div className='bookadd'>
        
        </div>
      );
    }
  }
  
  const WrappedApp = Form.create({ name: 'bookadd' })(BookAdd);
  
  export default WrappedApp