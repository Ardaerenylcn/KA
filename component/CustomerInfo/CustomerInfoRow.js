import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  CustomerInfoRowtitle: {
    fontSize: 16,

    flex: 1, 
  },
  decContainer: {
    flex: 1, 
    alignItems: 'flex-end', 
  },
  dec: {
    color: '#bcbcbc',
  },
});

export default CustomerInfoRow;
