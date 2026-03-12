import WrapperCard from "@/shared/ui/WrapperCard";
import type { RootState } from "@/shared/config/store";
import styles from "./TicketFilter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterTicket } from "./model/slice";

function TicketFilter() {
  const dispatch = useDispatch();
  const buttonFilter = useSelector((state: RootState) => state.filterTicket);

  return (
    <WrapperCard className={styles.container}>
      <button
        className={`${styles.left} ${buttonFilter.cheap ? styles.action : ""}`}
        onClick={() => dispatch(changeFilterTicket("cheap"))}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${styles.center} ${buttonFilter.fast ? styles.action : ""}`}
        onClick={() => dispatch(changeFilterTicket("fast"))}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${styles.right} ${buttonFilter.optimal ? styles.action : ""}`}
        onClick={() => dispatch(changeFilterTicket("optimal"))}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </WrapperCard>
  );
}

export default TicketFilter;
