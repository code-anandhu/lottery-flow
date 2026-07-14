import { useState } from "react";

const BroadcastForm = () => {

  const [formData, setFormData] = useState({
    campaignName: "",
    group: "VIP",
    message: "",
    sendType: "now",
    date: "",
    time: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = () => {
    alert("Broadcast Created Successfully");
    console.log(formData);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Create Broadcast
      </h2>

      <div className="space-y-5">

        {/* Campaign */}

        <div>
          <label className="mb-2 block font-medium">
            Campaign Name
          </label>

          <input
            type="text"
            name="campaignName"
            value={formData.campaignName}
            onChange={handleChange}
            placeholder="Onam Offer"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Group */}

        <div>

          <label className="mb-2 block font-medium">
            Customer Group
          </label>

          <select
            name="group"
            value={formData.group}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>VIP</option>
            <option>Regular</option>
            <option>New Customer</option>
            <option>Festivel Offer</option>
            <option>Daily Player</option>
            <option>Weekly Player</option>
            <option>High value</option>
          </select>

        </div>

        {/* Message */}

        <div>

          <label className="mb-2 block font-medium">
            Message
          </label>

          <textarea
            rows={7}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your WhatsApp message..."
            className="w-full rounded-lg border p-3"
          />

        </div>

        {/* Upload */}

        <div>

          <label className="mb-2 block font-medium">
            Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full rounded-lg border p-2"
          />

        </div>

        {/* Send Type */}

        <div>

          <label className="mb-3 block font-medium">
            Send
          </label>

          <div className="flex gap-6">

            <label>

              <input
                type="radio"
                name="sendType"
                value="now"
                checked={formData.sendType === "now"}
                onChange={handleChange}
              />

              <span className="ml-2">
                Send Now
              </span>

            </label>

            <label>

              <input
                type="radio"
                name="sendType"
                value="schedule"
                checked={formData.sendType === "schedule"}
                onChange={handleChange}
              />

              <span className="ml-2">
                Schedule
              </span>

            </label>

          </div>

        </div>

        {/* Date */}

        {formData.sendType === "schedule" && (

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="rounded-lg border p-3"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="rounded-lg border p-3"
            />

          </div>

        )}

        {/* Button */}

        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Send Broadcast
        </button>

      </div>

    </div>
  );
};

export default BroadcastForm;