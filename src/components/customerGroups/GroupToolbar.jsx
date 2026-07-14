import { FiPlus, FiSearch } from "react-icons/fi";

const GroupToolbar = ({ onAddGroup, searchTerm, setSearchTerm }) => {


  


  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold text-gray-800">
            Customer Groups
          </h1>

          <p className="mt-1 text-gray-500">
            Manage customer categories
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-80 items-center rounded-lg border border-gray-300 px-3">

            <FiSearch className="mr-2 text-gray-400" />

            <input
              type="text"
              placeholder="Search group..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none"
            />

          </div>

          <button
            onClick={onAddGroup}
            className="flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-white hover:bg-blue-800"
          >
            <FiPlus />
            Add Group
          </button>

        </div>

      </div>

    </div>
  );
};

export default GroupToolbar;