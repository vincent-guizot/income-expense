import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncomes, deleteIncome } from "../redux";

const Income = () => {
  // const [incomes, setIncomes] = useState([]);
  const dispatch = useDispatch();
  const { incomes, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getIncomes());
    console.log("tes");
  }, [dispatch]);

  const deleteHandler = (userId) => {
    dispatch(deleteIncome(userId));
    dispatch(getIncomes());
  };

  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div className="w-full">
      <table>
        <thead>
          <tr className="py-3 px-2 border">
            <th className="py-3 px-2">Id</th>
            <th className="py-3 px-2">Name</th>
            <th className="py-3 px-2">Total</th>
            <th className="py-3 px-2">Category</th>
            <th className="py-3 px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income) => {
            const { id, name, total, category } = income;

            return (
              <tr key={id} className="border">
                <td className="py-2 px-3">{id}</td>
                <td className="py-2 px-3">{name}</td>
                <td className="py-2 px-3">{total}</td>
                <td className="py-2 px-3">{category}</td>
                <td className="py-2 px-3">
                  <button onClick={() => deleteHandler(id)} className="">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
