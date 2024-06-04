import Dashboard from "../Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import AddtoCart from "../Pages/AddtoCart";
import Aboutus from "../Pages/Aboutus";
import PaymentSuccessful from "../Pages/PaymentSuccessful";
import ErrorPage from "../Pages/ErrorPage";
import urlpath from "./Constant";
import Contactus from "../Pages/Contactus";
import CommonLayout from "../Pages/CommonLayout";

const RoutePath = () => {
  const paths = [
    {
      path: urlpath.DASHBOARD,
      element: <Dashboard />,
    },

    {
      path: urlpath.SPECIFICPRODUCT,
      element: <Product />,
    },
    {
      path: urlpath.ADDTOCART,
      element: <AddtoCart />,
    },
    {
      path: urlpath.ABOUT,
      element: <Aboutus />,
    },
    {
      path: urlpath.CONTACT,
      element: <Contactus />,
    },
    {
      path: urlpath.PAYMENTSUCCESSFUL,
      element: <PaymentSuccessful />,
    },
    {
      path: urlpath.ERROR,
      element: <ErrorPage />,
    },
    {
      path: urlpath.COMMONLAYOUT,
      element: <CommonLayout />,
    },
  ];
  return (
    <>
      <Routes>
        {paths.map((link, index) => (
          <>
            <Route key={index} element={link.element} path={link.path} />
          </>
        ))}
      </Routes>
    </>
  );
};

export default RoutePath;
