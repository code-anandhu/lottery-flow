import {
  FiUsers,
  FiLayers,
  FiSend,
  FiFileText,
} from "react-icons/fi";

const ReportCards = () => {
  const cards = [
    {
      title: "Total Customers",
      value: "1,245",
      icon: <FiUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Customer Groups",
      value: "8",
      icon: <FiLayers />,
      color: "bg-green-500",
    },
    {
      title: "Broadcast Sent",
      value: "152",
      icon: <FiSend />,
      color: "bg-orange-500",
    },
    {
      title: "Templates",
      value: "12",
      icon: <FiFileText />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
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
            <div className={`${card.color} rounded-full p-4 text-2xl text-white`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;