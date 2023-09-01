import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Button } from 'react-native';


const CustomerInfoDetail = ({customerInfoDetailCustomerID
    ,customerInfoDetailCustomerNAME })=>{
        return(
            <View>
                <Text>{customerInfoDetailCustomerID}</Text>
                <Text>{customerInfoDetailCustomerNAME}</Text>

            </View>
            )
    }
