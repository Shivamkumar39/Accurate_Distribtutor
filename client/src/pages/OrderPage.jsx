import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, updateOrderDeliveryStatus } from "../store/orderSlice";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeliveryStatusChange = (orderId, isDelivered) => {
    dispatch(updateOrderDeliveryStatus(orderId, isDelivered));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order List ({orders.length})</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.orderId}
            className="p-4 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between"
          >
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-semibold text-gray-700">
                <b>Order ID:</b> {order.orderId}
              </p>
              <p className="text-sm text-gray-600">
                <b>Sub Total:</b> {order.subTotalAmt}
              </p>
              <p className="text-sm text-gray-600">
                <b>Total Amount:</b> {order.totalAmt}
              </p>
              <p className="text-sm text-gray-600">
                <b>Payment Status:</b> {order.payment_status}
              </p>
              <p className="text-sm text-gray-600">
                <b>Delivery Address:</b>
                {order.address && (
                  <>
                    <span>{order.address.address_line}</span>
                    <br />
                    <span>
                      {order.address.city}, {order.address.state}{" "}
                      {order.address.pincode} ({order.address.country})
                    </span>
                    <br />
                    <span>Mobile: {order.address.mobile}</span>
                  </>
                )}
              </p>
              <p className="text-sm text-gray-600">
                <b>Product ID:</b> {order.productId}
              </p>
            </div>
            <div className="text-sm font-semibold text-gray-700 space-y-2">
              <div>
                <b>Delivery Status:</b>
                <div className="flex items-center space-x-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`deliveryStatus-${order.orderId}`}
                      value="delivered"
                      checked={order.isDelivered}
                      onChange={() => handleDeliveryStatusChange(order.orderId, true)}
                      className="mr-2"
                    />
                    Delivered
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`deliveryStatus-${order.orderId}`}
                      value="pending"
                      checked={!order.isDelivered}
                      onChange={() => handleDeliveryStatusChange(order.orderId, false)}
                      className="mr-2"
                    />
                    Pending
                  </label>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
