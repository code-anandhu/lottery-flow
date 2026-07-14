import { useState } from "react";
import TemplateToolbar from "../../components/templates/TemplateToolbar";
import TemplateTable from "../../components/templates/TemplateTable";
import AddTemplateDrawer from "../../components/templates/AddTemplateDrawer";

const Templates = () => {

  const [templates, setTemplates] = useState([
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
  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">

      <TemplateToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddTemplate={() => setDrawerOpen(true)}
      />

     <div className="py-5"> <TemplateTable templates={templates} /></div>

      <AddTemplateDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

    </div>
  );
};

export default Templates;