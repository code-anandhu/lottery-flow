import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full gap-4 overflow-hidden bg-slate-100 p-3 sm:p-4">

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
          fixed inset-y-3 left-3 z-50
           h-[calc(100vh-1.5rem)]
          transform transition-transform duration-300
          md:static md:inset-y-0 md:left-0 md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)] md:translate-x-0"}
        `}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Right Side */}
      <div className="flex min-w-0 flex-1 flex-col gap-4">

        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page */}
        <main className="min-w-0 flex-1 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;