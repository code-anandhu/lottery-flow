import { useEffect, useState } from "react";

const AddTemplateDrawer = ({
  open,
  onClose,
  addTemplate,
  editingTemplate,
  updateTemplate,
}) => {

  const initialData = {
    name: "",
    category: "Promotion",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {

    if (editingTemplate) {

      setFormData({
        name: editingTemplate.name,
        category: editingTemplate.category,
        message: editingTemplate.message,
      });

    } else {

      setFormData(initialData);

    }

  }, [editingTemplate, open]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    if (!formData.name.trim()) {
      alert("Template name is required");
      return;
    }

    if (!formData.message.trim()) {
      alert("Template message is required");
      return;
    }

    // Edit
    if (editingTemplate) {

      updateTemplate({
        ...editingTemplate,
        ...formData,
      });

      alert("Template updated successfully");

    }

    // Add
    else {

      addTemplate({
        id: Date.now(),
        ...formData,
      });

      alert("Template created successfully");

    }

    setFormData(initialData);

    onClose();
  };

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="flex h-screen w-full max-w-lg flex-col bg-white">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            {editingTemplate
              ? "Edit Template"
              : "Add Template"}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-5 p-6 py-3">

          {/* Name */}

          <input
            type="text"
            name="name"
            placeholder="Template Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          {/* Category */}

          <div className="py-4">

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            >

              <option value="Promotion">
                Promotion
              </option>

              <option value="Result">
                Result
              </option>

              <option value="Reminder">
                Reminder
              </option>

            </select>

          </div>

          {/* Message */}

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
            className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            {editingTemplate
              ? "Update Template"
              : "Save Template"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddTemplateDrawer;