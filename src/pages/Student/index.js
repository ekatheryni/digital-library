import React from 'react'
import "antd/dist/antd.css"
import './style.scss'

import {Link} from 'react-router-dom'

import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Student extends React.Component{
render(){

    return(
        <div className='student'>
    <div className='catalog_user'>
  <Card
    style={{ width: 300 }}
    cover={<img className="card_img" src={require('../../assets/books.svg')}/>}
    actions={[<Link to='/Books_st'><Icon type="search" /></Link>]}
  >
    <Meta
      title="Book catalog"
      description="Find your books"
    />
  </Card>
</div>
<div className='profile_user'>
  <Card
    style={{ width: 300 }}
    cover={<img className="card_img" src={require('../../assets/profile.svg')}/>}
    actions={[<Icon type="book" />]}
  >
    <Meta
      title="My books"
      description="Give back your books"
    />
  </Card>
</div>
</div>
)
}
}

export default Student