import { FiPlus, FiSearch, FiDownload, FiUpload } from "react-icons/fi";

const CustomerToolbar = ({
  onAddCustomer,
  searchTerm,
  setSearchTerm,
  onExport,
  onImport,
}) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    onImport(file);

    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Top Row */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold text-gray-800">
            Customers
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage all your lottery customers
          </p>

        </div>

        {/* Right */}

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">

          {/* Search */}

          <div className="flex h-11 w-full min-w-0 items-center rounded-lg border border-gray-300 px-3 lg:w-80">

            <FiSearch className="mr-2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by name, phone or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

          {/* Import */}

          <label className="flex h-11 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-5 text-sm font-medium transition hover:bg-gray-100">

            {/* <FiUpload className="" /> */}

          <p className="py-3">  Import</p>

            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              hidden
              onChange={handleFileChange}
            />

          </label>

          {/* Export */}

          <button
            onClick={onExport}
            className="flex h-11 items-center gap-2 rounded-lg border border-gray-300 px-5 text-sm font-medium transition hover:bg-gray-100"
          >

            {/* <FiDownload /> */}

            Export

          </button>

          {/* Add Customer */}

          <button
            onClick={onAddCustomer}
            className="flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
          >

            <FiPlus />

            Add Customer

          </button>

        </div>

      </div>

    </div>
  );
};

export default CustomerToolbar;