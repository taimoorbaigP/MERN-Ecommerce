import React, { useEffect } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const productId = id

  const location = useLocation()
  const qty = new URLSearchParams(location.search).get('qty')

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const navigate = useNavigate()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
      navigate('/cart')
    }
  }, [dispatch, productId, qty, navigate])
  return <div>Cart</div>
}

export default CartScreen
