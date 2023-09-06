import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomerInfoHead from "../customerInfoHead";
import colors from "../../../constants/colors";
import distances from "../../../constants/distances";
import fonts from "../../../constants/fonts";

const CustomerInfoDetailHeadArea = ({
  customerInfoDetailCustomerID,
  customerInfoDetailCustomerNAME,
  customerInfoDetailCustomerLogin,
}) => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.CustomerInfoDetailHeadAreaContainer}>
        <View style={styles.customerInfoDetailHeadAreaContainerTextSide}>
        <View style={styles.customerInfoDetailHeadAreaContainerTextSideOne}>

          <Text>{customerInfoDetailCustomerID}</Text>
          </View>
        </View>
        <View style={styles.customerInfoDetailHeadAreaContainerTextSideTwo}>
          <Text>{customerInfoDetailCustomerNAME}</Text>
          <Text>{customerInfoDetailCustomerLogin}</Text>
        </View>

        <View style={styles.customerInfoHeadAreaButtonWiev}>
          <TouchableOpacity style={styles.customerInfoHeadAreaButton}>
            <FontAwesome
              style={styles.customerInfoHeadAreaButtonIcon}
              size={22}
              color={"white"}
              name="location-arrow"
            />
            <Text style={styles.customerInfoHeadAreaButtonText}>TARİF</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  CustomerInfoDetailHeadAreaContainer: {
    flexDirection: "row",
    backgroundColor: colors.grey4,
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
  CustomerInfoDetailHeadAreaMiniContainer: {
    backgroundColor: colors.grey3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customerInfoHeadAreaButtonWiev: {
    backgroundColor: colors.lightblue,
    borderRadius: 4,
    padding: distances.quarterDistance / 2,
    marginHorizontal: distances.quarterDistance,
    flexDirection: "row",
    alignItems: "center",
  },
  customerInfoHeadAreaButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  customerInfoHeadAreaButtonIcon: {
    marginRight: distances.quarterDistance,
  },
  customerInfoHeadAreaButtonText: {
    color: colors.white,
  },
  customerInfoDetailHeadAreaContainerTextSide: {
    marginLeft: distances.doubleDistance,
  },
});

export default CustomerInfoDetailHeadArea;
