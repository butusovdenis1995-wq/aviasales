import Ticket from "@entities/Ticket";
import styles from "./ListTicket.module.scss";
import { ticketApi } from "./api/ticketApiSlice";
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
    data: allTicket,
    error,
    isLoading,
  } = ticketApi.useFetchTicketsQuery(searchData?.searchId ?? "", {
    skip: !searchData?.searchId,
  });

  const qtyTrans = useSelector((state: RootState) => state.qtyTrans.transfer);
  const buttonFilter = useSelector((state: RootState) => state.filterTicket);

  const activeFilterTicket = allTicket
    ? filterTickets(allTicket, qtyTrans)
    : [];

  const sortedByTicket = sortedTicket(activeFilterTicket, buttonFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [qtyTrans]);

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
