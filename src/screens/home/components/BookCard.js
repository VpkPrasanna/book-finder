import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const BookCard = ({ book }) => {
 let imageLinks=""
  console.log(book,"bbbb")

  return (
    <div className="book">
      <Card>
        {imageLinks
          ? <Card.Img variant="top" src={imageLinks.thumbnail} />
          : null
        }
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle>{book.author_name}</Card.Subtitle>
          <Card.Text className="book--description">{book.publish_date?book.publish_date[0]:""}</Card.Text>
          {/* <Card.Link href={infoLink} target="_blank" rel="noopener">Preview</Card.Link> */}
          <Link className="book" to={`/book/${book.id}`}>View</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BookCard;