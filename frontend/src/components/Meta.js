import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Bookstop!',
  description: 'Find the best books here at cheap prices',
  keywords: 'books, fiction, buy books',
}

export default Meta
