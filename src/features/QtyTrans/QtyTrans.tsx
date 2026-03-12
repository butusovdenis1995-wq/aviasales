import type { RootState } from "@/shared/config/store";
import WrapperCard from "@/shared/ui/WrapperCard";
import styles from "./QtyTrans.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleQtyTrans } from "./model/slice";

function QtyTrans() {
  const qtyTrans = useSelector((state: RootState) => state.qtyTrans.transfer);
  const dispatch = useDispatch();
  return (
    <WrapperCard className={styles.container}>
      <p>Количество пересадок</p>
      <form action="submit">
        <div className={styles.checkboxItem}>
          <input
            id="all"
            type="checkbox"
            checked={qtyTrans.all}
            onChange={() => dispatch(toggleQtyTrans("all"))}
          />
          <label htmlFor="all">Все</label>
        </div>

        <div className={styles.checkboxItem}>
          <input
            id="without"
            type="checkbox"
            checked={qtyTrans.nonstops}
            onChange={() => dispatch(toggleQtyTrans("nonstops"))}
          />
          <label htmlFor="without">Без пересадок</label>
        </div>

        <div className={styles.checkboxItem}>
          <input
            id="one"
            type="checkbox"
            checked={qtyTrans.one}
            onChange={() => dispatch(toggleQtyTrans("one"))}
          />
          <label htmlFor="one">1 пересадка</label>
        </div>

        <div className={styles.checkboxItem}>
          <input
            id="two"
            type="checkbox"
            checked={qtyTrans.two}
            onChange={() => dispatch(toggleQtyTrans("two"))}
          />
          <label htmlFor="two">2 пересадки</label>
        </div>

        <div className={styles.checkboxItem}>
          <input
            id="three"
            type="checkbox"
            checked={qtyTrans.three}
            onChange={() => dispatch(toggleQtyTrans("three"))}
          />
          <label htmlFor="three">3 пересадки</label>
        </div>
      </form>
    </WrapperCard>
  );
}

export default QtyTrans;
