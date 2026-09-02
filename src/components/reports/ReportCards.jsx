import { useEffect, useState } from "react";
import {
  FiUsers,
  FiLayers,
  FiSend,
  FiFileText,
} from "react-icons/fi";

const ReportCards = () => {

  const [stats, setStats] = useState({
    customers: 0,
    groups: 0,
    broadcasts: 0,
    templates: 0,
  });

  useEffect(() => {

    const customers =
      JSON.parse(localStorage.getItem("lotteryCustomers")) || [];

    const groups =
      JSON.parse(localStorage.getItem("lotteryGroups")) || [];

    const templates =
      JSON.parse(localStorage.getItem("lotteryTemplates")) || [];

    const broadcasts =
      JSON.parse(localStorage.getItem("lotteryBroadcasts")) || [];

    setStats({
      customers: customers.length,
      groups: groups.length,
      broadcasts: broadcasts.length,
      templates: templates.length,
    });

  }, []);

  const cards = [
    {
      title: "Total Customers",
      value: stats.customers.toLocaleString(),
      icon: <FiUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Customer Groups",
      value: stats.groups.toLocaleString(),
      icon: <FiLayers />,
      color: "bg-green-500",
    },
    {
      title: "Broadcast Sent",
      value: stats.broadcasts.toLocaleString(),
      icon: <FiSend />,
      color: "bg-orange-500",
    },
    {
      title: "Templates",
      value: stats.templates.toLocaleString(),
      icon: <FiFileText />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {cards.map((card, index) => (

        <div
          key={index}
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.color} rounded-full p-4 text-2xl text-white`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default ReportCards;