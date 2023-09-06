import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import distances from "../../constants/distances";
import fonts from "../../constants/fonts";

const CustomerInfoRow = ({ title, desc }) => {
  return (
    <View style={styles.CustomerInfoRow}>
      <Text style={styles.CustomerInfoRowtitle}>{title}</Text>
      <View style={styles.decContainer}>
        <Text style={styles.dec}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CustomerInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: distances.defaultDistance,
    paddingVertical: distances.halfDistance,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
  },
  CustomerInfoRowtitle: {
    fontSize: fonts.normal,
    flex: 1,
    
  },
  decContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  dec: {
    color: colors.grey3,
  },
});

export default CustomerInfoRow;
