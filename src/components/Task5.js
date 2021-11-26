import React, { forwardRef, useImperativeHandle } from 'react';

const Task5 = (props, ref) => {
  useImperativeHandle(ref, () => ({
    invoiceForCustomer(orders, id, name, age) {
      let val = 0;
      orders.forEach(order => {
        if (order.id === id && order.name === name && order.age === age && order.cart !== undefined) {
          order.cart.forEach(item => {
            val += item.price * item.quantity;
          })
        }
      });

      return val.toFixed(2);
    },
    getTotal(orders) {
      let val = 0;
      orders.forEach(order => {
        if (order.cart !== undefined) {
          order.cart.forEach(item => {
            val += item.price * item.quantity;
          })
        }
      });

      return val.toFixed(2);
    }
  }));

  return (
    <>
    </>
  );
};

export default forwardRef(Task5);
