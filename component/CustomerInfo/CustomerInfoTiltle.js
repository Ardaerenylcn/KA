import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerInfoTiltle = ({ generalTitle }) => {
    return (
        <View style={styles.CustomerInfoTiltlerow}>
            <Text style={styles.CustomerInfoTiltleGeneraLtitle}>{generalTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    CustomerInfoTiltlerow: {
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:'#bcbcbc',

    },
    CustomerInfoTiltleGeneraLtitle: {
        fontSize: 14,
        color: "#266694",
        fontWeight:"bold"
        
    },
});

export default CustomerInfoTiltle;
