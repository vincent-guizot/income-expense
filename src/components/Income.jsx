import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomesSuccess } from "../redux/trackerSlice";

import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
const Income = () => {
  // const [incomes, setIncomes] = useState([]);
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.incomes);

  const getIncomes = async (dispatch) => {
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
    }
  };

  useEffect(() => {
    // dispatch(fetchIncomesSuccess());
    dispatch(getIncomes);
  }, [dispatch]);

  return <div>{JSON.stringify(incomes)}</div>;
};

export default Income;
