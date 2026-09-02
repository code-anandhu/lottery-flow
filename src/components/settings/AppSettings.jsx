import { useEffect, useState } from "react";

const AppSettings = () => {

  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("appSettings");

    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          theme: "Light",
          language: "English",
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "appSettings",
      JSON.stringify(settings)
    );
  }, [settings]);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Application Settings
      </h2>

      <div className="space-y-5">

        {/* Theme */}

        <div>

          <label className="mb-2 block">
            Theme
          </label>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>

        </div>

        {/* Language */}

        <div>

          <label className="mb-2 block">
            Language
          </label>

          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>

        </div>

      </div>

    </div>
  );
};

export default AppSettings;