import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../redux";

const CreateIncome = () => {
  const [form, setform] = useState({
    name: "",
    total: 0,
    category: "",
  });
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addIncome(form))

  };
  const dispatch = useDispatch()

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setform({ ...form, name: e.target.value })}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name your income"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="total"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total
          </label>
          <input
            type="text"
            onChange={(e) => setform({ ...form, total: e.target.value })}
            id="total"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            onChange={(e) => setform({ ...form, category: e.target.value })}
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateIncome;
