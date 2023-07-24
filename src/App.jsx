import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// import components for the layout
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

// import pages for the outlet
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
