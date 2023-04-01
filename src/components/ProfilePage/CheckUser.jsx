import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase"; 

export const checkUsernameExists = async (username) => {
  const userQuery = query(collection(db, "usertest"), where("username", "==", username));
  const userDocs = await getDocs(userQuery);
  return !userDocs.empty; // return true if the query returns any documents (username already exists)
};
