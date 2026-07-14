import { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";

const initialFormData = {
  fullName: "",
  whatsapp: "",
  email: "",
  group: "Regular",
  status: "Active",
  joined: new Date().toLocaleDateString(),
};



const AddCustomerDrawer = ({ open, onClose, addCustomer , editingCustomer, updateCustomer, }) => {

const [formData, setFormData] = useState(initialFormData);




    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

const handleSave = () => {

  if (!formData.fullName || !formData.whatsapp) {
    alert("Please fill all required fields");
    return;
  }

  if (editingCustomer) {

    updateCustomer(formData);

  } else {

    addCustomer({
      ...formData,
      id: Date.now(),
    });

  }

  setFormData(initialFormData);

  handleClose();

};



const handleClose = () => {

  setFormData(initialFormData);

  onClose();

};


    useEffect(() => {

  if (editingCustomer) {

    setFormData(editingCustomer);

  } else {

      setFormData(initialFormData);

  }

}, [editingCustomer , open]);

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

            {/* Drawer */}

            <div className="flex h-screen w-full max-w-lg flex-col bg-white">

                {/* Header */}

                <div className="flex items-center justify-between border-b p-6">

                    <h2 className="text-2xl font-bold">
                        {editingCustomer ? "Edit Customer" : "Add Customer"}
                    </h2>

                    <button
                        onClick={handleClose}
                        className="text-2xl text-gray-500 hover:text-red-500"
                    >
                        ✕
                    </button>

                </div>

                {/* Body */}

                <div className="flex-1 overflow-y-auto p-6">

                    <CustomerForm
                        formData={formData}
                        handleChange={handleChange}

                    />

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t p-5">

                    <button
                        onClick={handleClose}
                        className="rounded-lg border px-5 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-green-700"
                    >
                        {editingCustomer ? "Update Customer" : "Save Customer"}
                    </button>

                </div>

            </div>

        </div>

    );

};

export default AddCustomerDrawer;