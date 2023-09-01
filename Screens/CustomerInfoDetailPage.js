import { View, Text, } from 'react-native'
import React from 'react'
import CustomerInfoDetailHeadArea from "../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailHeadArea"

const CustomerInfoDetailPage = () => {
    return (
        <><CustomerInfoDetailHeadArea
            customerInfoDetailCustomerID="4312RU3M18"
            customerInfoDetailCustomerNAME="MMM Migros Ümraniye"
            customerInfoDetailCustomerLogin="1 Eylül 14:23" />
            
            <CustomerInfoDetailHeadArea
                customerInfoDetailCustomerID="1234"
                customerInfoDetailCustomerNAME="RIDO"
                customerInfoDetailCustomerLogin="SALI" /></>
    )
}



export default CustomerInfoDetailPage;