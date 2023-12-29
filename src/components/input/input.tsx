import cx from "classnames";
import Styles from "./input.module.scss";
import useDropDownInput from "../../hooks/useDropDownInput";

import configs from "../../constants/configs.json";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

function DropdownInput(): React.ReactNode {
  const {
    onKeyDown,
    onChange,
    selecteds,
    toggleOpen,
    onBlur,
    onFocus,
    focused,
    open,
  } = useDropDownInput();

  return (
    <div>
      <div
        className={cx(Styles["inputwrapper"], {
          [Styles["inputwrapper__active"]]: open || focused,
        })}
      >
        <input
          autoFocus
          placeholder="Search in list items ..."
          onFocus={onFocus}
          onBlur={onBlur}
          name="dropdownInput"
          onKeyDown={onKeyDown}
          onChange={onChange}
          className={Styles["inputwrapper__input"]}
        />
        <button
          title="trigger drop down items"
          onClick={toggleOpen}
          className={Styles["inputwrapper__button"]}
        >
          <Arrow
            className={
              open
                ? Styles["inputwrapper__button--open"]
                : Styles["inputwrapper__button--close"]
            }
          />
        </button>
      </div>
      {/* show selected items chips */}
      {configs.SHOW_CHIPS && (
        <div className={Styles["inputwrapper__badgewrapper"]}>
          {selecteds?.map((item) => (
            <span className={Styles["inputwrapper__badge"]}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropdownInput;
