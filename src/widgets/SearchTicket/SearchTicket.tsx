import TicketFilter from "@/features/TicketFilter";
import styles from "./SearchTicket.module.scss";
import QtyTrans from "@/features/QtyTrans";
import ListTicket from "@features/ListTicket";

function SearchTicket() {
  return (
    <div className={styles.container}>
      <QtyTrans />
      <div>
        <TicketFilter />
        <ListTicket />
      </div>
    </div>
  );
}

export default SearchTicket;
