import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import { Table, Input } from 'antd';
const Search = Input.Search;
const { Column } = Table;

const data = [{
  key: '1',
  title: 'Book1',
  author: 'Author1',
  quantity: 32,
  description: 'Genre1',
}, {
    key: '2',
    title: 'Book2',
    author: 'Author2',
    quantity: 5,
    description: 'Genre2',
}, {
    key: '3',
    title: 'Book3',
    author: 'Author3',
    quantity: 2,
    description: 'Genre3',
}];
class Books_st extends React.Component{
render(){
    return(
        <div className='catalog'>
        <div className='search'>
        <Search
      placeholder="search book"
      onSearch={value => console.log(value)}
      style={{ width: 500 }}
      enterButton
    />
    </div>
<Table dataSource={data}>
    <Column
      title="Title"
      dataIndex="title"
      key="title"
    />
    <Column
      title="Author"
      dataIndex="author"
      key="author"
    />
    <Column
      title="Quantity"
      dataIndex="quantity"
      key="quantity"
    />
    <Column
      title="Genre"
      dataIndex="description"
      key="description"
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="javascript:;">Borrow</a>
        </span>
      )}
    />
  </Table>
    
    </div>
    )
}}
export default Books_st