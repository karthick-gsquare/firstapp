// InvoicePDF.jsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  top: { height: "64px", backgroundColor: "#006DB6" },
  bottom: { height: "34px", backgroundColor: "#006DB6" },
  page: { fontSize: 12, display: "flex", flexDirection: "column" },
  Container: { padding: 44, flexGrow: "1" },
  logo: { width: 165, height: 68, objectFit: "contain" },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
  },
  semiBold: { fontWeight: "600" },
  medium: { fontWeight: "500" },
  mt: { marginTop: 6 },
  H1: { fontSize: 16, fontWeight: "700" },
  Hr: { height: "1px", backgroundColor: "#ececec", marginVertical: 34 },
  table: {
    display: "table",
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ededed",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: "#f5f5f5",
  },
  cell: {
    padding: 6,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: "#ededed",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    textAlign: "left",
  },
  lastCell: {
    borderRightWidth: 0, // remove right border on the last cell
  },
  col1: { width: "8%" }, // Sl No
  col2: { width: "17%" }, // Bank, Mode, Date, Amount
  col3: { width: "33%" }, // Transaction No.
  bold: {
    fontWeight: "bold",
  },
});

const InvoicePDF = ({ invoiceData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.top}>
        <Image
          src={"/Group45.png"}
          style={{ objectFit: "contain", height: 64, marginLeft: "auto" }}
        />
      </View>

      <View style={styles.Container}>
        {/* <Text>Total: ${invoiceData.total.toFixed(2)}</Text> */}
        <View style={styles.flex}>
          <Image src={"/g_square_housing_logo.png.png"} style={styles.logo} />
          <View>
            <Text style={[styles.semiBold, styles.mt]}>
              GSQUARE LAYOUT PRIVATE LIMITED
            </Text>
            <Text style={[styles.semiBold, styles.mt]}>
              CIN: <Text style={styles.medium}>U457896TN2019CT657099</Text>
            </Text>
            <Text style={[styles.semiBold, styles.mt]}>
              Email:{" "}
              <Text style={styles.medium}>gsquarerealtors@gmail.com</Text>
            </Text>
            <Text style={[styles.semiBold, styles.mt]}>
              Phone: <Text style={styles.medium}> 044 28365238</Text>
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 60 }}>
          <Text style={styles.H1}>Consolidated Receipt</Text>
          <View style={{ marginTop: 34 }}>
            <Text>
              Name of the Project:{" "}
              <Text style={styles.semiBold}>
                G Square City 2.0 | L&T Bypass
              </Text>
            </Text>
            <Text style={{ marginTop: 10 }}>
              Apartment/Villa/Plot/Unit No:{" "}
              <Text style={styles.semiBold}>1579</Text>
            </Text>
          </View>
        </View>
        <View style={styles.Hr}></View>

        <View style={{ marginBottom: 34 }}>
          <Text>
            Receipt confirmed with thanks —{" "}
            <Text style={styles.semiBold}>Karthick.</Text>
          </Text>
          <Text style={{ marginTop: 10, maxWidth: "330px" }}>
            G Square Housing Menon Eternity, 8th Floor, 1st Main Rd, Austin
            Nagar Alwarpet, Chennai, Tamil Nadu
          </Text>
          <Text style={{ marginTop: 10, maxWidth: "330px" }}>91761 84008</Text>
        </View>
        <View style={styles.table}>
          {/* Header */}
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.col1, styles.bold]}>Sl No</Text>
            <Text style={[styles.cell, styles.col2, styles.bold]}>
              Bank Name
            </Text>
            <Text style={[styles.cell, styles.col2, styles.bold]}>Mode</Text>
            <Text style={[styles.cell, styles.col3, styles.bold]}>
              Transaction No.
            </Text>
            <Text style={[styles.cell, styles.col2, styles.bold]}>
              Instrument Date
            </Text>
            <Text
              style={[styles.cell, styles.col2, styles.bold, styles.lastCell]}
            >
              Amount
            </Text>
          </View>

          {/* Rows */}
          {invoiceData.items.map((item, idx) => (
            <View style={styles.row} key={idx}>
              <Text style={[styles.cell, styles.col1]}>{item.slNo}</Text>
              <Text style={[styles.cell, styles.col2]}>{item.bankName}</Text>
              <Text style={[styles.cell, styles.col2]}>{item.mode}</Text>
              <Text style={[styles.cell, styles.col3]}>
                {item.transactionNumber}
              </Text>
              <Text style={[styles.cell, styles.col2]}>
                {item.instrumentDate}
              </Text>
              <Text style={[styles.cell, styles.col2, styles.lastCell]}>
                ₹{item.amount.toLocaleString()}
              </Text>
            </View>
          ))}

          {/* Total Row */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.col1]}></Text>
            <Text style={[styles.cell, styles.col2]}></Text>
            <Text style={[styles.cell, styles.col2]}></Text>
            <Text style={[styles.cell, styles.col3]}></Text>
            <Text style={[styles.cell, styles.col2, styles.bold]}>Total</Text>
            <Text
              style={[styles.cell, styles.col2, styles.bold, styles.lastCell]}
            >
              ₹{invoiceData.total.toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 34 }}>
          <Text>
            Totally received a sum of{" "}
            <Text style={styles.semiBold}>
              {" "}
              Rs. 100,000 ( One Lakh Rupees Only)
            </Text>
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: "10px" }}>
              Cheque Payments are subject to realisation.
            </Text>
            <Text style={{ fontSize: "10px", marginTop: 2 }}>
              {" "}
              *This is computer generated receipt and do not require any stamp
              or signature
            </Text>
          </View>
        </View>
      </View>
      <Text style={{marginHorizontal:44,marginBottom:10,fontSize:10}}>gsquarehousing.com</Text>
      <View style={styles.bottom}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "10px",
            marginVertical: "auto",
            color: "#fff",
          }}
        >
          G Square Housing Pvt Ltd.
        </Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
