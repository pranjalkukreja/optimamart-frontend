import React from "react";
import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import sign from "../../images/sign.png"


const Invoice = ({ order }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Tax Invoice</Text>
      <Text style={styles.author}>Optima Industries</Text>
      <Text style={styles.author}>GSTIN: 07AALPK9484H1Z4</Text>
      <Text style={styles.subtitle}>Ship To</Text>
      <Text style={styles.text}>
        <Text>
        {order.orderdName}
        </Text>
        {"\n"}
        <Text>
          {order.orderdAddress} 
        </Text>
        {"\n"}
        <Text>
          {order.orderdUnit}
        </Text>
        <Text>
        {order.orderdCity}
        </Text>
        {"\n"}
        <Text>
        {order.orderdState + ", " + order.orderdZip}
        </Text>
        {"\n"}
        <Text>
          {order.orderdNumber}
        </Text>
      </Text>
      <Text style={styles.subtitle}>Order Summary</Text>
      <Text style={styles.text}>
        <Text>
          Date: {" "}
          {new Date(order.createdAt).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
        </Text>
        {"\n"}
        <Text>
          Order Id: {" "}
          {order._id}
        </Text>
        {"\n"}
        <Text>
          Order Status: {" "}
          {order.orderStatus}
        </Text>
        {"\n"}
        <Text>
          Total Paid: {" "}
          {"Rs." + order.paymentIntent.amount}
        </Text>
      </Text>

      <Table>
        <TableHeader>
        <TableCell>SKU</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Total</TableCell>
        </TableHeader>
      </Table>

      <Table data={order.products}>
        <TableBody>
        <DataTableCell getContent={(x) => x.product.skuId} />
          <DataTableCell getContent={(x) => x.product.title} />
          <DataTableCell getContent={(x) => "Rs." + x.product.price} />
          <DataTableCell getContent={(x) => x.count} />
          <DataTableCell getContent={(x) => "Rs." + (x.count * x.product.price)} />
        </TableBody>
      </Table>
      
      <Image style={styles.image} src={sign} />
      <Text style={styles.SignName}>Authorized Signatory</Text>



      <Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
      {/* <img src={sign} alt=""/> */}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginTop: "10px",
    height: "50px",
    width: "80px"
  },
  SignName: {
    fontSize: 12,
    color: "grey",
    marginTop: "5px"
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  imageFooter: {
    height: "50px",
    width: "50px",
    textAlign: "center",

  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Invoice;
