import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import distances from '../../../constants/distances';


const ZiyaretListesiComponent = ({
	StoreCode,
	StoreFullName,
	Visiter,
	VisiterDesc,
	VisiterVisitTime,
}) => {
	return (
		<ScrollView>
			<View style={styles.ZiyaretListesiMagzaCodeAndFullName}>
				<View style={styles.ZiyaretListesiMagzaCodeAndFullNameArea}>
					<Text style={styles.ZiyaretListesiStoreCode}>{StoreCode}</Text>
					<Text style={styles.ZiyaretListesiStoreCode}>{StoreFullName}</Text>
				</View>
			</View>
			<View style={styles.ZiyaretListesiMagzaCodeAndFullName}>
				<View style={styles.ZiyaretListesiMagzaCodeAndFullNameArea}>
					<View style={styles.ZiyaretListesiVisiterAndTimeArea}>
						<Text style={styles.ZiyaretListesiVisiterAndTime}>{Visiter}</Text>
						<Text>{VisiterVisitTime}</Text>
					</View>
					<Text style={styles.VisiterDesc}>{VisiterDesc}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	ZiyaretListesiMagzaCodeAndFullName: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		backgroundColor: colors.white,
	},
	ZiyaretListesiMagzaCodeAndFullNameArea: {
		paddingVertical: distances.halfDistance,
		paddingHorizontal: distances.defaultDistance,
	},
	ZiyaretListesiStoreCode: {
		marginTop: distances.halfDistance / 4,
	},
	VisiterDesc: {
		color: colors.grey,
	},
	ZiyaretListesiVisiterAndTime: {
		marginTop: distances.halfDistance / 4,
		marginBottom: distances.halfDistance / 4,
	},
	ZiyaretListesiVisiterAndTimeArea: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
export default ZiyaretListesiComponent;
