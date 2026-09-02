import { useEffect, useState } from "react";

const RecentActivity = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {

    const savedActivities =
      JSON.parse(localStorage.getItem("lotteryActivities")) || [];

    setActivities(savedActivities.slice(0, 5));

  }, []);

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Recent Activity
      </h2>

      <div className="flex flex-col gap-4">

        {activities.length > 0 ? (

          activities.map((activity, index) => (

            <div
              key={index}
              className="rounded-lg border border-gray-200 p-4 text-gray-700 transition-colors hover:bg-gray-50"
            >
              {activity}
            </div>

          ))

        ) : (

          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
            No recent activity
          </div>

        )}

      </div>

    </div>
  );
};

export default RecentActivity;