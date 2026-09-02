import { useState , useEffect } from "react";
import GroupToolbar from "../../components/customerGroups/GroupToolbar";
import GroupTable from "../../components/customerGroups/GroupTable";
import AddGroupDrawer from "../../components/customerGroups/AddGroupDrawer";
import { importGroups } from "../../utils/excel";

const CustomerGroups = () => {

    const defaultGroups = [
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
    ];

    const [groups, setGroups] = useState(() => {
        const savedGroups = localStorage.getItem("lotteryGroups");

        return savedGroups
            ? JSON.parse(savedGroups)
            : defaultGroups;
    });

    useEffect(() => {
    localStorage.setItem(
        "lotteryGroups",
        JSON.stringify(groups)
    );
}, [groups]);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingGroup, setEditingGroup] = useState(null);

    // Add Group
    const addGroup = (group) => {
        setGroups((prev) => [group, ...prev]);
    };



    const handleImport = (file) => {
        importGroups(file, (newGroups) => {
            setGroups((prev) => [
                ...newGroups,
                ...prev,
            ]);

            alert(
                `${newGroups.length} groups imported successfully`
            );
        });
    };

    // Search
    const filteredGroups = groups.filter((group) => {
        const search = searchTerm.toLowerCase();

        return (
            group.name.toLowerCase().includes(search) ||
            group.description.toLowerCase().includes(search)
        );
    });

    const updateGroup = (updatedGroup) => {
        setGroups((prev) =>
            prev.map((group) =>
                group.id === updatedGroup.id
                    ? updatedGroup
                    : group
            )
        );
    };

    // Edit Group
    const handleEdit = (group) => {
        setEditingGroup(group);
        setDrawerOpen(true);
    };


    // Delete Group
    const handleDelete = (group) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${group.name}"?`
        );

        if (!confirmed) return;

        setGroups((prev) =>
            prev.filter((item) => item.id !== group.id)
        );
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
                    groups={filteredGroups}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>

            <AddGroupDrawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                    setEditingGroup(null);
                }}
                addGroup={addGroup}
                editingGroup={editingGroup}
                updateGroup={updateGroup}
            />

        </div>
    );
};

export default CustomerGroups;