import { configureStore } from '@reduxjs/toolkit';
import ListsReducer from './Lists/coinList';
import DetailsReducer from './Details/coinDetails';

const store = configureStore({
  reducer: {
    ListsReducer,
    DetailsReducer,
  },
});

export default store;
