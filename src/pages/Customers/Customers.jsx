import { useState } from "react";
import CustomerToolbar from "../../components/customers/CustomerToolbar";
import CustomerTable from "../../components/customers/CustomerTable";
import AddCustomerDrawer from "../../components/customers/AddCustomerDrawer";
import DeleteCustomerModal from "../../components/customers/DeleteCustomerModal";
import { exportCustomers , importCustomers } from "../../utils/excel";




const Customers = () => {

    // Customer List
    const [customers, setCustomers] = useState([
        {
            id: 1,
            fullName: "Rahul Kumar",
            whatsapp: "9876543210",
            email: "rahul@gmail.com",
            group: "VIP",
        },
        {
            id: 2,
            fullName: "Amal Joseph",
            whatsapp: "9123456789",
            email: "amal@gmail.com",
            group: "REGULAR",
        },
    ]);

    // Drawer State
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Add Customer Function
 const addCustomer = (customer) => {
  setCustomers((prevCustomers) => [
    {
      id: Date.now(),
      ...customer,
    },
    ...prevCustomers,
  ]);
};

    const handleEdit = (customer) => {
        setEditingCustomer(customer);
        setDrawerOpen(true);
    };

    const updateCustomer = (updatedCustomer) => {

        setCustomers((prev) =>
            prev.map((customer) =>
                customer.id === updatedCustomer.id
                    ? updatedCustomer
                    : customer
            )
        );

    };

    const handleDeleteClick = (customer) => {

        setSelectedCustomer(customer);

        setDeleteModal(true);

    };

    const deleteCustomer = () => {

        setCustomers((prev) =>
            prev.filter(
                (customer) => customer.id !== selectedCustomer.id
            )
        );

        setDeleteModal(false);

        setSelectedCustomer(null);

    };

    const filteredCustomers = customers.filter((customer) => {

        const search = searchTerm.toLowerCase();

        return (
            customer.fullName.toLowerCase().includes(search) ||
            customer.whatsapp.includes(search) ||
            customer.email.toLowerCase().includes(search) ||
            customer.group.toLowerCase().includes(search)
        );

    });

    const handleImport = (file) => {

  importCustomers(file, (newCustomers) => {

    setCustomers((prev) => [
      ...prev,
      ...newCustomers,
    ]);

    alert(
      `${newCustomers.length} customers imported successfully`
    );

  });

};

    return (
        <div className="space-y-6">

            <CustomerToolbar
                onAddCustomer={() => setDrawerOpen(true)}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                onExport={() => exportCustomers(customers)}
                onImport={handleImport}
            />

      <div className="py-4">
                <CustomerTable
                    customers={filteredCustomers}
                    onEdit={handleEdit}
                    onDelete={handleDeleteClick}
    
                />
      </div>

            <AddCustomerDrawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                    setEditingCustomer(null);
                }}
                addCustomer={addCustomer}
                editingCustomer={editingCustomer}
                updateCustomer={updateCustomer}
            />

            <DeleteCustomerModal

                open={deleteModal}

                customer={selectedCustomer}

                onClose={() => setDeleteModal(false)}

                onConfirm={deleteCustomer}

            />

        </div>
    );
};

export default Customers;