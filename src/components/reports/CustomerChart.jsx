import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomerChart = () => {

  const data = [
    {
      month: "Jan",
      customers: 820,
    },
    {
      month: "Feb",
      customers: 900,
    },
    {
      month: "Mar",
      customers: 980,
    },
    {
      month: "Apr",
      customers: 1050,
    },
    {
      month: "May",
      customers: 1120,
    },
    {
      month: "Jun",
      customers: 1245,
    },
  ];

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Customer Growth
      </h2>

      <div className="h-72 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="customers"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default CustomerChart;