import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import {Suspense, lazy} from 'react';
//import {Home} from './pages/Home';
//import {NotFound} from './pages/NotFound';
//import { ProductDetails } from './pages/ProductDetails';
//import { News } from './pages/News';
//import { Products } from './pages/Products';
//import { Contact } from './pages/Contact';
//import { About } from './pages/About';
//import { NewsDashboard } from './pages/NewsDashboard';
//import { ArticleUploadForm } from './pages/ArticleUploadForm';
//import { Search } from './pages/Search';
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Search = lazy(() => import('./pages/Search'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="san-pham" element={<ProductDetails />} />
            <Route path="danh-muc-san-pham" element={<Products />} />
            <Route path="tin-tuc" element={<News />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="gioi-thieu" element={<About />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
