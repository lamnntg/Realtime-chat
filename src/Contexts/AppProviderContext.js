import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "./AuthProviderContext";
import useFirestore from "../hooks/useFirestore";
import useFireStoreListUser from "../hooks/useFireStoreListUser";

export const AppContext = React.createContext();

export default function AppProviderContext({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteUsersVisible, setIsInviteUsersVisible] = useState(false);

  const [sellectedRoomId, setSellectedRoomId] = useState("");
  const { user } = useContext(AuthContext);

  const roomCondition = useMemo(() => {
    return {
      fieldsName: "members",
      operator: "array-contains",
      compareValue: user.uid,
    };
  }, [user.uid]);

  const rooms = useFirestore("rooms", roomCondition);
  const sellectedRoom = rooms.find(
    (room) => room.id == sellectedRoomId.toString()
  );

  const userCondition = useMemo(() => {
    return {
      fieldsName: "uid",
      operator: "in",
      compareValue: sellectedRoom && sellectedRoom.members,
    };
  }, [sellectedRoom && sellectedRoom.members]);

  const usersRoom = useFirestore("users", userCondition);

  const users = useFireStoreListUser("users");

  return (
    <AppContext.Provider
      value={{
        rooms,
        isAddRoomVisible,
        setIsAddRoomVisible,
        sellectedRoomId,
        setSellectedRoomId,
        sellectedRoom,
        usersRoom,
        isInviteUsersVisible, 
        setIsInviteUsersVisible,
        users
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
