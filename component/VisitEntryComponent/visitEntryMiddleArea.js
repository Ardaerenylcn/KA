import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, TextInput,ScrollView } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

const VisitEntryMiddleArea = () => {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (

      <View style={styles.visitEntryContainer}>
        <View style={styles.visitEntryTitleContainer}>
          <Text style={styles.visitEntryTitle}>AÇIKLAMA GİRİNİZ</Text>
        </View>
        <View style={styles.visitEntryDesc}>
        <TextInput
        editable={true}
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />

        </View>
      </View>

  );
};


const styles = StyleSheet.create({
  visitEntryContainer: {
    paddingVertical: distances.defaultDistance,
    backgroundColor: colors.white,
    margin: distances.defaultDistance,
    borderRadius: distances.quarterDistance,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  visitEntryTitle: {
    marginLeft: distances.halfDistance,
    color: colors.grey,
    fontWeight: '500',
    marginBottom: distances.halfDistance,
  },
  visitEntryTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    marginHorizontal: distances.defaultDistance,
  },
  visitEntryDescTextInput: {
    marginVertical:distances.defaultDistance,
    marginHorizontal: distances.defaultDistance *2,
    padding: distances.halfDistance,
  },
});

export default VisitEntryMiddleArea;


