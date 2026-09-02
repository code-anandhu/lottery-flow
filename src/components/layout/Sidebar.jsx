import {
    FiLayers,
    FiSend,
    FiFileText,
    FiBarChart2,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

const navItems = [
    { to: "/customers", label: "Customers", icon: FiLayers },
    { to: "/customer-groups", label: "Customer Groups", icon: FiLayers },
    { to: "/broadcast", label: "Broadcast", icon: FiSend },
    { to: "/templates", label: "Templates", icon: FiFileText },
    { to: "/reports", label: "Reports", icon: FiBarChart2 },
    { to: "/settings", label: "Settings", icon: FiSettings },
];

const Sidebar = ({ onClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Later you can remove token here
        // localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <aside className="flex h-full w-64 flex-col overflow-hidden rounded-2xl bg-blue-950 shadow-lg">

            {/* Logo */}

            <div className="flex h-20 shrink-0 items-center justify-between px-6">

                <div className="flex items-center gap-2 text-white">
                    <FaBookReader size={20} />
                    <h1 className="text-xl font-bold">Lottery Flow</h1>
                </div>

                <button
                    onClick={onClose}
                    className="text-white text-2xl md:hidden"
                >
                    ✕
                </button>

            </div>

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto px-4 py-4">

                <ul className="space-y-1.5">

                    {navItems.map(({ to, label, icon: Icon }) => (

                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${isActive
                                        ? "bg-blue-600 font-medium text-white shadow-sm"
                                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={18} />
                                {label}
                            </NavLink>
                        </li>

                    ))}

                </ul>

            </nav>

            {/* Logout */}

            <div className="shrink-0 border-t border-white/10 p-4">

                <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 text-sm font-semibold text-white transition hover:bg-red-500/90"
                >
                    <FiLogOut size={17} />
                    Logout
                </button>

            </div>

        </aside>
    );
};

export default Sidebar;