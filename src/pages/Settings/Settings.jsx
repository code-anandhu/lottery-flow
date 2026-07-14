import BusinessSettings from "../../components/settings/BusinessSettings.jsx";
import AppSettings from "../../components/settings/AppSettings.jsx";
import NotificationSettings from "../../components/settings/NotificationSettings.jsx";

const Settings = () => {
  return (
    <div className="space-y-6">

      <BusinessSettings />

      <div className="grid gap-6 lg:grid-cols-2 py-8">

        <AppSettings />

        {/* <NotificationSettings /> */}

      </div>

    </div>
  );
};

export default Settings;