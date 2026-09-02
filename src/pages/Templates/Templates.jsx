import { useEffect, useState } from "react";
import TemplateToolbar from "../../components/templates/TemplateToolbar";
import TemplateTable from "../../components/templates/TemplateTable";
import AddTemplateDrawer from "../../components/templates/AddTemplateDrawer";

const Templates = () => {

  const defaultTemplates = [
    {
      id: 1,
      name: "Winning Message",
      category: "Result",
      message: "Congratulations! Your ticket has won.",
    },
    {
      id: 2,
      name: "Festival Offer",
      category: "Promotion",
      message: "Happy Onam! Buy your lottery tickets today.",
    },
  ];

  const [templates, setTemplates] = useState(() => {
    const savedTemplates = localStorage.getItem("lotteryTemplates");

    return savedTemplates
      ? JSON.parse(savedTemplates)
      : defaultTemplates;
  });

  useEffect(() => {
    localStorage.setItem(
      "lotteryTemplates",
      JSON.stringify(templates)
    );
  }, [templates]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTemplate, setEditingTemplate] = useState(null);

  // Add Template
  const addTemplate = (template) => {
    setTemplates((prev) => [
      template,
      ...prev,
    ]);
  };

  // Update Template
  const updateTemplate = (updatedTemplate) => {
    setTemplates((prev) =>
      prev.map((template) =>
        template.id === updatedTemplate.id
          ? updatedTemplate
          : template
      )
    );
  };

  // Edit
  const handleEdit = (template) => {
    setEditingTemplate(template);
    setDrawerOpen(true);
  };

  // Delete
  const handleDelete = (template) => {

    const confirmed = window.confirm(
      `Are you sure you want to delete "${template.name}"?`
    );

    if (!confirmed) return;

    setTemplates((prev) =>
      prev.filter(
        (item) => item.id !== template.id
      )
    );
  };

  // Search
  const filteredTemplates = templates.filter((template) => {

    const search = searchTerm.toLowerCase();

    return (
      template.name.toLowerCase().includes(search) ||
      template.category.toLowerCase().includes(search) ||
      template.message.toLowerCase().includes(search)
    );

  });

  return (
    <div className="space-y-6">

      <TemplateToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddTemplate={() => {
          setEditingTemplate(null);
          setDrawerOpen(true);
        }}
      />

      <div className="py-5">

        <TemplateTable
          templates={filteredTemplates}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>

      <AddTemplateDrawer
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setEditingTemplate(null);
        }}
        addTemplate={addTemplate}
        editingTemplate={editingTemplate}
        updateTemplate={updateTemplate}
      />

    </div>
  );
};

export default Templates;