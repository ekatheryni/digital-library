import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import { Table, Input } from 'antd';
import axios from 'axios'
const Search = Input.Search;
const { Column } = Table;

class Books_st extends React.Component{

  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`https://library-service-naukma.herokuapp.com/api/publications/available`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
        console.log('Got books: ', this.state.books.map(books => books.name));
      })
  }

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
<Table dataSource={this.state.books} rowKey={books => books.isbn}>
    <Column
      title="Name"
      dataIndex="name"
      key="name"
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
      dataIndex="genre"
      key="genre"
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