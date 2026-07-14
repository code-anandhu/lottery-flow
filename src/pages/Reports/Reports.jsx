import ReportCards from "../../components/reports/ReportCards";
import RecentActivity from "../../components/reports/RecentActivity";
import CustomerChart from "../../components/reports/CustomerChart";

const Reports = () => {
  return (
    <div className="space-y-6 ">

      <ReportCards  />

      <div className="grid gap-6 lg:grid-cols-2 py-8">

        <CustomerChart />

        <RecentActivity />

      </div>

    </div>
  );
};

export default Reports;