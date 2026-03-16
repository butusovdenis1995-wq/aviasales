import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchId, Tickets, Ticket } from "../types/types";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aviasales-test-api.kata.academy",
  }),
  endpoints: (build) => ({
    fetchSearchId: build.query<SearchId, void>({
      query: () => ({
        url: "/search",
      }),
    }),
    fetchTickets: build.query<Ticket[], string>({
      async queryFn(searchId, _queryApi, _extraOptions, fetchWithBQ) {
        let allTicket: Ticket[] = [];
        let stop = false;
        while (!stop) {
          try {
            const result = await fetchWithBQ(`tickets?searchId=${searchId}`);
            if (result.error) {
              throw new Error(JSON.stringify(result.error));
            }
            const data = result.data as Tickets;
            allTicket = [...allTicket, ...data.tickets];
            stop = data.stop;
          } catch {
            console.log("Ошибка");
          }
        }
        return { data: allTicket };
      },
    }),
  }),
});

export const { useFetchSearchIdQuery, useFetchTicketsQuery } = ticketApi;
