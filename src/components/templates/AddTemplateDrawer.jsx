import { useState } from "react";

const AddTemplateDrawer = ({ open, onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    category: "Promotion",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="flex h-screen w-full max-w-lg flex-col bg-white">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Add Template
          </h2>

          <button onClick={onClose}>
            ✕
          </button>

        </div>

        <div className="flex-1 space-y-5 p-6 py-3">

          <input
            type="text"
            name="name"
            placeholder="Template Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

    <div className="py-4">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 py-3"
              >
    
                <option>Promotion</option>
    
                <option>Result</option>
    
                <option>Reminder</option>
    
              </select>
    </div>

        <div className="py-2">
              <textarea
                rows="8"
                name="message"
                placeholder="Type template message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
        </div>

        </div>

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            className="rounded-lg bg-blue-600 px-6 py-2 text-white"
          >
            Save Template
          </button>

        </div>

      </div>

    </div>

  );
};

export default AddTemplateDrawer;