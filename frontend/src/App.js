import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />

          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
