import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import { color } from 'react-native-elements/dist/helpers';

const WhereAmIScrolViewComponent = ({ StoreCode, StoreFullname }) => {
	return (
		<View>
			<TouchableOpacity
				style={styles.WhereAmIScrolViewComponentTouchableOpacity}
			>
				<View style={styles.WhereAmIScrolViewComponentTextView}>
					<Text>{StoreCode}</Text>
					<Text style={styles.WhereAmIScrolViewComponentStoreFullname}>
						{StoreFullname}
					</Text>
				</View>
				<View>
					<Image
						source={require('../../assets/icons/ic_angle-right.png')}
						style={[styles.WhereAmIScrolViewComponentStoreIcon]}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	WhereAmIScrolViewComponentStoreFullname: {
		color: colors.grey,
	},
	WhereAmIScrolViewComponentTextView: {
		padding: distances.halfDistance,
	},
	WhereAmIScrolViewComponentStoreIcon: {
		width: 26,
		height: 26,
		marginRight: distances.quarterDistance,
		tintColor: colors.grey,
	},
	WhereAmIScrolViewComponentTouchableOpacity: {
		borderColor: colors.borderColor,
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
	},
});
export default WhereAmIScrolViewComponent;
