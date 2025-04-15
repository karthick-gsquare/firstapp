import React from "react";
import RootLayout from "../../components/layout/RootLayout";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";

const invoiceData = {
  invoiceNumber: "INV-001",
  date: "2025-04-15",
  customerName: "karthick",
  items: [
    {
      slNo: 1,
      bankName: "ICICI Bank",
      mode: "UPI",
      transactionNumber: "544176639289",
      instrumentDate: "16-03-2025",
      amount: 50000,
    },
    {
      slNo: 2,
      bankName: "Indian Bank",
      mode: "UPI",
      transactionNumber: "544158301812",
      instrumentDate: "16-03-2025",
      amount: 50000,
    },
  ],

  total: 100000,
};

function PdfPage() {
  return (
    <>
      <div className="mt-10 hidden">
        <h1>Invoice Preview</h1>
        <PDFDownloadLink
          document={<InvoicePDF invoiceData={invoiceData} />}
          fileName={`invoice-${invoiceData.customerName}.pdf`}
        >
          {({ loading }) => (loading ? "Preparing PDF..." : "Download Invoice")}
        </PDFDownloadLink>
      </div>
      <div style={{ height: "100vh" }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <InvoicePDF invoiceData={invoiceData} />
        </PDFViewer>
      </div>
    </>
  );
}

export default PdfPage;
