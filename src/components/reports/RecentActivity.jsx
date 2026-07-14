const RecentActivity = () => {
  const activities = [
    "New customer Rahul added",
    "Broadcast 'Onam Offer' sent",
    "VIP Group created",
    "Template updated",
    "Customer deleted",
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Recent Activity
      </h2>

      {/* Changed space-y-4 to flex flex-col gap-4 for bulletproof spacing */}
      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            // Explicitly added border-gray-200 for a clean, thin look
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50 text-gray-700"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;