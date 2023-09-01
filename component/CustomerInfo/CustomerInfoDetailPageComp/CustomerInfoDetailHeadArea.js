import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Button, Text, TouchableOpacity } from 'react-native';




const CustomerInfoDetailHeadArea = ({ customerInfoDetailCustomerID
    , customerInfoDetailCustomerNAME, customerInfoDetailCustomerLogin }) => {
    return (
        <SafeAreaView>


            <View style={styles.CustomerInfoDetailHeadAreaContainer}>
                <View>
                    <View >
                        <Text style={styles.CustomerInfoDetailHeadAreaIDText}>{customerInfoDetailCustomerID}</Text>
                        <Text style={styles.CustomerInfoDetailHeadAreaIDName}>{customerInfoDetailCustomerNAME}</Text>

                    </View>

                    <View>
                        <View>

                            <TouchableOpacity style={styles.CustomerInfoDetailHeadAreaContainerLeftSideButton} >
                                <FontAwesome name="map-marker" size={16} color="white" style={{ padding: 3 }} />

                                <Text>Ziyaret Girişi</Text>
                            </TouchableOpacity>
                            <Text style={styles.CustomerInfoDetailHeadAreaContainerLeftSidePartTwoLoginText}>{customerInfoDetailCustomerLogin}</Text>


                        </View>
                    </View>





                </View>
                <View style={styles.CustomerInfoDetailHeadAreaContainerRightSide}>

                    <TouchableOpacity style={styles.CustomerInfoDetailHeadAreaContainerRightSideButton} >
                        <FontAwesome name="location-arrow" size={16} color="white" style={{ padding: 3 }} />

                        <Text style={styles.CustomerInfoDetailHeadAreaContainerRightSideButtonText}>Tarif</Text>
                    </TouchableOpacity>

                </View>
            </View>




        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1
    },
    CustomerInfoDetailHeadAreaContainer: {
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        marginVertical: 30,
        marginHorizontal: 10,
        borderRadius: 5,
        minHeight: 50,
        justifyContent: "space-between",
        alignItems: "center", 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },

    CustomerInfoDetailHeadAreaContainerRightSide: {
        backgroundColor: "#134A8D",
        borderRadius: 3,
        margin: 10,

    },
    CustomerInfoDetailHeadAreaContainerRightSideButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    CustomerInfoDetailHeadAreaContainerLeftSideButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#009FDC",
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    CustomerInfoDetailHeadAreaContainerRightSideButtonText: {
        fontSize: 12,
        color: "white",
        padding: 10,

    },

    CustomerInfoDetailHeadAreaIDText: {
        padding: 5,
        color: "black"


    },
    CustomerInfoDetailHeadAreaIDName: {
        color: "black",
        padding: 5,
    },
    CustomerInfoDetailHeadAreaContainerLeftSidePartTwoLoginText: {
        padding: 5,
        marginHorizontal: 10,

    }

})

export default CustomerInfoDetailHeadArea;