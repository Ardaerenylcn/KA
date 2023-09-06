import React from "react";
import { View, Text, StyleSheet } from "react-native";
import distances from "../../constants/distances";
import colors from "../../constants/colors";

const CustomerInfoTiltle = ({ generalTitle }) => {
  return (
    <View style={styles.CustomerInfoTiltlerow}>
      <Text style={styles.CustomerInfoTiltleGeneraLtitle}>{generalTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CustomerInfoTiltlerow: {
    justifyContent: "space-between",
    paddingHorizontal: distances.defaultDistance,
    paddingVertical: distances.halfDistance,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    backgroundColor: colors.grey2,
  },
  CustomerInfoTiltleGeneraLtitle: {
    fontSize: 14,
    color: colors.navyblue,
    fontWeight: "bold",
  },
});

export default CustomerInfoTiltle;
