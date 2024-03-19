import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthStatus } from "./features/auth/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  console.log(isAuthenticated)
  useEffect(() => {
    dispatch(fetchAuthStatus());
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}