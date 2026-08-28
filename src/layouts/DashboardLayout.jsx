import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50
          transform transition-transform duration-300
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Right Side */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page */}
        <main className="min-w-0 flex-1 overflow-auto bg-gray-100 p-3 sm:p-4 lg:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;