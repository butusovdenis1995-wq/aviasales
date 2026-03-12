import { configureStore } from "@reduxjs/toolkit";
import qtyTransReducer from "@features/QtyTrans/model/slice";
import FilterTicketReducer from "@features/TicketFilter/model/slice";
import { ticketApi } from "@features/ListTicket/api/ticketApiSlice";

export const store = configureStore({
  reducer: {
    qtyTrans: qtyTransReducer,
    filterTicket: FilterTicketReducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
