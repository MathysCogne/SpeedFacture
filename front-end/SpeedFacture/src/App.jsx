// IMPORTS 
import { Route, Routes } from "react-router-dom";

// // Layouts / Pages / Components
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signin from "./pages/SignIn/Signin";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
  
        <Route path="*" element={<Error />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
