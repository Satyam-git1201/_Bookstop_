import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} className='mx-4'>
      <Row>
        <Col md={8}>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search products...'
            className='mr-sm-2 ml-sm-5'
          ></Form.Control>
        </Col>
        <Col md={4}>
          <Button type='submit' variant='outline-light'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
