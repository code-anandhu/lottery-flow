import React from "react";
import * as XLSX from "xlsx";


function ImportCustomer({ setCustomers }) {


  const handleImport = (event) => {

    const file = event.target.files[0];

    if (!file) return;


    const reader = new FileReader();


    reader.onload = (e) => {

      const data = e.target.result;


      const workbook = XLSX.read(data, {
        type: "binary"
      });


      const sheetName = workbook.SheetNames[0];


      const worksheet = workbook.Sheets[sheetName];


      const jsonData = XLSX.utils.sheet_to_json(
        worksheet
      );


      console.log(jsonData);


      // update table
      setCustomers(prev => [
        ...prev,
        ...jsonData
      ]);

    };


    reader.readAsBinaryString(file);

  };


  return (

    <div>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleImport}
      />

    </div>

  );

}


export default ImportCustomer;