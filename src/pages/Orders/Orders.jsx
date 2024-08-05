import React from 'react';
import './Orders.css';
import { order_list } from '../../assets/assets';

const Orders = () => {
  return (
    <div className='orders-container'>
      {order_list.map((order) => (
        <div key={order.id} className='order'>
          <div className='order-header'>
            <h2>Order ID: {order.id}</h2>
            <p>Status: {order.status}</p>
          </div>
          <div className='order-items'>
            <h3>Items:</h3>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  <p>Name: {item.name}</p>
                  <p>Description: {item.description}</p>
                  <p>Price: {item.Price}</p>
                  <hr />
                </li>
                
              ))}
            </ul>
          </div>
          <div className='order-amount'>
            <h3>Total Amount: {order.amount}</h3>
          </div>
          <div className='order-address'>
            <h3>Delivery Address:</h3>
            <p>{order.address.firstName} {order.address.lastName}</p>
            <p>{order.address.street}</p>
            <p>{order.address.city}, {order.address.state} - {order.address.zipcode}</p>
            <p>{order.address.country}</p>
            <p>Phone: {order.address.phone}</p>
            <p>Email: {order.address.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
