import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 55,
    padding: '3rem',
  },
  cardImage: {
    objectFit: 'cover',
    height: '400px',
    width: '100%',
  },
}

const Product = ({ product }) => {
  return (
    <Card className='my-2 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={styles.cardImage} />
      </a>
      <Card.Body>
        <Card.Title as='h4' className='card-title'>
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as='div'>
          <div className='my-1'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
