import { useState } from "react";
import BroadcastForm from "../../components/broadcast/BroadcastForm";
import MessagePreview from "../../components/broadcast/MessagePreview";

const Broadcast = () => {

  const [formData, setFormData] = useState({
    campaignName: "",
    group: "VIP",
    message: "",
    sendType: "now",
    date: "",
    time: "",
    image: null,
  });

  return (
    <div className="grid gap-6 lg:grid-cols-3">

      <div className="lg:col-span-2">
        <BroadcastForm
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <div>
        <MessagePreview formData={formData} />
      </div>

    </div>
  );
};

export default Broadcast;