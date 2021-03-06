import React from 'react'
import { Link } from 'react-router-dom'
import CardTitle from '../../card-title'
import CardDescription from '../../card-description'
import CardAuthor from '../../card-author'
import CardDate from '../../card-date'

export default function BigCard (props) {
  const { title, imageUrl, description, date, author, id } = props.article

  return (
    <Link to={`/${id}`}>
      <div className="row">
        <div className="col-12">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-12">
          <CardTitle title={title} />
        </div>
        <div className="col-12">
          <CardDescription description={description} />
        </div>
        <div className="col-12">
          <CardAuthor author={author} />
        </div>
        <div className="col-12">
          <CardDate date={date} />
        </div>
      </div>
    </Link>
  )

}