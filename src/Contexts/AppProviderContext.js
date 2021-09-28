import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "./AuthProviderContext";
import useFirestore from "../hooks/useFirestore";

export const AppContext = React.createContext();

export default function AppProviderContext({ children }) {
  const [ isAddRoomVisible, setIsAddRoomVisible ] = useState(false);

  const { user } = useContext(AuthContext);

  const roomCondition = useMemo(() => {
    return {
      fieldsName: "members",
      operator: "array-contains",
      compareValue: user.uid,
    };
  }, [user.uid]);

  const rooms = useFirestore("rooms", roomCondition);

  return (
    <AppContext.Provider value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}>{children}</AppContext.Provider>
  );
}
