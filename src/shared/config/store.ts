import { configureStore } from "@reduxjs/toolkit";
import { ticketApi } from "@/entities/Ticket/api/ticketApiSlice";
import filterTicketsReducer from "@/features/ListTicket/slice";

export const store = configureStore({
  reducer: {
    filterTickets: filterTicketsReducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
