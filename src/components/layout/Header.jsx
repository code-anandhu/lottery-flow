import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiMenu,
  FiArrowLeft,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = {
    "/customers": "Customers",
    "/customer-groups": "Customer Groups",
    "/broadcast": "Broadcast",
    "/templates": "Templates",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  return (
    <header className="flex min-h-16 items-center justify-between border-b bg-white px-3 py-3 shadow-sm sm:min-h-20 sm:px-6 lg:px-8">

      {/* Left */}
      <div className="flex min-w-0 items-center gap-2">

        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Go back"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* Title */}
        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-slate-800 sm:text-2xl lg:text-3xl">
            {pageTitle[location.pathname] || "Dashboard"}
          </h1>

          <p className="mt-1 hidden text-sm text-gray-500 sm:block">
            Welcome back, manage your business efficiently.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-1 sm:gap-3 lg:gap-6">

        {/* Desktop Search */}
        <div className="hidden h-11 w-72 items-center rounded-xl border border-gray-200 px-4 lg:flex">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full outline-none"
          />

        </div>

        {/* Mobile / Tablet Search */}
        <button
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Search"
        >
          <FiSearch size={20} />
        </button>

        {/* Notification */}
        <button
          className="relative rounded-lg border p-2 hover:bg-gray-100 sm:p-3"
          aria-label="Notifications"
        >

          <FiBell className="text-lg text-gray-600 sm:text-xl" />

          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />

        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl px-1 py-2 hover:bg-gray-100 sm:gap-3 sm:px-3">

          {/* Avatar */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-11 sm:w-11">
            A
          </div>

          {/* Profile Details */}
          <div className="hidden text-left sm:block">

            <h3 className="font-semibold text-slate-800">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>

          </div>

          {/* Arrow */}
          <FiChevronDown className="hidden text-gray-500 sm:block" />

        </button>

      </div>

    </header>
  );
};

export default Header;