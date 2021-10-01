import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const useFireStoreListUser = (collectionRef) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionRef), (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id});
      });
      setUsers(documents);
      console.log("Current users : ", documents.join(", "));
    });
    
    return unsubscribe;
  }, [collectionRef]);

  return users;
};

export default useFireStoreListUser;
