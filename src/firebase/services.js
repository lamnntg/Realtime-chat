import { db } from "./config";
import { query, getDocs, where, addDoc, collection } from "firebase/firestore"; 

/**
 * 
 * @param {object} collectionObject 
 * @param {object} data 
 */
export const addDocument = async (collectionObject, data) => {
  try {
    const docRef = await addDoc(collection(collectionObject, "users"), 
      {
        ...data,
        create_at: Date.now()
      }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/** 
 * 
 * @param {object} collectionObject 
 * @param {string} uid
 * 
*/
export const findUserExist = async (collectionObject, uid) => {
  // Create a reference to the cities collection
  const userRef = collection(collectionObject, "users");
  const q = query(userRef, where("uid", "==", uid));
  const user = await getDocs(q);

  return !user.empty;
}