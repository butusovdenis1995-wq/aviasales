import Ticket from "@entities/Ticket/ui/Ticket";
import styles from "./ListTicket.module.scss";
import { ticketApi } from "../../entities/Ticket/api/ticketApiSlice";
import type { RootState } from "@/shared/config/store";
import { useDispatch, useSelector } from "react-redux";
import { filterTickets } from "@shared/utils/filterTickets";
import { sortedTicket } from "@shared/utils/sortedTicket";
import { useEffect } from "react";
import { Spin } from "antd";
import { changePaginationCount } from "@/features/ListTicket/slice";

function ListTicket() {
  const { data: searchData } = ticketApi.useFetchSearchIdQuery();
  const {
    data: allTicket,
    error,
    isLoading,
  } = ticketApi.useFetchTicketsQuery(searchData?.searchId ?? "", {
    skip: !searchData?.searchId,
  });

  const dispatch = useDispatch();
  const qtyTrans = useSelector(
    (state: RootState) => state.filterTickets.transfer,
  );
  const buttonFilter = useSelector(
    (state: RootState) => state.filterTickets.sorted,
  );
  const pagination = useSelector(
    (state: RootState) => state.filterTickets.pagination,
  );

  const activeFilterTicket = allTicket
    ? filterTickets(allTicket, qtyTrans)
    : [];

  const sortedByTicket = sortedTicket(activeFilterTicket, buttonFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(changePaginationCount(5));
  }, [qtyTrans, buttonFilter]);

  const handleShowMore = () => {
    dispatch(changePaginationCount(pagination + 5));
  };
  const hasMore = pagination < sortedByTicket.length;
  return (
    <div className={styles.ticketSection}>
      {isLoading && (
        <div className={styles.spin}>
          <Spin className={styles.spin} size="large" />
        </div>
      )}
      {error && "Произошла ошибка"}
      {sortedByTicket.slice(0, pagination).map((ticket) => (
        <Ticket key={ticket.price} ticket={ticket} />
      ))}
      {hasMore && (
        <button onClick={handleShowMore}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
      )}
    </div>
  );
}

export default ListTicket;
