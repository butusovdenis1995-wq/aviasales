import { Ticket } from "@features/ListTicket/api/types";
import { FilterTicket } from "@features/TicketFilter/model/types";

export function sortedTicket(
  tickets: Ticket[],
  activeButtonSorted: FilterTicket,
) {
  if (activeButtonSorted.cheap) {
    return [...tickets].sort((a, b) => a.price - b.price);
  }
  if (activeButtonSorted.fast) {
    return [...tickets].sort((a, b) => {
      const durationA = a.segments[0].duration + a.segments[1].duration;
      const durationB = b.segments[0].duration + b.segments[1].duration;
      return durationA - durationB;
    });
  }
  return [...tickets];
}
