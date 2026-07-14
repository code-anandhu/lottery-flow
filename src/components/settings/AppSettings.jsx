const AppSettings = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Application Settings
      </h2>

      <div className="space-y-5">

        <div>

          <label className="mb-2 block">
            Theme
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Light</option>
            <option>Dark</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block">
            Language
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>English</option>
            <option>Malayalam</option>
          </select>

        </div>

      </div>

    </div>
  );
};

export default AppSettings;