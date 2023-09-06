import React, { useState } from "react";
import colors from "../../../constants/colors";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const CustoemrInfoDetailBodyArea = ({}) => {
  const [selectedItem, setSelectedItem] = useState("");

  const data = [
    "Seçenek 1",
    "Seçenek 2",
    "Seçenek 3",
    "Seçenek 4",
    "Seçenek 5",
  ];

  const touchableOpacityStyle = styles.CustoemrInfoDetailBodyAreaRow;

  return (
    <ScrollView>
      <View style={styles.CustoemrInfoDetailBodyArea_Container}>
        <TouchableOpacity style={touchableOpacityStyle}>
          <Text style={styles.label}>Ziyaret Listesi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle}>
          <Text style={styles.label}>Soğutucu Envanteri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle}>
          <Text style={styles.label}>Soğutucu Ekipman Sayımı</Text>
        </TouchableOpacity>

        <TouchableOpacity style={touchableOpacityStyle}>
          <Text style={styles.label}>Soğutucu işlemleri {selectedItem}</Text>
        </TouchableOpacity>

        <SelectDropdown
          data={data}
          buttonStyle={styles.dropdownButton}
          onSelect={(selectedItem, index) => {
            setSelectedItem(selectedItem);
          }}
          defaultButtonText=">"
          defaultButtonTextStyle={styles.defaultButtonTextStyle}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CustoemrInfoDetailBodyArea_Container: {
    flexDirection: "column",
    backgroundColor: colors.grey,
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
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdownButton: {
    backgroundColor: colors.navyblue, 
    borderRadius: 10,
    padding: 10,
  },
  CustoemrInfoDetailBodyAreaRow: {
    fontSize: 22,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor, 
    marginBottom: 10,
    width: "100%",
  },
});

export default CustoemrInfoDetailBodyArea;
