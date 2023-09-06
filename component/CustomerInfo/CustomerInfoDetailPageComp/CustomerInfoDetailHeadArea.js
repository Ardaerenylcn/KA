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

import colors from "../../../constants/colors";
import distances from "../../../constants/distances" 
import fonts from "../../../constants/fonts";


const CustomerInfoDetailHeadArea = ({
  customerInfoDetailCustomerID,
  customerInfoDetailCustomerNAME,
  customerInfoDetailCustomerLogin,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.CustomerInfoDetailHeadAreaContainer}>
        <View>
          <View>
            <Text style={[styles.CustomerInfoDetailHeadAreaIDText, { color: colors.black }]}>
              {customerInfoDetailCustomerID}
            </Text>
            <Text style={[styles.CustomerInfoDetailHeadAreaIDName, { color: colors.black }]}>
              {customerInfoDetailCustomerNAME}
            </Text>
          </View>

          <View>
            <View>
              <TouchableOpacity
                style={[styles.CustomerInfoDetailHeadAreaContainerLeftSideButton, { backgroundColor: colors.blue }]}
              >
                <FontAwesome
                  name="map-marker"
                  size={16}
                  color="white"
                  style={{ padding: 3 }}
                />

                <Text>Ziyaret Girişi</Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.CustomerInfoDetailHeadAreaContainerLeftSidePartTwoLoginText,
                  { fontFamily: fonts.font_bold, color: colors.green },
                ]}
              >
                {customerInfoDetailCustomerLogin}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.CustomerInfoDetailHeadAreaContainerRightSide}>
          <TouchableOpacity
            style={styles.CustomerInfoDetailHeadAreaContainerRightSideButton}
          >
            <FontAwesome
              name="location-arrow"
              size={16}
              color="white"
              style={{ padding: 3 }}
            />

            <Text
              style={[
                styles.CustomerInfoDetailHeadAreaContainerRightSideButtonText,
                { fontFamily: fonts.font_bold },
              ]}
            >
              Tarif
            </Text>
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
  CustomerInfoDetailHeadAreaContainerRightSide: {
    backgroundColor: colors.antiquegreen,
    borderRadius: 3,
    margin: 10,
  },
  CustomerInfoDetailHeadAreaContainerRightSideButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  CustomerInfoDetailHeadAreaContainerLeftSideButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 5,
  },
  CustomerInfoDetailHeadAreaContainerRightSideButtonText: {
    fontSize: distances.biggest,
    color: colors.white,
    padding: 10,
  },
  CustomerInfoDetailHeadAreaIDText: {
    fontSize: distances.big,
    padding: 5,
    color: colors.black,
  },
  CustomerInfoDetailHeadAreaIDName: {
    fontSize: distances.normal,
    color: colors.black,
    padding: 5,
  },
  CustomerInfoDetailHeadAreaContainerLeftSidePartTwoLoginText: {
    fontSize: distances.small,
    padding: 5,
    marginHorizontal: 10,
    fontFamily: fonts.font_light,
  },
});

export default CustomerInfoDetailHeadArea;
