import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import distances from '../../constants/distances';


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
	installmentInputContainer: {
		backgroundColor: colors.borderColor,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: distances.halfDistance,
		padding: distances.quarterDistance,
		flex: 1,
	},
	installmentIcon: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
	installmentInputMainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: distances.quarterDistance,
		marginTop: distances.defaultDistance,
	},
	installmentInputBox: {
		flex: 1,
	},

	cancelButton: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		marginLeft: distances.quarterDistance,
		backgroundColor: colors.white,
		borderRadius: distances.halfDistance,
	},
	installmentCancelText: {
		color: colors.lightblue,
	},
});

export default WhereAmIScrolViewComponent;
