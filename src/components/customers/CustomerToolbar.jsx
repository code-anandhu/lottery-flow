  import { FiPlus, FiSearch, FiUpload, FiDownload } from "react-icons/fi";
  import { useRef } from "react";

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

    const fileInputRef = useRef(null);

    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* Top Row */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage all your lottery customers
            </p>
          </div>

          {/* Right */}

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">

            {/* Search */}

            <div className="flex h-11 w-full min-w-0 items-center rounded-xl border border-gray-200 bg-gray-50/60 px-3.5 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 sm:w-64 lg:w-72">

              <FiSearch className="mr-2 shrink-0 text-gray-400" size={17} />

              <input
                type="text"
                placeholder="Search by name, phone or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>

            {/* Secondary actions */}

            <div className="flex flex-wrap items-center gap-2">

              <button
              type="button"
              onClick={()=>fileInputRef.current?.click()}
               className="flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gray-200 px-4 text-sm font-medium leading-none text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
                <FiUpload size={16} className="shrink-0" />
                <span>Import</span>
                <input
                ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  hidden
                  onChange={handleFileChange}
                />
              </button>

              <button
                onClick={onExport}
                className="flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <FiDownload size={16} className="shrink-0" />
                <span>Export</span>
              </button>

              <button
                onClick={onAddCustomer}
                className="flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 active:bg-blue-800"
              >
                <FiPlus size={17} className="shrink-0" />
                <span>Add Customer</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  };

  export default CustomerToolbar;