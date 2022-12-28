import "./App.css";
import Footer from "./components/footer";
import PageHeader from "./components/header";
import Homepage from "./components/home";
import Register from "./components/register";
import React from "react";
import {  Routes, Route } from "react-router-dom";
import PageNotFound from "./components/helpers/PageNotFound";
import AdminOrUser from "./components/helpers/AdminOrUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import UserOrders from "./components/userorder/userorders";
import CreatOrder from "./components/userorder/creatorder";
import ProtectedRoute from "./components/helpers/protectedRoutes";
import DeleteCard from "./components/userorder/deleteorder";
import Reciveorder from "./components/workers/workersorders";
import MENUSIDBAR from "./components/workers/menursidbar"
import AdminPage from "./components/admin/adminpage";
import DeleteUser from "./components/admin/deleteuser";
import About from "./components/admin/about";
import './components/MENU/menu1/index.css';
import Menu1 from './components/MENU/menu1/App';
function App() {
  return (
    <>
      <div className="app d-flex  flex-column  min-vh-100 bg-site">
      <ToastContainer />
        <header>
        <PageHeader />
        </header>
        <main className="flex-fill mt-2">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu1" element={<Menu1 />} />
              <Route path="/all" element={<ProtectedRoute ADMIN><AdminPage/></ProtectedRoute>} />
              <Route path="register" element={<Register redirect={"/login"}/>} />
              <Route path="login" element={<AdminOrUser />} />
              <Route path="logout" element={<Logout redirect={"/"}/>} />
              <Route path="myorders" element={<ProtectedRoute onlyUsers><UserOrders/></ProtectedRoute>} />
              <Route path="creatorder" element={<ProtectedRoute onlyUsers><CreatOrder redirect={"/myorders"}/></ProtectedRoute>} />
              <Route path="MENIUSIDBAR" element={<ProtectedRoute OnlyWorkers><MENUSIDBAR/></ProtectedRoute>}/>
              <Route path="reciveorder" element={<ProtectedRoute OnlyWorkers><Reciveorder/></ProtectedRoute>}/>
              <Route path="/my-orders/delete/:id"element={<ProtectedRoute onlyUsers>  <DeleteCard /> </ProtectedRoute>}/>
              <Route path="/admin/delete/:id"element={<ProtectedRoute ADMIN><DeleteUser/></ProtectedRoute>} />
              <Route path="*" element={<PageNotFound />} /> </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
