import { useState } from "react";

const CustomerForm = ({ formData, handleChange }) => {

  


    return (
        <form className="mt-6 space-y-5">

            {/* Full Name */}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 py-3">
                    Full Name <span className="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
            </div>

            {/* WhatsApp */}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 py-3">
                    WhatsApp Number <span className="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
            </div>

            {/* Email */}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-3">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
            </div>

            {/* Group */}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-3">
                    Customer Group
                </label>

                <select
                    name="group"
                    value={formData.group}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                >

                    <option value="VIP">VIP</option>

                    <option value="REGULAR">REGULAR</option>

                    <option value="NEW CUSTOMER">NEW CUSTOMER</option>

                    <option value="FESTIVEL OFFER">FESTIVEL OFFER</option>

                    <option value="DAILY PLAYER">DAILY PLAYER</option>

                    <option value="WEEKLY PLAYER">WEEKLY PLAYER</option>

                    <option value="HIGH VALUE">HIGH VALUE</option>

                </select>

            </div>
            {/* <pre className="mt-5 rounded bg-gray-100 p-3 text-sm">
                {JSON.stringify(formData, null, 2)}
            </pre> */}

        </form>
    );
};

export default CustomerForm;