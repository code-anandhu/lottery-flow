import {
  FiSearch,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  const pageTitle = {
    "/customers": "Customers",
    "/customer-groups": "Customer Groups",
    "/broadcast": "Broadcast",
    "/templates": "Templates",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8 shadow-sm">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          {pageTitle[location.pathname] || "Dashboard"}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, manage your business efficiently.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="flex h-11 w-72 items-center rounded-xl border border-gray-200 px-4">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border p-3 hover:bg-gray-100">

          <FiBell className="text-xl text-gray-600" />

          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl  px-3 py-2 hover:bg-gray-100">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            A
          </div>

          <div className="text-left">

            <h3 className="font-semibold text-slate-800">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>

          </div>

          <FiChevronDown className="text-gray-500" />

        </button>

      </div>

    </header>
  );
};

export default Header;