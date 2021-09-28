import React, { useContext, useMemo } from "react";
import { AuthContext } from "./AuthProviderContext";
import useFirestore from "../hooks/useFirestore";

export const RoomContext = React.createContext();

export default function AppProviderContext({ children }) {
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
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
}
