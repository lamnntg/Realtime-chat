import { db } from "./config";
import { addDoc, collection } from "firebase/firestore"; 

/**
 * 
 * @param {object} collectionName 
 * @param {object} data 
 */
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(collectionName, "users"), 
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