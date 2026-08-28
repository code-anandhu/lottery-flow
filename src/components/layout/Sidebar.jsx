import {
    FiGrid,
    FiUsers,
    FiLayers,
    FiSend,
    FiFileText,
    FiBarChart2,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
    const navigate = useNavigate();
    const handleLogout = () => {

        // Later you can remove token here
        // localStorage.removeItem("token");

        navigate("/");
    };

    return (
        <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-blue-950">

            {/* Logo */}

            <div className="h-20 flex items-center px-6 border-b">
                <h1 className="text-2xl font-bold text-white">
                    <FaBookReader className="h-5" /> Lottery Flow
                </h1>

                <button
                    onClick={onClose}
                    className="text-white text-2xl md:hidden"
                >
                    ✕
                </button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 py-6">

                <ul className="space-y-2 px-4">

                    {/* <li className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-600 text-white cursor-pointer">
                        <FiGrid />
                        Dashboard
                    </li> */}

                    <NavLink
                        to="/customers"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiLayers />
                        Customers
                    </NavLink>

                    <NavLink
                        to="/customer-groups"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiLayers />
                        Customer Groups
                    </NavLink>

                    <NavLink
                        to="/broadcast"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiSend />
                        Broadcast
                    </NavLink>

                    <NavLink
                        to="/templates"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiFileText />
                        Templates
                    </NavLink>

                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiBarChart2 />
                        Reports
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                ? "bg-gray-600 text-white font-medium"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`
                        }
                    >
                        <FiSettings />
                        Settings
                    </NavLink>

                </ul>

            </nav>

            {/* Logout */}

            <div className="p-4 border-t">

                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-500 hover:bg-amber-50 text-black  transition">

                    <FiLogOut />

                    Logout

                </button>

            </div>

        </aside>
    );
};

export default Sidebar;