import type { RootState } from "@/shared/config/store";
import WrapperCard from "@shared/ui/WrapperCard";
import styles from "./QtyTrans.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleQtyTrans } from "./model/slice";
import { TransferKey } from "@features/QtyTrans/model/types";

function QtyTrans() {
  const qtyTrans = useSelector((state: RootState) => state.qtyTrans.transfer);
  const dispatch = useDispatch();
  const arrayCheckbox: Array<{ id: TransferKey; label: string }> = [
    { id: "all", label: "Все" },
    { id: "nonstops", label: "Без пересадок" },
    { id: "one", label: "1 пересадка" },
    { id: "two", label: "2 пересадки" },
    { id: "three", label: "3 пересадки" },
  ];

  return (
    <WrapperCard className={styles.container}>
      <p>Количество пересадок</p>
      <form>
        {arrayCheckbox.map((checkbox) => (
          <div key={checkbox.id} className={styles.checkboxItem}>
            <input
              id={checkbox.id}
              type="checkbox"
              checked={qtyTrans[checkbox.id]}
              onChange={() => dispatch(toggleQtyTrans(checkbox.id))}
            />
            <label htmlFor={checkbox.id}>{checkbox.label}</label>
          </div>
        ))}
      </form>
    </WrapperCard>
  );
}

export default QtyTrans;
