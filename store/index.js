import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice'
import orderReducer from '@/features/menu/orderSlice'

const store = configureStore({
  reducer:{
    auth : authReducer,
    order : orderReducer,
  }
});

export default store


