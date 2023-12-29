import { useContext, useEffect, useState } from "react";
import { DropdownContext } from "../hooks/context";

function useDropDownContent() {
  const { open, totalListItems, query, setFoundItem } =
    useContext(DropdownContext); // get the context
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const filtered = totalListItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFoundItem(query ? filtered[0] : "");
    setList(query ? filtered : totalListItems);
  }, [query, setFoundItem, totalListItems]);

  return {
    open,
    list,
  };
}

export default useDropDownContent;
