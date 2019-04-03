import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import { Table, Input } from 'antd';
const Search = Input.Search;
const { Column } = Table;

const data = [{
  key: '1',
  firstname: 'Name1',
  lastname: 'Surname1',
  faculty: 'Faculty1',
  email: 'Mail1',
  phone: 'Phone1',
}, {
    key: '2',
    firstname: 'Name2',
  lastname: 'Surname2',
  faculty: 'Faculty2',
  email: 'Mail2',
  phone: 'Phone2',
}, {
    key: '3',
    firstname: 'Name3',
  lastname: 'Surname3',
  faculty: 'Faculty3',
  email: 'Mail3',
  phone: 'Phone3',
}];
class Students_lib extends React.Component{
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
<Table dataSource={data}>
    <Column
      title="First Name"
      dataIndex="firstname"
      key="firstname"
    />
    <Column
      title="Last Name"
      dataIndex="lastname"
      key="lastname"
    />
    <Column
      title="Faculty"
      dataIndex="faculty"
      key="faculty"
    />
    <Column
      title="E-mail"
      dataIndex="email"
      key="email"
    />
    <Column
      title="Phone number"
      dataIndex="phone"
      key="phone"
    />
  </Table>
    
    </div>
    )
}}
export default Students_lib