// CustomerInfoHead.js

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";
import distances from "../../constants/distances";
import fonts from "../../constants/fonts";
import { Entypo } from "@expo/vector-icons";
import fontFamilies from "../../constants/fontFamilies";

const CustomerInfoHead = ({
  customerInfoStoreCode,
  navigation,
  customerInfoStoreName,
  customerInfoStoreFullName,
  customerInfoStoreIsFalse,
}) => {
  return (
    <View style={styles.CustomerInfoDetailPageNavigateButtonBackground}>
      <View style={styles.customerInfoDetailPageHeadTextStyle}>
        <View style={styles.customerInfoDetailPageHeadIcon}>
          <Entypo
            name="shop"
            size={24}
            style={styles.customerInfoDetailPageHeadIconStyle}
          />
        </View>
        <View>
          <Text style={{fontWeight:"bold"}}>{customerInfoStoreCode}</Text>
          <Text>{customerInfoStoreName}</Text>
          <Text>{customerInfoStoreFullName}</Text>
          <View>
  {customerInfoStoreIsFalse ? (
    <View style={styles.customerInfoStoreIsFalse}>
      <Text style={styles.customerInfoStoreText}>Onaylanmamış</Text>
    </View>
  ) : (
    <View style={styles.customerInfoStoreIsTrue}>
      <Text style={styles.customerInfoStoreText}>Onaylı</Text>
    </View>
  )}
</View>
        </View>
      </View>

      <View style={styles.CustomerInfoDetailPageNavigateButtonarea}>
        <TouchableOpacity
          style={styles.CustomerInfoDetailPageNavigateButton}
          onPress={() => navigation.navigate("Müşteri İşlemleri")}
        >
          <FontAwesome name="info-circle" size={24} color="white" />
          <Text style={styles.navigationButtonText}>Müşteri İşlemleri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CustomerInfoDetailPageNavigateButton: {
    backgroundColor: colors.more,
    borderRadius: distances.halfDistance,
    padding: distances.halfDistance,
    alignSelf: "center",
    margin: distances.halfDistance,
    width: 180,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  navigationButtonText: {
    color: colors.white,
    fontSize: fonts.big,
  },
  CustomerInfoDetailPageNavigateButtonBackground: {
    backgroundColor: colors.white,
    height: "22%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    marginTop:distances.defaultDistance,
  },
  CustomerInfoDetailPageNavigateButtonarea: {
    marginHorizontal: distances.doubleDistance * 1.5,
    marginVertical: distances.defaultDistance,
  },
  customerInfoDetailPageHeadTextStyle: {
    flexDirection: "row",
  },
  customerInfoDetailPageHeadIcon: {
    justifyContent: "flex-end",
    marginHorizontal: distances.defaultDistance,
  },
  customerInfoDetailPageHeadIconStyle: {
    color: colors.efesblue,
  },
  customerInfoStoreIsFalse: {
    backgroundColor: colors.red,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  customerInfoStoreIsTrue: {
    backgroundColor:colors.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width:100,
  },
  customerInfoStoreText: {
    color: colors.white,

  },
  
  
});

export default CustomerInfoHead;
