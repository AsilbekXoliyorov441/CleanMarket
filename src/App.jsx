import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Layout from "./components/layout";
import HomePage from "./pages/HomePage"
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from "./pages/CartPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="products" element={<ProductsPage />}/>
          <Route path="products/:id" element={<CartPage />} />
          <Route path="about"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
