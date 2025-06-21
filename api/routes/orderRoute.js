import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyStripe } from '../controllers/orderController.js'

const orderRouter = express. Router()
// Admin Features
orderRouter.post('/list', adminAuth, allOrders) 
orderRouter.post('/status', adminAuth, updateStatus)
// Payment Features
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/stripe', authUser,placeOrderStripe) 
orderRouter.post('/razorpay', authUser,placeOrderRazorpay)
orderRouter.post('/verifyStripe', authUser,verifyStripe)
// User Feature
orderRouter.post('/userorders', authUser, userOrders)
export default orderRouter