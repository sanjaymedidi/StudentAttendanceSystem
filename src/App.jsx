import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Summary from "./pages/Summary";
import TakeAttendance from "./pages/TakeAttendance";
import ContactPage from "./pages/ContactPage";
import StudentDashboard from "./pages/StudentDashboard";
function App() {
  return (
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} /> 
          <Route path="summary" element={<Summary />} />
          <Route path="dashboard" element={<TakeAttendance/>} />
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="studenthistory" element={<StudentDashboard />} />
        

        </Route>
      </Routes>
  );
}

export default App;
