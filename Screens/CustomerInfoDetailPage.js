import { View, Text, Animated } from "react-native";
import React from "react";
import CustomerInfoDetailHeadArea from "../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailHeadArea";
import CustoemrInfoDetailBodyArea from "../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailBodyArea";
const CustomerInfoDetailPage = () => {
  return (
    <>
      <CustomerInfoDetailHeadArea
        customerInfoDetailCustomerID="SJ12RU3M18"
        customerInfoDetailCustomerNAME="MMM Migros Ümraniye"
        customerInfoDetailCustomerLogin="1 Eylül 14:23"
      />
      <CustoemrInfoDetailBodyArea />
    </>
  );
};

export default CustomerInfoDetailPage;
