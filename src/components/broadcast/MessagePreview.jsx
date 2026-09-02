const MessagePreview = ({ formData }) => {

  const imageUrl = formData.image
    ? URL.createObjectURL(formData.image)
    : null;

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        WhatsApp Preview
      </h2>

      <div className="rounded-xl bg-gray-100 p-4">

        {/* Campaign Name */}
        {formData.campaignName && (
          <h3 className="mb-3 font-bold text-gray-800">
            {formData.campaignName}
          </h3>
        )}

        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Broadcast"
            className="mb-3 w-full rounded-lg object-cover"
          />
        )}

        {/* Message */}
        {formData.message ? (
          <div className="rounded-lg bg-green-100 p-3 text-gray-800">
            {formData.message}
          </div>
        ) : (
          <div className="rounded-lg bg-white p-3 text-gray-400">
            Your message will appear here...
          </div>
        )}

        {/* Group */}
        <p className="mt-2 text-sm text-gray-500">
          To: {formData.group}
        </p>

      </div>

    </div>
  );
};

export default MessagePreview;