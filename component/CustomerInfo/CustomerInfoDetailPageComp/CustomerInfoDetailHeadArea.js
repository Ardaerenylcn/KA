import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import distances from '../../../constants/distances';
import fonts from '../../../constants/fonts';

const CustomerInfoDetailHeadArea = ({
	customerInfoDetailCustomerID,
	customerInfoDetailCustomerNAME,
	customerInfoDetailCustomerDİSTANCE,
	customerInfoDetailCustomerLogin,
	navigation,
}) => {
	const handleVisitEntryPress = () => {
		navigation.navigate('Ziyaret Girişi');
	};

	return (
		<SafeAreaView style={styles.SafeAreaView}>
			<View style={styles.customerInfoDetailHeadAreaContainer}>
				<View
					style={styles.customerInfoDetailHeadAreaContainerIDandVisitButton}
				>
					<Text style={styles.customerInfoDetailCustomerID}>
						{customerInfoDetailCustomerID}
					</Text>

					<TouchableOpacity
						style={styles.customerInfoDetailHeadAreaContainerVisitButton}
					>
						<FontAwesome name="location-arrow" color="white" size={16} />
						<Text
							style={styles.customerInfoDetailHeadAreaContainerVisitButtonText}
						>
							Tarif
						</Text>
					</TouchableOpacity>
				</View>

				<View>
					<Text style={styles.customerInfoDetailHeadLeftSide}>
						{customerInfoDetailCustomerNAME}
					</Text>
				</View>
				<View style={styles.customerInfoDetailHeadLeftSide}>
					<FontAwesome name="location-arrow" color="gray" />
					<Text> {customerInfoDetailCustomerDİSTANCE} mt</Text>
				</View>
				<View
					style={[styles.customerInfoDetailHeadLeftSide, styles.visitEntryView]}
				>
					<TouchableOpacity onPress={handleVisitEntryPress}>
						<View style={styles.visitEntry}>
							<FontAwesome name="map-pin" color="white" />

							<Text style={styles.visitEntryText}> Ziyaret Girişi</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.customerInfoDetailHeadLeftSide}>
					<Text style={styles.customerInfoDetailHeadLeftSideCustomerLogin}>
						Son Ziyaret: {customerInfoDetailCustomerLogin}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	customerInfoDetailHeadAreaContainer: {
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
	customerInfoDetailHeadAreaContainerIDandVisitButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: distances.defaultDistance,
		marginTop: distances.defaultDistance,
	},
	customerInfoDetailHeadAreaContainerVisitButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.lightblue,
		paddingHorizontal: distances.halfDistance,
		borderRadius: 5,
	},
	customerInfoDetailHeadAreaContainerVisitButtonText: {
		color: colors.white,
		marginLeft: 5,
		padding: 2,
	},
	customerInfoDetailHeadLeftSide: {
		marginHorizontal: distances.defaultDistance * 2,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: distances.quarterDistance / 4,
		fontSize: fonts.big,
	},
	visitEntry: {
		backgroundColor: colors.navyblue,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: distances.quarterDistance,
		paddingVertical: distances.quarterDistance / 2,
		fontSize: fonts.normal,
	},
	visitEntryText: {
		color: colors.white,
	},
	visitEntryView: {
		marginTop: distances.defaultDistance,
	},
	customerInfoDetailCustomerID: {
		marginHorizontal: distances.defaultDistance,
		fontSize: fonts.big,
	},
	customerInfoDetailHeadLeftSideCustomerLogin: {
		fontSize: fonts.big,
	},
});

export default CustomerInfoDetailHeadArea;
