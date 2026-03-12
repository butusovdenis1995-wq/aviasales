import WrapperCard from "@/shared/ui/WrapperCard";
import styles from "./Ticket.module.scss";
import Logo from "@entities/logo/S7 Logo.png";
import pluralize from "@shared/utils/pluralize";
import formatMinutes from "@shared/utils/formatMinutes";
import { format, addMinutes } from "date-fns";

function Ticket({ ticket }) {
  const departureDate = new Date(ticket.segments[0].date);
  const arrivalDate = addMinutes(departureDate, ticket.segments[0].duration);
  const departureTime = format(departureDate, "HH:mm");
  const arrivalTime = format(arrivalDate, "HH:mm");
  return (
    <WrapperCard className={styles.containerTicket}>
      <header>
        <span>{`${ticket.price} Р`}</span>
        <img src={Logo} alt="Logo S7" />
      </header>
      <main>
        <div>
          <span
            className={styles.top}
          >{`${ticket.segments[0].origin}-${ticket.segments[0].destination}`}</span>
          <span className={styles.bottom}>
            {departureTime} - {arrivalTime}
          </span>
        </div>
        <div>
          <span className={styles.top}>В ПУТИ</span>
          <span className={styles.bottom}>
            {formatMinutes(ticket.segments[0].duration)}
          </span>
        </div>
        <div>
          <span className={styles.top}>
            {pluralize(ticket.segments[0].stops.length, [
              "ПЕРЕСАДКА",
              "ПЕРЕСАДКИ",
              "ПЕРЕСАДОК",
            ])}
          </span>
          <span className={styles.bottom}>
            {ticket.segments[0].stops.join(", ")}
          </span>
        </div>
        <div>
          <span
            className={styles.top}
          >{`${ticket.segments[0].origin}-${ticket.segments[0].destination}`}</span>
          <span className={styles.bottom}>
            {departureTime} - {arrivalTime}
          </span>
        </div>
        <div>
          <span className={styles.top}>В ПУТИ</span>
          <span className={styles.bottom}>
            {formatMinutes(ticket.segments[1].duration)}
          </span>
        </div>
        <div>
          <span className={styles.top}>
            {pluralize(ticket.segments[1].stops.length, [
              "ПЕРЕСАДКА",
              "ПЕРЕСАДКИ",
              "ПЕРЕСАДОК",
            ])}
          </span>
          <span className={styles.bottom}>
            {ticket.segments[1].stops.join(", ")}
          </span>
        </div>
      </main>
    </WrapperCard>
  );
}

export default Ticket;
