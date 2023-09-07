/* eslint-disable no-empty-pattern */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Font Awesome Icon
import colors from '../../../constants/colors';
import distances from '../../../constants/distances';

const CustoemrInfoDetailBodyArea = ({}) => {
  const [selectedItem, setSelectedItem] = useState('');

  const data = [
    'Ziyaret Listesi',
    'Soğutucu Envanteri',
    'Soğutucu Ekipman Sayımı',
    'Soğutucu işlemleri',
  ];
  return (
    <View style={styles.CustomerInfoDetailBodyAreaContainer}>
      <View style={styles.CustomerInfoDetailBodyAreaContainerMini}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.listItem,
              index === data.length - 1 && styles.lastListItem,
            ]}
            onPress={() => {

            }}
          >
            <Text style={styles.listItemText}>{item}</Text>
            <Icon name="angle-right" size={20} color={colors.grey3} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CustomerInfoDetailBodyAreaContainer: {
    paddingVertical: distances.defaultDistance,
    backgroundColor: colors.grey4,
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
  CustomerInfoDetailBodyAreaContainerMini: {
    padding: distances.defaultDistance,
    marginHorizontal: distances.defaultDistance,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.grey3,
    paddingVertical: 10,
  },
  lastListItem: {
    borderBottomWidth: 0, // Remove border from the last item
  },
  listItemText: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default CustoemrInfoDetailBodyArea;
