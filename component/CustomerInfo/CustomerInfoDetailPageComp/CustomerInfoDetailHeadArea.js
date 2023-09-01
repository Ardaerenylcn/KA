import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Button ,Text} from 'react-native';


const CustomerInfoDetail = ({customerInfoDetailCustomerID
    ,customerInfoDetailCustomerNAME })=>{
        return(
            <View>
                <Text>{customerInfoDetailCustomerID}</Text>
                <Text>{customerInfoDetailCustomerNAME}</Text>

            </View>
            )
    }

    export default CustomerInfoDetail;