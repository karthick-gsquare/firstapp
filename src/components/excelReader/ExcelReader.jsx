import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const ExcelReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the file from the public folder
    fetch("/project-data/GSP.xlsx")
      .then((response) => response.arrayBuffer()) // Read as binary
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Get the first sheet
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet); // Convert to JSON
        console.log(parsedData);

        setData(parsedData);
      })
      .catch((error) => console.error("Error loading file:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 ms-14">G Square Projects</h2>
      <section className="grid grid-cols-4 gap-5 px-14">
        {data.map((data, index) => (
          <div key={index} className="bg-gray-50 p-2 rounded font-medium">
            <p className="line-clamp-1">Name: {data["Project Name"]}</p>
            <p className="line-clamp-1">Type: {data["Project Type"]}</p>
            <p className="line-clamp-1">City: {data["City"]}</p>
            <p className="line-clamp-1">Plot Size: {data["Plot Size"]}</p>
            <p className="line-clamp-1">Price: {data["Rate Per Sqft"] || <span className="bg-red-500 px-2">No Price</span>}</p>
            <p className="line-clamp-1">Zone: {data?.Zone } </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExcelReader;
