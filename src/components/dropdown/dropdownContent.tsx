import { useContext } from "react";
import cx from "classnames";
import { DropdownContext } from "../../hooks/context";
import Styles from "./dropdown.module.scss";
import { ReactComponent as Tick } from "../../assets/tick.svg";
import { selectedsList } from "../../utils/helper";
import useDropDownContent from "../../hooks/useDropDownContent";

// dropdown content for displaying dropdown
function DropdownContent() {
  const { open, list } = useDropDownContent();
  return (
    <div
      className={cx(Styles["container__content"], {
        [Styles["container__content--close"]]: !open,
      })}
    >
      <ul className={Styles["container__ul"]}>
        {list?.map((item) => (
          <DropDownItem>{item}</DropDownItem>
        ))}
      </ul>
    </div>
  );
}

function DropDownItem({ children }: { children: string }) {
  const { selecteds, setSelecteds, foundItem } = useContext(DropdownContext); // get the context
  const newSelectedsList = selectedsList(selecteds, children);
  return (
    <li
      onClick={() => setSelecteds(newSelectedsList)}
      className={
        selecteds.includes(children) || foundItem === children
          ? Styles["container__selected"]
          : Styles["container__item"]
      }
    >
      <span className={Styles["container__item--span"]}>{children}</span>
      {selecteds.includes(children) && <Tick />}
    </li>
  );
}

export default DropdownContent;
