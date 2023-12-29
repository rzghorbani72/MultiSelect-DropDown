import { DropdownContext } from "../../hooks/context";
import Styles from "./dropdown.module.scss";
import useDropDown from "../../hooks/useDropDown";

// dropdown component for wrapping and providing context
function Dropdown({ children }: { children: React.ReactNode }) {
  const {
    open,
    setOpen,
    totalListItems,
    setTotalListItems,
    selecteds,
    setSelecteds,
    query,
    setQuery,
    foundItem,
    setFoundItem,
    dropdownRef,
  } = useDropDown();
  return (
    <DropdownContext.Provider
      value={{
        open,
        setOpen,
        totalListItems,
        setTotalListItems,
        selecteds,
        setSelecteds,
        query,
        setQuery,
        foundItem,
        setFoundItem,
      }}
    >
      <div ref={dropdownRef} className={Styles["container"]}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export default Dropdown;
