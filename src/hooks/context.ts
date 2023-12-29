import { Dispatch, SetStateAction, createContext } from "react";

type TContext = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  totalListItems: string[];
  setTotalListItems: Dispatch<SetStateAction<string[]>>;
  selecteds: string[];
  setSelecteds: Dispatch<SetStateAction<string[]>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  foundItem: string;
  setFoundItem: Dispatch<SetStateAction<string>>;
};
export const DropdownContext = createContext<TContext>({
  open: false,
  setOpen: () => {},
  totalListItems: [],
  setTotalListItems: () => {},
  selecteds: [],
  setSelecteds: () => {},
  query: "",
  setQuery: () => {},
  foundItem: "",
  setFoundItem: () => {},
});
