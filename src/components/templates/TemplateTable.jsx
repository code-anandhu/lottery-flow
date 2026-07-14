import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TemplateTable = ({ templates }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Template
            </th>

            <th className="px-6 py-4 text-left">
              Category
            </th>

            <th className="px-6 py-4 text-left">
              Message
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {templates.map((template) => (

            <tr
              key={template.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="px-6 py-5">
                {template.name}
              </td>

              <td className="px-6 py-5">
                {template.category}
              </td>

              <td className="px-6 py-5">
                {template.message.slice(0, 40)}...
              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-4">

                  <button className="text-green-600">
                    <FiEdit2 />
                  </button>

                  <button className="text-red-600">
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

export default TemplateTable;