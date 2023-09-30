import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';

const InstallmentComponent = () => {
  const [number, onChangeNumber] = useState('');
  const inputRef = useRef(null);
  const [showCancel, setShowCancel] = useState(false);

  const openKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setShowCancel(true);
    }
  };

  const closeKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      setShowCancel(false);
    }
  };

  const clearInput = () => {
    onChangeNumber('');
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  return (
    <View>
      <View
        style={[
          styles.installmentInputContainer,
          showCancel && styles.installmentInputContainerActive,
        ]}
      >
        <TouchableOpacity onPress={openKeyboard}>
          <Image
            source={require('../../../../assets/icons/ic_carbon_search.png')}
            style={styles.installmentIcon}
          />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={styles.installmentInputBox}
          onChangeText={(text) => {
            onChangeNumber(text);
            setShowCancel(!!text);
          }}
          value={number}
          placeholder="Soğutucu adı, Soğutucu kodu ara..."
          onFocus={openKeyboard}
          onBlur={closeKeyboard}
        />
        {showCancel && (
          <TouchableOpacity onPress={clearInput}>
            <Text style={styles.installmentCancelText}>İptal</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  installmentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    padding: distances.quarterDistance,
    borderRadius: 5,
    marginHorizontal: distances.defaultDistance,
    marginTop: distances.defaultDistance,
  },
  installmentInputContainerActive: {
    borderColor: colors.primary,
  },
  installmentIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  installmentInputBox: {
    flex: 1,
  },
  installmentCancelText: {
    color: colors.primary,
    marginRight: distances.defaultDistance,
  },
});

export default InstallmentComponent;
