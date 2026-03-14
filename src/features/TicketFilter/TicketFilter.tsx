import WrapperCard from "@/shared/ui/WrapperCard";
import type { RootState } from "@/shared/config/store";
import styles from "./TicketFilter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterTicket } from "./model/slice";
import { ButtonSorted } from "@features/TicketFilter/model/types";

function TicketFilter() {
  const dispatch = useDispatch();
  const buttonFilter = useSelector((state: RootState) => state.filterTicket);

  const buttonSorted: ButtonSorted[] = [
    { position: "left", type: "cheap", label: "САМЫЙ ДЕШЕВЫЙ" },
    { position: "center", type: "fast", label: "САМЫЙ БЫСТРЫЙ" },
    { position: "right", type: "optimal", label: "ОПТИМАЛЬНЫЙ" },
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
