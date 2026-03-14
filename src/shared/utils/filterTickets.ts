import { TransfersState } from "@features/QtyTrans/model/types";
import { Ticket } from "@features/ListTicket/api/types";

export function filterTickets(tickets: Ticket[], checkbox: TransfersState) {
  const filterTicket: Ticket[] = [];

  if (checkbox.all || Object.values(checkbox).every((item) => !item)) {
    return [...tickets];
  }

  if (checkbox.nonstops) {
    filterTicket.push(
      ...tickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length === 0 &&
          ticket.segments[1].stops.length === 0
        );
      }),
    );
  }
  if (checkbox.one) {
    filterTicket.push(
      ...tickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length === 1 &&
          ticket.segments[1].stops.length === 1
        );
      }),
    );
  }
  if (checkbox.two) {
    filterTicket.push(
      ...tickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length === 2 &&
          ticket.segments[1].stops.length === 2
        );
      }),
    );
  }
  if (checkbox.three) {
    filterTicket.push(
      ...tickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length === 3 &&
          ticket.segments[1].stops.length === 3
        );
      }),
    );
  }
  return filterTicket;
}
