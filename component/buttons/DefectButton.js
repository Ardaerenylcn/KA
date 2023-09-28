import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // React Navigation'ı içe aktarın
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const ArizaButton = () => {
	const navigation = useNavigation();

	const handleArizaClick = () => {
		navigation.navigate('Arıza');
	};

	return (
		<View>
			<TouchableOpacity
				style={styles.arizaButtonContainer}
				onPress={handleArizaClick}
			>
				<Image
					source={require('../../assets/icons/ic_Attention.png')}
					style={styles.icon}
					resizeMode="contain"
				/>
				<Text style={styles.buttonText}>arıza</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	arizaButtonContainer: {
		backgroundColor: colors.red,
		paddingHorizontal: distances.defaultDistance,
		paddingVertical: distances.halfDistance / 2,
		borderRadius: 5,
		alignSelf: 'flex-start',
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
	buttonText: {
		color: 'white',
	},
});

export default ArizaButton;
