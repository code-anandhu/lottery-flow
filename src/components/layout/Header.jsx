import {
  FiChevronDown,
  FiMenu,
  FiArrowLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <header className="flex min-h-16 shrink-0 items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:min-h-20 sm:px-6 lg:px-8">

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

        {/* Fixed Header Title */}
        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-slate-800 sm:text-2xl lg:text-3xl">
            LotteryFlow Admin
          </h1>

          <p className="mt-1 hidden text-sm text-gray-500 sm:block">
            Manage your business efficiently.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-1 sm:gap-3">

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl px-1 py-2 transition hover:bg-gray-200 sm:gap-3 sm:px-3">

          {/* Avatar */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-11 sm:w-11">
            A
          </div>

          {/* Profile Details */}
          <div className="hidden text-left sm:block">
            <h3 className="text-sm font-semibold text-slate-800">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          {/* Arrow */}
          <FiChevronDown
            className="hidden text-gray-500 sm:block"
            size={16}
          />

        </button>

      </div>

    </header>
  );
};

export default Header;