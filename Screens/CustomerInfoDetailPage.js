import { View, Text } from 'react-native'
import React from 'react'
import CustomerInfoDetailHeadArea from "../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailHeadArea"

const CustomerInfoDetailPage = () => {
    return (
        <CustomerInfoDetailHeadArea customerInfoDetailCustomerID="1234" customerInfoDetailCustomerNAME="RIDO" />
    )
}

export default CustomerInfoDetailPage;