import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }
  return (
    <Row>
      <Col md={8}>
        <h2 className='logo py-2'>SHOPPING CART</h2>
        {cartItems.length === 0 ? (
          <Message>
            You have an empty cart. <Link to='/'>Go back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={3}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{
                        objectFit: 'fill',
                        height: '150px',
                        width: '100%',
                      }}
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link
                      style={{ textDecoration: 'none', fontFamily: 'cursive' }}
                      to={`/product/${item.product}`}
                      className='linklink'
                    >
                      <h5>{item.name}</h5>
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h5 style={{ color: 'rgb(228, 243, 247)' }}>
                      ₹{item.price}
                    </h5>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='primary'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash-alt'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2
                style={{ fontSize: '1.4rem', padding: '0.5rem 0' }}
                className='logo'
              >
                SUBTOTAL {cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
                ITEMS
              </h2>
              <h5>
                ₹
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn w-100 py-2'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
