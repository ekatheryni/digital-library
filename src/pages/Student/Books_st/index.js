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
        this.setState({ 
          books,
          booksFiltered: books 
        });
      })
  }

render(){
    return(
        <div className='catalog'>
        <div className='search'>
        <Search
      placeholder="search book"
      onSearch={
        value => {
          if (value === '') {
            this.setState({
              booksFiltered: this.state.books
            })
          }
          else {
            this.setState({
              booksFiltered: this.state.books.filter(b => b.name.toLowerCase().includes(value.toLowerCase()))
            })
          }
        }
      }
      style={{ width: 500 }}
      enterButton
    />
    </div>
<Table dataSource={this.state.booksFiltered} rowKey={books => books.isbn}>
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
        <span type="primary" htmlType="submit">
          <a href="http://localhost:3000/Books_my">Borrow</a>
        </span>
      )}
    />
  </Table>
    
    </div>
    )
}}
export default Books_st