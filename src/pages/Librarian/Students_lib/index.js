import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import axios from 'axios'
import { Table, Input } from 'antd';
const Search = Input.Search;
const { Column } = Table;


class Students_lib extends React.Component{
  state = {
  students: []
  }

  componentDidMount() {
    axios.get(`https://library-service-naukma.herokuapp.com/api/students`)
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
  }
render(){
    return(
        <div className='catalog'>
        <div className='search'>
        <Search
      placeholder="search for student"
      onSearch={value => console.log(value)}
      style={{ width: 500 }}
      enterButton
    />
    </div>
    <Table dataSource={this.state.students} rowKey={students => students.isbn}>
    <Column
      title="First Name"
      dataIndex="firstName"
      key="firstname"
    />
    <Column
      title="Last Name"
      dataIndex="lastName"
      key="lastname"
    />
    <Column
      title="Group"
      dataIndex="groupCode"
      key="faculty"
    />
    <Column
      title="E-mail"
      dataIndex="email"
      key="email"
    />
    <Column
      title="Phone number"
      dataIndex="phoneNumber"
      key="phone"
    />
  </Table>
    
    </div>
    )
}}
export default Students_lib