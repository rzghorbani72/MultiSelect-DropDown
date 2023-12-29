import { KeyboardEvent, useContext, ChangeEvent, useState } from "react";
import { DropdownContext } from "../hooks/context";
import keys from "../constants/keys.json";
import { selectedsList } from "../utils/helper";

function useDropDownInput() {
  const { open, setOpen, selecteds, setSelecteds, setQuery, foundItem } =
    useContext(DropdownContext);

  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
    setOpen(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

  function toggleOpen() {
    setOpen(!open);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target?.value || "");
    setOpen(true);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === keys.enter) {
      const newSelectedsList = selectedsList(selecteds, foundItem);
      setSelecteds(newSelectedsList);
    }
  }

  return {
    onKeyDown,
    onChange,
    toggleOpen,
    onBlur,
    onFocus,
    focused,
    selecteds,
    open,
  };
}
export default useDropDownInput;
