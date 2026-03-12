import Ticket from "@entities/Ticket";
import styles from "./ListTicket.module.scss";
import { ticketApi } from "../api/ticketApiSlice";
import type { RootState } from "@/shared/config/store";
import { useSelector } from "react-redux";
import { filterTickets } from "@shared/utils/filterTickets";
import { sortedTicket } from "@shared/utils/sortedTicket";
import { useEffect, useState } from "react";
import { Spin } from "antd";

function ListTicket() {
  const [numberTickets, setNumberTicket] = useState(5);
  const { data: searchData } = ticketApi.useFetchSearchIdQuery();
  const {
    data: tickets,
    error,
    isLoading,
  } = ticketApi.useFetchTicketsQuery(
    searchData?.searchId ?? "", // ! говорит TypeScript, что значение будет (благодаря skip)
    { skip: !searchData?.searchId }, // пропускаем запрос если нет searchId
  );
  const qtyTrans = useSelector((state: RootState) => state.qtyTrans.transfer);
  const buttonFilter = useSelector((state: RootState) => state.filterTicket);

  const activeFilterTicket = tickets
    ? filterTickets(tickets.tickets, qtyTrans)
    : [];

  const sortedByTicket = sortedTicket(activeFilterTicket, buttonFilter);

  useEffect(() => {
    if (numberTickets !== 5) {
      setNumberTicket(5);
    }
  }, [qtyTrans, buttonFilter, tickets]);

  const handleShowMore = () => {
    setNumberTicket(numberTickets + 5);
  };
  const hasMore = numberTickets < sortedByTicket.length;
  return (
    <div className={styles.ticketSection}>
      {isLoading && (
        <div className={styles.spin}>
          <Spin className={styles.spin} size="large" />
        </div>
      )}
      {error && "Произошла ошибка"}
      {sortedByTicket
        .filter((_, index: number) => index < numberTickets)
        .map((ticket) => (
          <Ticket key={ticket.price} ticket={ticket} />
        ))}
      {hasMore && (
        <button onClick={handleShowMore}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
      )}
    </div>
  );
}

export default ListTicket;
