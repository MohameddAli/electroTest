import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export const ProtectedRoute = ({ children }) => {
//   if (localStorage.getItem("twitter-mern-user")) {
//     return children;
//   } else {
//     return <Navigate to="/" />;
//   }
// }
