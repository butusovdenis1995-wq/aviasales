import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchId, Tickets } from "./types";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aviasales-test-api.kata.academy",
  }),
  endpoints: (build) => ({
    fetchSearchId: build.query<SearchId, void>({
      //fetchSearchId метод который мы вызываем что бы получить или менять данные
      query: () => ({
        url: "/search",
      }),
    }),
    fetchTickets: build.query<Tickets, string>({
      query: (searchId) => ({
        url: "/tickets",
        params: { searchId },
      }),
    }),
  }),
});

export const { useFetchSearchIdQuery, useFetchTicketsQuery } = ticketApi;
