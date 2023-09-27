import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const UrunListesiFotografButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContent}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/ic_photo_camera.png')}
        />
        <Text style={styles.buttonText}>Fotoğraf</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1, 
    backgroundColor: colors.green,
    borderRadius:distances.quarterDistance / 2,
    marginHorizontal: 1,
    paddingVertical:distances.quarterDistance/2,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: distances.defaultDistance,
    height: distances.defaultDistance,
    marginRight: distances.quarterDistance,
  },
  buttonText: {
    color: colors.white,
  },
});

export default UrunListesiFotografButton;
