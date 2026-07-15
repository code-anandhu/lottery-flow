import { useState } from "react";
import GroupToolbar from "../../components/customerGroups/GroupToolbar";
import GroupTable from "../../components/customerGroups/GroupTable";
import AddGroupDrawer from "../../components/customerGroups/AddGroupDrawer";

const CustomerGroups = () => {

    const [groups, setGroups] = useState([
        {
            id: 1,
            name: "VIP",
            description: "Premium customers",
            members: 120,
            color: "green",
        },
        {
            id: 2,
            name: "Regular",
            description: "Normal customers",
            members: 520,
            color: "blue",
        },
    ]);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const addGroup = (group) => {
  setGroups((prev) => [...prev, group]);
};

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

            <GroupToolbar
                onAddGroup={() => setDrawerOpen(true)}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onImport={handleImport}
            />

         <div className="py-4">
                <GroupTable
                    groups={groups}
                />
    
         </div>
            <AddGroupDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                addGroup={addGroup}
            />

        </div>
    );
};

export default CustomerGroups;