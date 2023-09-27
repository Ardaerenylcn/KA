/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import fonts from '../../constants/fonts';

const CustomerInfoHead = ({
	customerInfoStoreCode,
	navigation,
	customerInfoStoreName,
	customerInfoStoreFullName,
	customerInfoStoreIsFalse,
}) => {
	return (
		<View style={styles.CustomerInfoDetailPageNavigateButtonBackground}>
			<View style={styles.customerInfoDetailPageHeadTextStyle}>
				<View style={styles.customerInfoDetailPageHeadIcon}>
					<Image
						style={styles.icShopTinyLogo}
						source={require('../../assets/icons/ic_shop.png')}
					/>
				</View>
				<View>
					<Text style={styles.customerInfoStoreCode}>
						{customerInfoStoreCode}
					</Text>
					<Text style={styles.customerInfoStoreNAME}>
						{customerInfoStoreName}
					</Text>
					<Text>{customerInfoStoreFullName}</Text>
					<View style={styles.customerInfoStoreIsFalseAndTrueArea}>
						{customerInfoStoreIsFalse ? (
							<View style={styles.customerInfoStoreIsFalse}>
								<Text style={styles.customerInfoStoreText}>Onaylanmamış</Text>
							</View>
						) : (
							<View style={styles.customerInfoStoreIsTrue}>
								<Text style={styles.customerInfoStoreText}>Onaylı</Text>
							</View>
						)}
					</View>
				</View>
			</View>

			<View style={styles.CustomerInfoDetailPageNavigateButtonarea}>
				<TouchableOpacity
					style={styles.CustomerInfoDetailPageNavigateButton}
					onPress={() => navigation.navigate('Müşteri İşlemleri')}
				>
					<FontAwesome name="info-circle" size={24} color="white" />
					<Text style={styles.navigationButtonText}>Müşteri İşlemleri</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	CustomerInfoDetailPageNavigateButton: {
		backgroundColor: colors.more,
		borderRadius: distances.halfDistance,
		padding: distances.halfDistance,
		alignSelf: 'center',
		margin: distances.halfDistance,
		width: 180,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: distances.doubleDistance,
	},
	navigationButtonText: {
		color: colors.white,
		fontSize: fonts.big,
	},
	CustomerInfoDetailPageNavigateButtonBackground: {
		backgroundColor: colors.white,
		height: '20%',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor,
		marginTop: distances.doubleDistance,
	},
	CustomerInfoDetailPageNavigateButtonarea: {
		marginHorizontal: distances.doubleDistance * 1.5,
	},
	customerInfoDetailPageHeadTextStyle: {
		flexDirection: 'row',
	},
	customerInfoDetailPageHeadIcon: {
		justifyContent: 'flex-end',
		marginHorizontal: distances.defaultDistance,
	},
	customerInfoDetailPageHeadIconStyle: {
		color: colors.efesblue,
	},
	customerInfoStoreIsFalse: {
		backgroundColor: colors.red,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: distances.halfDistance,
		width: distances.defaultDistance * 8,
	},
	customerInfoStoreIsTrue: {
		backgroundColor: colors.green,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: distances.halfDistance,
		padding: 3,
	},
	customerInfoStoreText: {
		color: colors.white,
		fontWeight: 'bold',
	},
	customerInfoStoreCode: {
		fontWeight: 'bold',
	},
	customerInfoStoreNAME: {
		marginBottom: distances.quarterDistance,
	},
	customerInfoStoreIsFalseAndTrueArea: {
		width: distances.defaultDistance * 4,
	},
	icShopTinyLogo: {
		width: 26,
		height: 26,
	},
});

export default CustomerInfoHead;
