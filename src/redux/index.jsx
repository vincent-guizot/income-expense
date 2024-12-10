import {
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  fetchIncomesFail,
  fetchIncomesStart,
  fetchIncomesSuccess,
} from "./trackerSlice";

const getIncomes = () => async (dispatch) => {
  dispatch(fetchIncomesStart());
  try {
    const querySnapshots = await getDocs(collection(db, "incomes"));
    let data = [];
    querySnapshots.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch(fetchIncomesSuccess([...data]));
    // setIncomes([...data]);
    console.log(data);
  } catch (err) {
    console.error(err);
    dispatch(fetchIncomesFail());
  }
};

const addIncome = (payload) => async () => {
  const { name, total, category } = payload;
  try {
    const docRef = await addDoc(collection(db, "incomes"), payload);
  } catch (err) {
    console.log(err);
  }
};

const deleteIncome = (userId) => async () => {
  //   console.log(userId);

  try {
    await deleteDoc(doc(db, "incomes", userId));
  } catch (err) {
    console.log(err);
  }
};

export { getIncomes, addIncome, deleteIncome };
