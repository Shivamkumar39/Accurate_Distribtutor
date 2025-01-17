import { createSlice } from "@reduxjs/toolkit";
import Axios from "../utils/Axios";



const initialValue = {
    order : [],
    loading: false,
    error: null,
    
}

export const fetchOrders = () => async (dispatch) => {
    try {
      const response = await Axios.get("/api/order/ordersAdminList");
      dispatch(setOrder(response.data.data));
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  export const updateOrderDeliveryStatus = (orderId, isDelivered) => async (dispatch) => {
    try {
      const response = await Axios.post("/api/order/updateOrderDeliveryStatus", {
        orderId,
        isDelivered,
      });
      dispatch(updateOrder(response.data.data));
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
};

const orderSlice = createSlice({
    name : 'order',
    initialState : initialValue,
    reducers : {
        setOrder : (state,action)=>{
            state.order = [...action.payload]
        },
        updateOrder: (state, action) => {
            const updatedOrder = action.payload;
            const index = state.order.findIndex((order) => order.orderId === updatedOrder.orderId);
            if (index !== -1) {
              state.order[index] = updatedOrder;
            }
        }
    }
})

export const {setOrder, updateOrder} = orderSlice.actions

// export const fetchOrders = async () => async (dispatch) => {
//     try {
//       const response = await Axios.get('/api/order/ordersAdminList'); 
  
//       if (!response.data.data || !Array.isArray(response.data.data)) {
//         throw new Error('Invalid response data format from API');
//       }
  
//       const formattedOrders = response.data.data.map((orders) => ({
//         ...orders, 
//         isDelivered: orders.deliveryStatus === 'completed' ? true : false, 
//       }));
  
//       dispatch(setOrder(formattedOrders)); 
//     } catch (error) {
//       console.error('Error fetching orders:', error);
     
//     }
//   }; 
export default orderSlice.reducer
