import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import CustomerGroups from "../pages/CustomerGroups/CustomerGroups.jsx";
import Broadcast from "../pages/Broadcast/Broadcast";
import Templates from "../pages/Templates/Templates.jsx";
import Reports from "../pages/Reports/Reports.jsx";
import Settings from "../pages/Settings/Settings.jsx";


const AppRoutes = () => {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* dashboard */}
         <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/customer-groups" element={<CustomerGroups />} />

           <Route path="/broadcast" element={<Broadcast />} />

            <Route path="/templates" element={<Templates />} />

             <Route path="/reports" element={<Reports />} />

              <Route path="/settings" element={<Settings />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;