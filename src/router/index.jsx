import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { CreateExpense, CreateIncome, Homepage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Homepage></Homepage>,
      },
      {
        path: "create",
        children: [
          {
            path: "income",
            element: <CreateIncome></CreateIncome>,
          },
          {
            path: "expense",
            element: <CreateExpense />,
          },
        ],
      },
    ],
  },
]);

export default router;
