import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const CustoemrInfoDetailBodyArea = ({}) => {
  const [selectedItem, setSelectedItem] = useState('');

  const data = ['Seçenek 1', 'Seçenek 2', 'Seçenek 3', 'Seçenek 4', 'Seçenek 5'];

  return (
    <View style={styles.CustoemrInfoDetailBodyArea_Container}>
      <Text style={styles.label}>Soğutucu işlemleri {selectedItem}</Text>
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
  );
};


const styles = StyleSheet.create({
  CustoemrInfoDetailBodyArea_Container: {
    flexDirection: "cloum",
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
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdownButton: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  defaultButtonTextStyle:{
color:"red"
},
});

export default CustoemrInfoDetailBodyArea;
