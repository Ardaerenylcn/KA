import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import distances from '../../../../constants/distances';
import colors from '../../../../constants/colors';


const SokmeHeadComponent = ({ StoreCode, StoreFullName,}) => {

    return (
      <View style={styles.ArızaBildirimiComponentMainContainer}>
        <View style={styles.ArızaBildirimiComponentHeadContainer}>
          <View style={styles.ArızaBildirimiComponentHeadContainerTextArea}>
            <Text>{StoreCode}</Text>
            <Text style={styles.ArızaBildirimiStoreName}>{StoreFullName}</Text>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  ArızaBildirimiComponentMainContainer: {
    flex: 1,
  },
  ArızaBildirimiComponentHeadContainer: {
    flex: 0.1,
    justifyContent: 'center',
    marginHorizontal: distances.defaultDistance,
    backgroundColor: colors.white,
    padding: distances.defaultDistance,
    margin: distances.defaultDistance,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  ArızaBildirimiComponentHeadContainerTextArea: {
    marginHorizontal: distances.defaultDistance,
  },
  ArızaBildirimiStoreName: {
    color: colors.grey,
  },
});

export default SokmeHeadComponent;