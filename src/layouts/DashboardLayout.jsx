import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <Header />

        {/* Page */}
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;