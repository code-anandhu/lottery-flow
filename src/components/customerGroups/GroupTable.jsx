import { FiEdit2, FiTrash2 } from "react-icons/fi";

const GroupTable = ({ groups, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">Group Name</th>
            <th className="px-6 py-4 text-left">Description</th>
            <th className="px-6 py-4 text-left">Members</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {groups.map((group) => (
            <tr
              key={group.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="px-6 py-5">
                <div className="flex items-center gap-3">

                  <span
                    className={`h-4 w-4 rounded-full ${
                      group.color === "green"
                        ? "bg-green-500"
                        : group.color === "blue"
                        ? "bg-blue-500"
                        : group.color === "red"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  />

                  <span className="font-medium">
                    {group.name}
                  </span>

                </div>
              </td>

              <td className="px-6 py-5">
                {group.description}
              </td>

              <td className="px-6 py-5">
                {group.members}
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-4">

                  {/* Edit */}
                  <button
                    onClick={() => onEdit(group)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FiEdit2 />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => onDelete(group)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 />
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default GroupTable;