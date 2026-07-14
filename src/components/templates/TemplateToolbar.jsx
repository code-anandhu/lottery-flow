import { FiPlus, FiSearch } from "react-icons/fi";

const TemplateToolbar = ({
  searchTerm,
  setSearchTerm,
  onAddTemplate,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-2xl font-bold text-gray-800">
            Templates
          </h1>

          <p className="mt-1 text-gray-500">
            Manage WhatsApp message templates
          </p>

        </div>

        <div className="flex gap-3">

          <div className="flex h-11 w-80 items-center rounded-lg border px-3">

            <FiSearch className="mr-2 text-gray-400" />

            <input
              type="text"
              placeholder="Search template..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none"
            />

          </div>

          <button
            onClick={onAddTemplate}
            className="flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-white hover:bg-blue-800"
          >
            <FiPlus />
            Add Template
          </button>

        </div>

      </div>

    </div>
  );
};

export default TemplateToolbar;