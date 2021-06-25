import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const styles = {
  card: {
    backgroundColor: '#604960',
    borderRadius: 55,
    padding: '3rem',
  },
  cardImage: {
    objectFit: 'fill',
    height: '270px',
    width: '100%',
  },
}

const Product = ({ product }) => {
  return (
    <Card className='my-2 p-3 rounded' style={styles.card}>
      <Link to={`/product/${product._id}`} className='linklink'>
        <Card.Img src={product.image} variant='top' style={styles.cardImage} />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className='linklink'
          style={{
            textDecorationLine: 'none',
            fontFamily: 'cursive',
          }}
        >
          <Card.Title as='h4' className='card-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text
          as='h4'
          style={{
            fontFamily: 'cursive',
            color: 'rgb(97, 167, 151)',
            marginTop: '0.5rem',
          }}
        >
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
