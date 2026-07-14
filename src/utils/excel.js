import * as XLSX from "xlsx";

/* ===========================
   EXPORT CUSTOMERS
=========================== */

export const exportCustomers = (customers) => {

  const exportData = customers.map((customer) => ({
    "Full Name": customer.fullName,
    "WhatsApp": customer.whatsapp,
    "Email": customer.email,
    "Group": customer.group,
    "Status": customer.status,
    "Joined": customer.joined,
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Customers"
  );

  XLSX.writeFile(workbook, "customers.xlsx");

};

// IMPORT CUSTOMERS 

/* ===========================
   IMPORT CUSTOMERS
=========================== */

export const importCustomers = (file, callback) => {

  const reader = new FileReader();

  reader.onload = (event) => {

    const data = new Uint8Array(event.target.result);

    const workbook = XLSX.read(data, {
      type: "array",
    });

    const sheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[sheetName];

    const json = XLSX.utils.sheet_to_json(worksheet);

    const customers = json.map((row, index) => ({
      id: Date.now() + index,
      fullName: row["Full Name"] || "",
      whatsapp: String(row["WhatsApp"] || ""),
      email: row["Email"] || "",
      group: row["Group"] || "Regular",
      status: row["Status"] || "Active",
      joined:
        row["Joined"] ||
        new Date().toLocaleDateString(),
    }));

    callback(customers);

  };

  reader.readAsArrayBuffer(file);

};