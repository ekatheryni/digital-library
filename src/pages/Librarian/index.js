import React from 'react'
import "antd/dist/antd.css"
import './style.scss'

import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Librarian extends React.Component{
render(){

    return(
        <div className='librarian'>
    <div className='book_lib'>
  <Card
    style={{ width: 300 }}
    cover={<img className="card_img" src={require('../../assets/bookmark.svg')}/>}
    actions={[<Icon type="plus" />,<Icon type="edit" />,<Icon type="delete" />]}
  >
    <Meta
      title="Book catalog"
      description="Add, edit, delete books"
    />
  </Card>
</div>
<div className='students_lib'>
  <Card
    style={{ width: 300 }}
    cover={<img className="card_img" src={require('../../assets/students.svg')}/>}
    actions={[<Icon type="search" />]}
  >
    <Meta
      title="Students"
      description="Search from students"
    />
  </Card>
</div>
</div>
)
}
}

export default Librarian