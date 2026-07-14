import { useState } from "react";

const BusinessSettings = () => {
  const [formData, setFormData] = useState({
    company: "Lottery Flow",
    owner: "Anandhu",
    whatsapp: "+91 9876543210",
    email: "admin@gmail.com",
    address: "Kochi, Kerala",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Business Information
      </h2>

      {/* Grid wrapper for all inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />

        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          placeholder="Owner Name"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />

        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="WhatsApp Number"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />

        {/* Textarea moved inside the grid, spanning full width on medium screens and up */}
        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 md:col-span-2"
        />
      </div>

      <div className="mt-6 flex justify-start py-3">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-800">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default BusinessSettings;