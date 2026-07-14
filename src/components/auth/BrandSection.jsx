import {
  FiCheckCircle,
  FiMessageCircle,
  FiUsers,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

const BrandSection = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white p-16">

      <span className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 py-6">
        SaaS Platform
      </span>

      <h1 className="text-5xl font-bold leading-tight">
        LotteryFlow
      </h1>

      <h2 className="mt-5 text-3xl font-semibold leading-snug">
        Manage Kerala Lottery
        <br />
        Bookings Seamlessly
      </h2>

      <p className="mt-8 max-w-lg text-lg leading-8 text-blue-100 py-5">
        The complete SaaS platform for managing lottery bookings through
        WhatsApp. Streamline operations, engage customers and grow your
        business from a single dashboard.
      </p>

      <div className="mt-12 space-y-5">

        <div className="flex items-center gap-3 p-2">
          <FiMessageCircle className="text-2xl" />
          <span>WhatsApp-powered booking management</span>
        </div>

        <div className="flex items-center gap-3 p-2">
          <FiUsers className="text-2xl" />
          <span>Real-time customer communication</span>
        </div>

        <div className="flex items-center gap-3 p-2">
          <FiBarChart2 className="text-2xl" />
          <span>Advanced analytics and reporting</span>
        </div>

        <div className="flex items-center gap-3 p-2">
          <FiShield className="text-2xl" />
          <span>Bank-grade security and compliance</span>
        </div>

      </div>

      <div className=" rounded-2xl bg-white/10 p-6 backdrop-blur-md ">

        <div className="flex items-center gap-3 ">

          <FiCheckCircle className="text-2xl text-green-300" />

          <p className="text-blue-50">
            Trusted platform for managing customers, broadcasts,
            templates and reports.
          </p>

        </div>

      </div>

    </div>
  );
};

export default BrandSection;