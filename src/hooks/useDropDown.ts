import { useEffect, useRef, useState } from "react";
import defaults from "../constants/defaults.json";

function useDropDown() {
  const [open, setOpen] = useState(true);
  const [totalListItems, setTotalListItems] = useState(defaults.dropDownItems);
  const [selecteds, setSelecteds] = useState<string[]>([]);
  const [foundItem, setFoundItem] = useState<string>("");
  const [query, setQuery] = useState("");

  const dropdownRef = useRef(null);

  // click listeners for closing dropdown
  useEffect(() => {
    // close dropdown if click outside
    function close(e: any): void {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(e.target)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      window.addEventListener("click", close);
    }
    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]);
  return {
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
  };
}
export default useDropDown;
