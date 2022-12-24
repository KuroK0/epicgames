import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import BuyPage from "../pages/BuyPage";
import EditProductPage from "../pages/EditProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import AuthPage from "../pages/AuthPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <ProductsPage />, id: 1 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/products/:id", element: <ProductDetailsPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
    { link: "/edit/:id", element: <EditProductPage />, id: 6 },
    { link: "/buy", element: <BuyPage />, id: 7 },
    { link: "/auth", element: <AuthPage />, id: 8 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
