const NotificationSettings = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Notifications
      </h2>

      <div className="space-y-4">

        <label className="flex items-center justify-between">

          Email Notifications

          <input type="checkbox" defaultChecked />

        </label>

        <label className="flex items-center justify-between">

          WhatsApp Notifications

          <input type="checkbox" defaultChecked />

        </label>

      </div>

    </div>
  );
};

export default NotificationSettings;