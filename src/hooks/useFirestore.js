import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useFirestore(collectionRef, condition) {
  const [document, setDocument] = useState([]);

  useEffect(() => {
    let queryDB = collection(db, collectionRef);
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      const queryDB = query(
        collection(db, collectionRef),
        where(condition.fieldsName, condition.Operator, condition.compareValue)
      );
    }

    const unsubscribe = onSnapshot(queryDB, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        rooms.push(doc.data());
      });
      setDocument(documents);
      console.log("Current documents : ", documents.join(", "));
    });

    return unsubscribe();
  }, [collectionRef, condition]);

  return document;
}
