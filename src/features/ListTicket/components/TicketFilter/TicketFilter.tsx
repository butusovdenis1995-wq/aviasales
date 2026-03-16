import WrapperCard from "@/shared/ui/WrapperCard";
import type { RootState } from "@/shared/config/store";
import styles from "./TicketFilter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterTicket } from "@features/ListTicket/slice";
import { ButtonSorted, TypeFilter } from "@features/ListTicket/types/types";

function TicketFilter() {
  const dispatch = useDispatch();
  const buttonFilter = useSelector(
    (state: RootState) => state.filterTickets.sorted,
  );

  const buttonSorted: ButtonSorted[] = [
    { position: "left", type: TypeFilter.Cheap, label: "САМЫЙ ДЕШЕВЫЙ" },
    { position: "center", type: TypeFilter.Fast, label: "САМЫЙ БЫСТРЫЙ" },
    { position: "right", type: TypeFilter.Optimal, label: "ОПТИМАЛЬНЫЙ" },
  ];

  return (
    <WrapperCard className={styles.container}>
      {buttonSorted.map((button) => (
        <button
          key={button.type}
          className={`${styles[button.position]} ${buttonFilter[button.type] ? styles.action : ""}`}
          onClick={() => dispatch(changeFilterTicket(button.type))}
        >
          {button.label}
        </button>
      ))}
    </WrapperCard>
  );
}

export default TicketFilter;
