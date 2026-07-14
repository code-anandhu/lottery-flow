import { useState } from "react";

const AddGroupDrawer = ({ open, onClose, addGroup }) => {

  const initialData = {
    name: "",
    description: "",
    color: "green",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {

    if (!formData.name.trim()) {
      alert("Group name is required");
      return;
    }

    addGroup({
      id: Date.now(),
      ...formData,
      members: 0,
    });

    setFormData(initialData);

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="flex h-screen w-full max-w-md flex-col bg-white">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Add Group
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-5 p-6">

          <div>

            <label className="mb-2 block">
              Group Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block">
              Color
            </label>

            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            >
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
            </select>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-2 text-white"
          >
            Save Group
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddGroupDrawer;