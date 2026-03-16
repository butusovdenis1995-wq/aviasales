import TicketFilter from "@/features/ListTicket/components/TicketFilter";
import styles from "./SearchTicket.module.scss";
import QtyTrans from "@/features/ListTicket/components/QtyTrans";
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
