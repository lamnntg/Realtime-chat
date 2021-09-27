import React from 'react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useFirestore(collection, condition) {
  const { rooms, setRooms } = useState([]);
  useEffect(() => {
    /**
     * {
     *  fields name: 'abc'
     *  operator: "=="
     *  compareValue: 'cde'
     * }
     * 
     */
    const queryDB = collection(db, "users");
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;        
      }
      const queryDB = query(collection(db, "users"), where(condition.fieldsName, condition.Operator, condition.compareValue))
    }

    const unsubscribe = onSnapshot(queryDB, (querySnapshot) => {
      const rooms = [];
      querySnapshot.forEach((doc) => {
          rooms.push(doc.data());
      });
      console.log("Current rooms : ", rooms.join(", "));
    });
  }, [rooms])
}
