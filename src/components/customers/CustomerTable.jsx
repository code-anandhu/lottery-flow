import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const CustomerTable = ({
    customers,
    onView,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            <table className="min-w-full">

                {/* Table Header */}

                <thead className="bg-gray-50">

                    <tr className="text-left text-sm font-semibold text-gray-700">

                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Phone</th>
                        <th className="px-6 py-4">Group</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Joined</th>
                        <th className="px-6 py-4 text-center">Actions</th>

                    </tr>

                </thead>

                {/* Table Body */}

                <tbody>

                    {customers.length === 0 ? (

                        <tr>

                            <td
                                colSpan="6"
                                className="py-10 text-center text-gray-500"
                            >
                                No customers found.
                            </td>

                        </tr>

                    ) : (

                        customers.map((customer) => (

                            <tr
                                key={customer.id}
                                className="border-t hover:bg-gray-50 transition"
                            >

                                {/* Customer */}

                                <td className="px-6 py-5">

                                    <div>

                                        <p className="font-semibold text-gray-800">
                                            {customer.fullName}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {customer.email}
                                        </p>

                                    </div>

                                </td>

                                {/* Phone */}

                                <td className="px-6 py-5">
                                    {customer.whatsapp}
                                </td>

                                {/* Group */}

                                <td className="px-6 py-5">

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">

                                        {customer.group}

                                    </span>

                                </td>

                                {/* Status */}

                                <td className="px-6 py-5">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${customer.status === "Inactive"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-green-100 text-green-700"
                                            }`}
                                    >

                                        {customer.status || "Active"}

                                    </span>

                                </td>

                                {/* Joined */}

                                <td className="px-6 py-5">

                                    {customer.joined || "-"}

                                </td>

                                {/* Actions */}

                                <td className="px-6 py-5">

                                    <div className="flex justify-center gap-4">

                                        <button
                                            onClick={() => onView?.(customer)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FiEye size={18} />
                                        </button>

                                        <button
                                            onClick={() => onEdit?.(customer)}
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <FiEdit2 size={18} />
                                        </button>

                                        <button
                                            onClick={() => onDelete?.(customer)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default CustomerTable;