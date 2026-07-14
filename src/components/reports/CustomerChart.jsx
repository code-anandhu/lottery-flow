const CustomerChart = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Customer Growth
      </h2>

      <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-gray-300 text-gray-400 bg-gray-50/50">
        <div className="text-center">
          <span className="block text-xl mb-1">📈</span>
          <p className="font-medium text-gray-500">Customer Growth Chart</p>
          <span className="text-xs text-gray-400">(Chart.js / Recharts Integration Later)</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerChart;